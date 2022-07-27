export class Order {


    constructor(
        private _userId: number,
        private _primersId: string,
        private _concentration: number

    ) { }


    public get primersId(): string {
        return this._primersId;
    }
    public set primersId(value: string) {
        this._primersId = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get concentration(): number {
        return this._concentration;
    }
    public set concentration(value: number) {
        this._concentration = value;
    }

}
