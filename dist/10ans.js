"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let file = 'D:\assignment_of_gh\typrscipt_assignment\10_sirShahmeer\ts_assignment_10\text.txt';
fs_1.default.readFile(file, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
