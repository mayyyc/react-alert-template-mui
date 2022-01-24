"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const AlertDialog = ({ close, message, options }) => {
    return (react_1.default.createElement(material_1.Dialog, { open: true, onClose: close, keepMounted: true, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" },
        react_1.default.createElement(material_1.DialogTitle, { id: "alert-dialog-slide-title" }, options.title),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement(material_1.DialogContentText, { id: "alert-dialog-slide-description" }, message)),
        react_1.default.createElement(material_1.DialogActions, null,
            options.actions &&
                options.actions.map((action, index) => (react_1.default.createElement(material_1.Button, { onClick: () => {
                        action.onClick();
                        close();
                    }, color: "primary", key: index }, action.copy))),
            react_1.default.createElement(material_1.Button, { onClick: close, color: "primary" }, options.closeCopy || "Okay"))));
};
exports.default = AlertDialog;
//# sourceMappingURL=index.js.map