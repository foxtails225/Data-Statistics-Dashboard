import { Response, Request } from "express";

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { spawn } = require("child_process");
    var child = await spawn("python", [
      `${process.cwd()}/src/controllers/gap/gap-data.py`,
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

export { getItems };
