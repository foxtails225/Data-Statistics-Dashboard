import { Response, Request } from "express";
import db from "../model";
import { getAvgs } from "../utils";
import { testData, cartData } from "../data/test";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { spawn } = require("child_process");
    var child = await spawn("python", [
      `${process.cwd()}/src/controllers/gap_data_v1.py`,
      req.query.selected,
      "csv",
    ]);

    child.stdout.on("data", function (data: any) {
      res.status(200).send(data.toString());
    });
  } catch (error) {
    throw error;
  }
};

const getPlotItems = async (req: Request, res: Response): Promise<void> => {
  let result: any = [];

  try {
    const { spawn } = require("child_process");
    var child = await spawn("python", [
      `${process.cwd()}/src/controllers/plot_data_v1.py`,
      JSON.stringify(testData),
    ]);

    child.stderr.on("data", function (data: any) {
      console.log(data.toString());
    });

    child.stdout.on("data", function (data: any) {
      result += data.toString();
    });

    child.on("exit", (code: any) => {
      console.log(`process has finished and exited with code: ${code}`);
      res.status(200).send({ heatmap: testData, intrpl: JSON.parse(result) });
    });
  } catch (error) {
    throw error;
  }
};

const getCartItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { system, version, dataType } = req.query;

    if (system && version) {
      const query =
        dataType === "coverage"
          ? "b.percent_coverage"
          : "100 - b.percent_coverage";
      const sql = `select distinct a.user_altitude as altitude, a.user_inclination as inclination, \
        ${query} as value from file_id_usat as a inner join stk_report_summary_stats \
        as b on a.id = b.file_id where system_id=${system} and b.is_active=1 and a.system_attribute_version_id=${version} \
        order by altitude, user_inclination, value, a.id`;

      let result: any = {};
      let tdata: any = cartData;

      db.getConnection(function (err, connection) {
        if (err) {
          connection.release();
          console.log(" Error getting mysql_pool connection: " + err);
          throw err;
        }

        connection.query(sql, (err, data, fields) => {
          if (err) throw err;
          tdata["data"]["label"] = dataType === "coverage" ? "Coverage (%)" : "No Coverage (%)";
          tdata["data"]["plot_value"] = data;
          result["terrestrial"] = testData;
          result["data"] = tdata;

          res.status(200).send(result);
          connection.release();
        });
      });
    }
  } catch (error) {
    throw error;
  }
};

const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { dataType, fileId } = req.query as any;
    let result: any = {};
    let sql: string;

    if (fileId.length > 0) {
      if (fileId.length === 1) {
        sql = `select a.simulation_time, a.gap_duration from stk_report as a inner join file_id_usat as b on a.file_id = b.id \
          where b.id=${
            JSON.parse(fileId[0]).id
          } and b.is_active=1 order by a.simulation_time`;
      } else {
        sql = `select a.simulation_time, a.gap_duration from stk_report as a inner join file_id_usat as b on a.file_id = b.id \
          where b.id=${JSON.parse(fileId[0]).id} or b.id=${
          JSON.parse(fileId[1]).id
        } and \
          b.is_active=1 order by a.simulation_time`;
      }

      db.getConnection(function (err, connection) {
        if (err) {
          connection.release();
          console.log(" Error getting mysql_pool connection: " + err);
          throw err;
        }

        connection.query(sql, (err, data, fields) => {
          if (err) throw err;

          if (dataType === "coverage") {
            let fVal = Number(data[0].simulation_time);
            let preVal = 0;
            let tdata: Array<number> = [];

            data.map((item: any) => {
              if (Number(item.gap_duration)) {
                let pVal = preVal - fVal
                fVal = Number(item.simulation_time);
                tdata.push(pVal)
              }
              preVal = Number(item.simulation_time);
            }); 
            
            result["coverage"] = {
              data: getAvgs(tdata),
              title: "Coverage Running Average",
              type: "line",
            };
            result["coverage_histogram"] = {
              data: tdata,
              title: "Coverage Distribution",
              type: "histogram",
            };
          } else {
            let tdata = data.map((item: any) => {
              return Number(item.gap_duration);
            });

            result["gap"] = {
              data: getAvgs(tdata),
              title: "Gaps Running Average",
              type: "line",
            };
            result["gap_histogram"] = {
              data: tdata,
              title: "Gaps Distribution",
              type: "histogram",
            };
          }

          res.status(200).json(result);
          connection.release();
        });
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    throw error;
  }
};

const getSystems = async (req: Request, res: Response): Promise<void> => {
  try {
    const sql = `select id as system_id, name as system_name from system_version`;

    db.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        console.log(" Error getting mysql_pool connection: " + err);
        throw err;
      }

      connection.query(sql, (err, data, fields) => {
        if (err) throw err;

        res.status(200).json(data);
        connection.release();
      });
    });
  } catch (error) {
    throw error;
  }
};

const getSystemVersion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { system } = req.query;
    const sql = `select  distinct system_id, system_attribute_version_id as versions from file_id_usat where system_id=${system}`;

    db.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        console.log(" Error getting mysql_pool connection: " + err);
        throw err;
      }

      connection.query(sql, (err, data, fields) => {
        if (err) throw err;

        res.status(200).json(data);
        connection.release();
      });
    });
  } catch (error) {
    throw error;
  }
};

const getFildId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_altitude, user_inclination, system, version } = req.query;
    const sql = `select id from file_id_usat where system_id=${system} and system_attribute_version_id=${version} and \
      user_altitude=${user_altitude} and user_inclination=${user_inclination} and is_active=1`;

    db.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        console.log(" Error getting mysql_pool connection: " + err);
        throw err;
      }

      connection.query(sql, (err, data, fields) => {
        if (err) throw err;

        res.status(200).json(data);
        connection.release();
      });
    });
  } catch (error) {
    throw error;
  }
};

export {
  getItems,
  getPlotItems,
  getCartItems,
  getItem,
  getSystems,
  getSystemVersion,
  getFildId,
};
