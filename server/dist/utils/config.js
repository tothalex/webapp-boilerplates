"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.config = {
    mongo: process.env.MONGO,
    jwtSecret: process.env.JWT_SECRET
};
//# sourceMappingURL=config.js.map