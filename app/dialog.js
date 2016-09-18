"use strict";
var Dialog = (function () {
    function Dialog(command, result, _error) {
        this.command = command;
        this.result = result;
        this._error = _error;
        if (_error == "ok") {
            this.error = false;
        }
        else {
            this.error = true;
        }
    }
    Dialog.prototype.getCommand = function () { return this.command; };
    Dialog.prototype.getResult = function () { return this.result; };
    Dialog.prototype.isError = function () { return this.error; };
    return Dialog;
}());
exports.Dialog = Dialog;
//# sourceMappingURL=dialog.js.map