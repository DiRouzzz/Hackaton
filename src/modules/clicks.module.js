import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text){
        this.type = type;
        this.text = text;
    }

    onClick(){
        const a = 0;
    }
}