
export class  Employee {
    private _name:string;
    private _birstday:Date;
    private _address:string;
    private _scope:string;

    constructor(name:string, birstday:Date, address:string, scope:string) {
        this._name = name;
        this._birstday = birstday;
        this._address = address;
        this._scope = scope;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get birstday() {
        return this._birstday;
    }

    set birstday(value) {
        this._birstday = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get scope() {
        return this._scope;
    }

    set scope(value) {
        this._scope = value;
    }

}