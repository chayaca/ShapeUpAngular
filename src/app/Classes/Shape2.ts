import { Points } from "./Points";
import { Result } from "./Result";

export class Shapes2 {
    public id: number;
    public area: boolean;
    public unit: number;
    public point: Array<Points>;
    public result: Array<Result>;
    constructor() {
       this.result=new Array<Result>();
       this.point=new Array<Points>();
    }
}