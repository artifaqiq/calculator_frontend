export class TodoItem{
    constructor(private text: String, private result: String){ }

    getText(){
        return this.text;
    }
    getResult() {
        return this.result;
    }
}