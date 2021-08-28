import AbstractView from "./AbstractView";
import IResource from "../ResourceImplementations/IResource";

export default class FullView extends AbstractView {
    constructor(resource: IResource) {
        super(resource);
    }
    show() {
        return `${this.resource.image()}
        ${this.resource.abstract()} 
        ${this.resource.url()}`;
    }

}