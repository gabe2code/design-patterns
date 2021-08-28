import IResource from "./IResource";
import Item from "../Resources/Item";

export default class ItemResource implements IResource {
    private _item: Item;

    constructor(item: Item) {
        this._item = item;
    }

    abstract(): string {
        return this._item.description;
    }

    image(): string {
        return this._item.preview;
    }

    url(): string {
        return this._item.publicUrl;
    }

}