export default class RequestBodyModel<T> {

    constructor(private _requestBody: T) {
    }

    get requestBody(): T {
        return this._requestBody;
    }

    set requestBody(newRequestBody: T) {
        this._requestBody = newRequestBody;
    }
}
