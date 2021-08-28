import Item from "./Item";

export default class Player {
    private _name: string;
    private _lastName: string;
    private _description: string;
    private _preview:string;
    private _items: Item[];
    private _profile: string;

    get profile(): string {
        return this._profile;
    }

    set profile(value: string) {
        this._profile = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get preview(): string {
        return this._preview;
    }

    set preview(value: string) {
        this._preview = value;
    }
}