import { IApiMethod, IKeyValue } from '../models/Api.model';

export default class ApiService {

    public headers: string[][] = [];

    private method: IApiMethod = 'POST';

    constructor(public authToken: string) {
    }

    public setHeaders(headers: Array<IKeyValue<string, string>>): ApiService {
        for (const i in headers) {
            if (headers[i].hasOwnProperty('key')
                && headers[i].hasOwnProperty('value')) {
                this.headers.push([headers[i].key, headers[i].value]);
            }
        }
        return this;
    }

    public resetHeaders(): void {
        this.headers = [];
    }

    public setMethod(newMethod: IApiMethod): ApiService {
        this.method = newMethod;
        return this;
    }

    public request<T>(body: T): RequestInit {
        return {
            headers: this.headers,
            method: this.method,
            body: this.toUrlEncodedFormData(body),
        };
    }

    private toUrlEncodedFormData(json: any): string {
        return Object.keys(json)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
            .join('&');
    }
}
