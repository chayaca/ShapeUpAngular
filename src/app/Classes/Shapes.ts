import { Points } from "./Points";
import { Result } from "./Result";

export class Shapes {
    public id: number;
    public tempId: number;
    public area: boolean;
    public unit: number;
    public point: Array<Points>;
    public result: Result;
    constructor() {
       this.result=new Result();
       this.point=new Array<Points>();
    }
}