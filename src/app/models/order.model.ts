export class Order {

    constructor(
        private _userId: number,
        private _primersId: string

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


}
