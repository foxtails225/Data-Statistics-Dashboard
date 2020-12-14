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
    let data: any = cartData;
    data["terrestrial"] = testData;

    res.status(200).send(data);
  } catch (error) {
    throw error;
  }
};

const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const sql =
      "select gap_duration from stkreport \
      where gap_duration is not null";
    let result: any = {};

    db.query(sql, (err, data, fields) => {
      if (err) throw err;

      let tdata = data.map((item: any) => {
        return Number(item.gap_duration)
      });
      
      result["coverage"] = {
        data: getAvgs(tdata),
        title: "Coverage Running Average",
        type: "line",
      };

      result["gap"] = {
        data: getAvgs(tdata),
        title: "Gaps Running Average",
        type: "line",
      };

      result["coverage_histogram"] = {
        data: tdata,
        title: "Coverage Distribution",
        type: "histogram",
      };
      result["gap_histogram"] = {
        data: tdata,
        title: "Gaps Distribution",
        type: "histogram",
      };

      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export { getItems, getPlotItems, getCartItems, getItem };
