"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function notify(content) {
    if (process.env.WEBHOOK_URL) {
        try {
            axios_1.default.post(process.env.WEBHOOK_URL, { content });
        }
        catch (e) {
            console.error(`could not notify webhook: ${content}`);
        }
    }
    else {
        console.warn(content);
    }
}
exports.default = notify;
