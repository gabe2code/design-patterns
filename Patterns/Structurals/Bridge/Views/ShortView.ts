import AbstractView from "./AbstractView";
import IResource from "../ResourceImplementations/IResource";

class ShortView extends AbstractView {
    constructor(resource: IResource) {
        super(resource);
    }

    show() {
        return `${this.resource.image()} ${this.resource.url()}`
    }

}