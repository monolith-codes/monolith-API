"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://terpsmansion.com',
}));
app.post('/terpsmansion/maintenancelogin', (0, express_validator_1.body)('password').notEmpty(), (req, res) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (result.isEmpty()) {
        const data = (0, express_validator_1.matchedData)(req);
        if (data.password === process.env.PROD_PASSWORD) {
            return res.status(200).send(true);
        }
        else {
            return res.status(406).send(false);
        }
    }
    res.send({ errors: result.array() });
});
app.get('/', (req, res) => {
    return res.send('ITS WORKING');
});
app.listen(port, () => {
    console.log('Monolith API listening on ' + port.toString());
});
//# sourceMappingURL=index.js.map