import { Response, Request } from "express";
import { testData } from "../../data/test";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { spawn } = require("child_process");
    var child = await spawn("python", [
      `${process.cwd()}/src/controllers/gap-data.py`,
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
      `${process.cwd()}/src/controllers/plot-data.py`,
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

export { getItems, getPlotItems };
