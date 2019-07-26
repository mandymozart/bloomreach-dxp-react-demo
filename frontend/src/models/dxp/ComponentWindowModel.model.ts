import { LinkModel } from "./LinkModel.model";

/**
 * This defines either a page component (which is a composite representation of HST Component Configurations)
 * or a single descendant HstComponent resource representation.
 */
type IComponentWindowModelParams = {

    /**
     * The reference namespace ID of the component.
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
     * HST Component configuration node name.
     *
     * See HstComponent Configuration (https://documentation.bloomreach.com/library/concepts/component-development/hstcomponent-configuration.html)
     * for details.
     */
    name: string

    /**
     * HST Component class name.
     *
     * See HstComponent Configuration (https://documentation.bloomreach.com/library/concepts/component-development/hstcomponent-configuration.html)
     * for details.
     */
    componentClass: string

    /**
     * HST Component class type.
     *
     * COMPONENT, CONTAINER_COMPONENT or CONTAINER_ITEM_COMPONENT.
     * COMPONENT means a normal HstComponent, neither Channel Editor container nor container item component.
     *
     * See Channel Editor Containers (https://documentation.bloomreach.com/library/concepts/template-composer/channel-editor-containers.html)
     * for detail on container or container item components.
     */
    type: 'COMPONENT' | 'CONTAINER_COMPONENT' | 'CONTAINER_ITEM_COMPONENT'

    /**
     * HST Component catalog item's label.
     *
     * See Channel Editor Catalog(https://documentation.bloomreach.com/library/concepts/template-composer/channel-editor-catalog.html)
     * for detail.
     */
    label?: string

    /**
     * Array containing child component representations, each of which contains data in the same structure of
     * IComponentWindowModel, recursively.
     */

    components?: IComponentWindowModel[]

    models?: Map<string, JSON>

};

export default class IComponentWindowModel {
    constructor(params: IComponentWindowModelParams){

    }
}
