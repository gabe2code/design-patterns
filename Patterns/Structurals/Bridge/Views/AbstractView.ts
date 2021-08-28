import IResource from "../ResourceImplementations/IResource";

export default abstract class AbstractView {
    protected resource: IResource
    protected constructor(resource: IResource) {
        this.resource = resource;
    }

    abstract show ();
}