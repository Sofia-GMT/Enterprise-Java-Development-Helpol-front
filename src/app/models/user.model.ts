export class User {

    constructor(
        private _name: string,
        private _idInstitution: number,
        private _password: string,
        private _status: string,
    ) { }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get idInstitution(): number {
        return this._idInstitution;
    }
    public set idInstitution(value: number) {
        this._idInstitution = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


    
}