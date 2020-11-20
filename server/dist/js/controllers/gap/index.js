"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { spawn } = require("child_process");
        var child = yield spawn("python", [
            `${process.cwd()}/src/controllers/gap/gap-data.py`,
            req.query.selected,
            "csv",
        ]);
        child.stdout.on("data", function (data) {
            res.status(200).send(data.toString());
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getItems = getItems;
