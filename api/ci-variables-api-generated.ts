/* tslint:disable */
/* eslint-disable */
/*
GitLab API

An OpenAPI definition for the GitLab REST API.
Few API resources or endpoints are currently included.
The intent is to expand this to match the entire Markdown documentation of the API:
<https://docs.gitlab.com/ee/api/>. Contributions are welcome.

When viewing this on gitlab.com, you can test API calls directly from the browser
against the `gitlab.com` instance, if you are logged in.
The feature uses the current [GitLab session cookie](https://docs.gitlab.com/ee/api/index.html#session-cookie),
so each request is made using your account.

Instructions for using this tool can be found in [Interactive API Documentation](https://docs.gitlab.com/ee/api/openapi/openapi_interactive.html)


The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { APIEntitiesCiVariable } from '../models';
// @ts-ignore
import { CivariablesCreateNewInstanceVariableRequest } from '../models';
// @ts-ignore
import { CivariablesUpdateInstanceVariableRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CiVariablesApi - axios parameter creator
 * @export
 */
export const CiVariablesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new instance-level variable
         * @param {CivariablesCreateNewInstanceVariableRequest} civariablesCreateNewInstanceVariableRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewInstanceVariable: async (civariablesCreateNewInstanceVariableRequest: CivariablesCreateNewInstanceVariableRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'civariablesCreateNewInstanceVariableRequest' is not null or undefined
            assertParamExists('createNewInstanceVariable', 'civariablesCreateNewInstanceVariableRequest', civariablesCreateNewInstanceVariableRequest)
            const localVarPath = `/api/v4/admin/ci/variables`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Private-Token", keyParamName: "apiKeyAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: civariablesCreateNewInstanceVariableRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/admin/ci/variables',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(civariablesCreateNewInstanceVariableRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an existing instance-level variable
         * @param {string} key The key of a variable
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInstanceVariable: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('deleteInstanceVariable', 'key', key)
            const localVarPath = `/api/v4/admin/ci/variables/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key !== undefined ? key : `-key-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Private-Token", keyParamName: "apiKeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/admin/ci/variables/{key}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the details of a specific instance-level variable
         * @param {string} key The key of a variable
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificInstanceVariable: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getSpecificInstanceVariable', 'key', key)
            const localVarPath = `/api/v4/admin/ci/variables/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key !== undefined ? key : `-key-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Private-Token", keyParamName: "apiKeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/admin/ci/variables/{key}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all instance-level variables
         * @param {number} [page] Current page number
         * @param {number} [perPage] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInstanceVariables: async (page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/admin/ci/variables`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Private-Token", keyParamName: "apiKeyAuth", configuration })
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/admin/ci/variables',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an instance-level variable
         * @param {string} key The key of a variable
         * @param {CivariablesUpdateInstanceVariableRequest} [civariablesUpdateInstanceVariableRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceVariable: async (key: string, civariablesUpdateInstanceVariableRequest?: CivariablesUpdateInstanceVariableRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('updateInstanceVariable', 'key', key)
            const localVarPath = `/api/v4/admin/ci/variables/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key !== undefined ? key : `-key-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Private-Token", keyParamName: "apiKeyAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: civariablesUpdateInstanceVariableRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/admin/ci/variables/{key}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(civariablesUpdateInstanceVariableRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CiVariablesApi - functional programming interface
 * @export
 */
export const CiVariablesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CiVariablesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new instance-level variable
         * @param {CiVariablesApiCreateNewInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewInstanceVariable(requestParameters: CiVariablesApiCreateNewInstanceVariableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesCiVariable>> {
            const civariablesCreateNewInstanceVariableRequest: CivariablesCreateNewInstanceVariableRequest = {
                key: requestParameters.key,
                value: requestParameters.value,
                protected: requestParameters.protected,
                masked: requestParameters.masked,
                raw: requestParameters.raw,
                variable_type: requestParameters.variable_type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewInstanceVariable(civariablesCreateNewInstanceVariableRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an existing instance-level variable
         * @param {CiVariablesApiDeleteInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteInstanceVariable(requestParameters: CiVariablesApiDeleteInstanceVariableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesCiVariable>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteInstanceVariable(requestParameters.key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the details of a specific instance-level variable
         * @param {CiVariablesApiGetSpecificInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificInstanceVariable(requestParameters: CiVariablesApiGetSpecificInstanceVariableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesCiVariable>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificInstanceVariable(requestParameters.key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all instance-level variables
         * @param {CiVariablesApiListInstanceVariablesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInstanceVariables(requestParameters: CiVariablesApiListInstanceVariablesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesCiVariable>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listInstanceVariables(requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an instance-level variable
         * @param {CiVariablesApiUpdateInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInstanceVariable(requestParameters: CiVariablesApiUpdateInstanceVariableRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesCiVariable>> {
            const civariablesUpdateInstanceVariableRequest: CivariablesUpdateInstanceVariableRequest = {
                value: requestParameters.value,
                protected: requestParameters.protected,
                masked: requestParameters.masked,
                raw: requestParameters.raw,
                variable_type: requestParameters.variable_type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInstanceVariable(requestParameters.key, civariablesUpdateInstanceVariableRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CiVariablesApi - factory interface
 * @export
 */
export const CiVariablesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CiVariablesApiFp(configuration)
    return {
        /**
         * Create a new instance-level variable
         * @param {CiVariablesApiCreateNewInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewInstanceVariable(requestParameters: CiVariablesApiCreateNewInstanceVariableRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesCiVariable> {
            return localVarFp.createNewInstanceVariable(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an existing instance-level variable
         * @param {CiVariablesApiDeleteInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInstanceVariable(requestParameters: CiVariablesApiDeleteInstanceVariableRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesCiVariable> {
            return localVarFp.deleteInstanceVariable(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the details of a specific instance-level variable
         * @param {CiVariablesApiGetSpecificInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificInstanceVariable(requestParameters: CiVariablesApiGetSpecificInstanceVariableRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesCiVariable> {
            return localVarFp.getSpecificInstanceVariable(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all instance-level variables
         * @param {CiVariablesApiListInstanceVariablesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInstanceVariables(requestParameters: CiVariablesApiListInstanceVariablesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesCiVariable> {
            return localVarFp.listInstanceVariables(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an instance-level variable
         * @param {CiVariablesApiUpdateInstanceVariableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInstanceVariable(requestParameters: CiVariablesApiUpdateInstanceVariableRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesCiVariable> {
            return localVarFp.updateInstanceVariable(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewInstanceVariable operation in CiVariablesApi.
 * @export
 * @interface CiVariablesApiCreateNewInstanceVariableRequest
 */
export type CiVariablesApiCreateNewInstanceVariableRequest = {
    
} & CivariablesCreateNewInstanceVariableRequest

/**
 * Request parameters for deleteInstanceVariable operation in CiVariablesApi.
 * @export
 * @interface CiVariablesApiDeleteInstanceVariableRequest
 */
export type CiVariablesApiDeleteInstanceVariableRequest = {
    
    /**
    * The key of a variable
    * @type {string}
    * @memberof CiVariablesApiDeleteInstanceVariable
    */
    readonly key: string
    
}

/**
 * Request parameters for getSpecificInstanceVariable operation in CiVariablesApi.
 * @export
 * @interface CiVariablesApiGetSpecificInstanceVariableRequest
 */
export type CiVariablesApiGetSpecificInstanceVariableRequest = {
    
    /**
    * The key of a variable
    * @type {string}
    * @memberof CiVariablesApiGetSpecificInstanceVariable
    */
    readonly key: string
    
}

/**
 * Request parameters for listInstanceVariables operation in CiVariablesApi.
 * @export
 * @interface CiVariablesApiListInstanceVariablesRequest
 */
export type CiVariablesApiListInstanceVariablesRequest = {
    
    /**
    * Current page number
    * @type {number}
    * @memberof CiVariablesApiListInstanceVariables
    */
    readonly page?: number
    
    /**
    * Number of items per page
    * @type {number}
    * @memberof CiVariablesApiListInstanceVariables
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for updateInstanceVariable operation in CiVariablesApi.
 * @export
 * @interface CiVariablesApiUpdateInstanceVariableRequest
 */
export type CiVariablesApiUpdateInstanceVariableRequest = {
    
    /**
    * The key of a variable
    * @type {string}
    * @memberof CiVariablesApiUpdateInstanceVariable
    */
    readonly key: string
    
} & CivariablesUpdateInstanceVariableRequest

/**
 * CiVariablesApiGenerated - object-oriented interface
 * @export
 * @class CiVariablesApiGenerated
 * @extends {BaseAPI}
 */
export class CiVariablesApiGenerated extends BaseAPI {
    /**
     * Create a new instance-level variable
     * @param {CiVariablesApiCreateNewInstanceVariableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CiVariablesApiGenerated
     */
    public createNewInstanceVariable(requestParameters: CiVariablesApiCreateNewInstanceVariableRequest, options?: AxiosRequestConfig) {
        return CiVariablesApiFp(this.configuration).createNewInstanceVariable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an existing instance-level variable
     * @param {CiVariablesApiDeleteInstanceVariableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CiVariablesApiGenerated
     */
    public deleteInstanceVariable(requestParameters: CiVariablesApiDeleteInstanceVariableRequest, options?: AxiosRequestConfig) {
        return CiVariablesApiFp(this.configuration).deleteInstanceVariable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the details of a specific instance-level variable
     * @param {CiVariablesApiGetSpecificInstanceVariableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CiVariablesApiGenerated
     */
    public getSpecificInstanceVariable(requestParameters: CiVariablesApiGetSpecificInstanceVariableRequest, options?: AxiosRequestConfig) {
        return CiVariablesApiFp(this.configuration).getSpecificInstanceVariable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all instance-level variables
     * @param {CiVariablesApiListInstanceVariablesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CiVariablesApiGenerated
     */
    public listInstanceVariables(requestParameters: CiVariablesApiListInstanceVariablesRequest = {}, options?: AxiosRequestConfig) {
        return CiVariablesApiFp(this.configuration).listInstanceVariables(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an instance-level variable
     * @param {CiVariablesApiUpdateInstanceVariableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CiVariablesApiGenerated
     */
    public updateInstanceVariable(requestParameters: CiVariablesApiUpdateInstanceVariableRequest, options?: AxiosRequestConfig) {
        return CiVariablesApiFp(this.configuration).updateInstanceVariable(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
