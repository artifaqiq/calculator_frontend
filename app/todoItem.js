"use strict";
var TodoItem = (function () {
    function TodoItem(text, result) {
        this.text = text;
        this.result = result;
    }
    TodoItem.prototype.getText = function () {
        return this.text;
    };
    TodoItem.prototype.getResult = function () {
        return this.result;
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoItem.js.map