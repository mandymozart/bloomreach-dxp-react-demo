import { AggregatedPageModel } from '../models/dxp/AggregatedPageModel.model';
import { IComponentWindowModel } from '../models/dxp/ComponentWindowModel.model';

import { ApiResult } from '../models/Api.model';
import RequestBodyModel from '../models/RequestBody.model';

import ApiService from './Api.service';

import baseUrls from '../configuration/EnvironmentVariables';

const authToken = 'something';

export default class ResourceApiService {

    private api: ApiService;

    constructor() {
        this.api = new ApiService(authToken)
            .setHeaders([
                {
                    key: 'Accept',
                    value: 'application/json',
                }, {
                    key: 'Content-Type',
                    value: 'application/x-www-form-urlencoded',
                },
            ]);

        console.log(this.api.authToken);
        console.log(this.api.headers);
    }

    /**
     * Gets a AggregatePageModel
     *
     * @param pathInfo
     * @param previewPrefix
     */
    public getPage(
        pathInfo: string,
        previewPrefix: string,
    ): Promise<AggregatedPageModel> {
        const url = this.buildApiUrl(pathInfo, previewPrefix);
        return fetch(url)
            .then((res) => res.json())
            .then((response: any) => {

                if (response.Result === ApiResult.FAILURE) {
                    return response;
                } else if (response.Result === ApiResult.SUCCESS) {
                    return Promise.resolve(response.Response);
                }
                return Promise.reject(response.status);
            }).catch((error: Error) => {
                console.log('Error while fetching CMS page data for URL:', url);
                console.log(error);
            });
    }

    /**
     * Gets an individual IComponentWindowModel
     *
     * @param pathInfo
     * @param previewPrefix
     * @param componentId
     * @param body
     */
    public updateComponent(
        pathInfo: string,
        previewPrefix: string,
        componentId: string,
        body: RequestBodyModel<any>,
    ): Promise<ComponentWindowModel> {
        const url = this.buildApiUrl(pathInfo, previewPrefix, componentId);

        return fetch(url, this.api.request(body))
            .then((res) => res.json())
            .then((response: any) => {
                if (response.Result === ApiResult.FAILURE) {
                    return response;
                } else if (response.Result === ApiResult.SUCCESS) {
                    return Promise.resolve(response.Response);
                }
                return Promise.reject(response.status);
            }).catch((error: Error) => {
                console.log('Error while fetching CMS component data for URL:', url);
                console.log(error);
            });
    }

    /**
     * Helper function to build urlencoded api request urls
     *
     * @param pathInfo
     * @param previewPrefix
     * @param componentId
     */
    private buildApiUrl(pathInfo: string, previewPrefix: string, componentId?: string): string {
        let url = baseUrls.cmsBaseUrl;
        // add api path to URL, and prefix with contextPath and preview-prefix if used
        if (baseUrls.cmsContextPath !== '') {
            url += '/' + baseUrls.cmsContextPath;
        }
        if (previewPrefix) {
            url += '/' + previewPrefix;
        }
        if (baseUrls.cmsChannelPath  !== '') {
            url += '/' + baseUrls.cmsChannelPath;
        }
        url += '/' + baseUrls.cmsApiPath;
        if (pathInfo) {
            url += '/' + pathInfo;
        }
        // if component ID is supplied, URL should be a component rendering URL
        if (componentId) {
            url += baseUrls.cmsApiComponentRenderingUrlSuffix + componentId;
        }
        return url;
    }

}
