export default class Item {
    private _name: string;
    private _description: string;
    private _preview: string;
    private _publicUrl: string;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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

    get publicUrl(): string {
        return this._publicUrl;
    }

    set publicUrl(value: string) {
        this._publicUrl = value;
    }
}