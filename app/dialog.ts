export class Dialog {

    error: boolean

    constructor(private command: String, private result: String, private _error: string){
        if(_error == "ok") {
            this.error = false
        } else {
            this.error = true
        }
    }

    getCommand() { return this.command }

    getResult() { return this.result }

    isError() {return this.error }

}