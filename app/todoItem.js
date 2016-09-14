"use strict";
var TodoItem = (function () {
    function TodoItem(text1) {
        this.text = text1;
    }
    TodoItem.prototype.getText = function () {
        return this.text;
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoItem.js.map