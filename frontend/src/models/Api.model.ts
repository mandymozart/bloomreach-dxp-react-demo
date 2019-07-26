export interface IApiHeader {
    key: string;
    value: string;
}

export interface IKeyValue<T, U> {
    key: T;
    value: U;
}

export type IApiMethod = 'POST' | 'GET';

export enum ApiResult {
    SUCCESS = 'success',
    FAILURE = 'failure',
}

export interface IApiError {
    ErrorCode: string;
    Description: string;
}

export interface IApiResponse<T> {
    Result: ApiResult;
    Response: T | IApiError;
    status: string;
}
