export class Primers {



    constructor(
        private _name: string,
        private _forwardSequence: string,
        private _reverseSequence: string,
        private _id: number
    ){}

    public get reverseSequence(): string {
        return this._reverseSequence;
    }
    public set reverseSequence(value: string) {
        this._reverseSequence = value;
    }
    public get forwardSequence(): string {
        return this._forwardSequence;
    }
    public set forwardSequence(value: string) {
        this._forwardSequence = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


}
