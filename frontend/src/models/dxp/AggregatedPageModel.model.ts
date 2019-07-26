import { LinkModel } from "./LinkModel.model";
import IComponentWindowModel from "./ComponentWindowModel.model";

/**
 * This defines the root level object in Page Model JSON API responses.
 */
type IAggregatedPageModelJSON = {
    /**
     * The reference namespace ID of the root page component.
     */
    id: string

    /**
     * Metadata map, containing pairs of String key and JSON value.
     */
    _meta?: Map<string, JSON>

    /**
     * Follow-up links, containing pairs of link name key and LinkModel value.
     */
    _links?: Map<string, LinkModel>

    /**
     * The page representation in JSON. This representation follows the same structure as the HST component
     * configuration (IComponentWindowModel) for a page.
     */
    page: JSON

    /**
     * Content representation map, containing pairs of JSON Identifier key and content item representation in JSON.
     * Any HST Content Beans (https://documentation.bloomreach.com/library/concepts/content-beans/creating-content-beans.html),
     * contributed by each HstComponent, for documents, folders, gallery images and assets
     * are included in this content field.
     * For details on how content items are serialized to JSON, see Model JSON Mapping Details.
     */
    content: Map<string, JSON>

}

export default class IAggregatedPageModel {

    id: string;
    meta?: Map<string, any> | null;
    links?: Map<string, LinkModel> | null;
    page: IComponentWindowModel | null;

    constructor(json: IAggregatedPageModelJSON){
        this.id = json.id;
        this.meta = (json._meta) ? json._meta : null;
        this.page = (json.page) ? this.decodeIComponentWindowModel(json.page) : null;

    }

    /**
     * TODO: Decode JSON to actual component instances via http://choly.ca/post/typescript-json/
     * @param component
     */
    public decodeIComponentWindowModel(component: IComponentWindowModelJSON): IComponentWindowModel {
        let componentInstance = new IComponentWindowModel();
        return componentInstance;
    };
}
