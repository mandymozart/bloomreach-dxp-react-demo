/**
 * This defines a generic container of the follow-up link objects for a linkable resource representation.
 */
export type LinkModel = {
    /**
     * The URI of this link.
     */
    href: string

    /**
     * The type of the link. e.g, internal, external or resource.
     *
     * internal means the link is in the same SPA page resources, and so SPA may retrieve the linked resource through
     * AJAX (XHR) calls, without having to reload the whole SPA page.
     *
     * external links cannot be represented within the current SPA, meaning the link should be treated as a document
     * request (normal URL) and should not be fetched as XHR request by the SPA.
     *
     * resource links are mostly for binary resources  such as images and assets.
     */
    type?: string

    /**
     * The name of the relationship that the linked resource has to the page from which it’s referenced.
     */
    rel?: string

    /**
     * The title of the link.
     */
    title?: string
};
