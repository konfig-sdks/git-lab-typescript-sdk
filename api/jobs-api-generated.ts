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
import { APIEntitiesJob } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a single job by ID
         * @param {number} id The ID of the project
         * @param {number} jobId The ID of the job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleById: async (id: number, jobId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSingleById', 'id', id)
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('getSingleById', 'jobId', jobId)
            const localVarPath = `/api/v4/projects/{id}/jobs/{job_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"job_id"}}`, encodeURIComponent(String(jobId !== undefined ? jobId : `-job_id-`)));
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
                pathTemplate: '/api/v4/projects/{id}/jobs/{job_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List jobs for a project
         * @param {number} id The ID of the project
         * @param {Array<string>} [scope] Return all jobs with the specified statuses
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listForProject: async (id: number, scope?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listForProject', 'id', id)
            const localVarPath = `/api/v4/projects/{id}/jobs`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
            if (scope) {
                localVarQueryParameter['scope'] = scope;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/projects/{id}/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Run a manual job
         * @param {number} id The ID of the project
         * @param {number} jobId The ID of the manual job to run
         * @param {Array<string>} [jobVariablesAttributes] An array containing the custom variables available to the job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runManualJob: async (id: number, jobId: number, jobVariablesAttributes?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('runManualJob', 'id', id)
            // verify required parameter 'jobId' is not null or undefined
            assertParamExists('runManualJob', 'jobId', jobId)
            const localVarPath = `/api/v4/projects/{id}/jobs/{job_id}/play`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)))
                .replace(`{${"job_id"}}`, encodeURIComponent(String(jobId !== undefined ? jobId : `-job_id-`)));
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
            if (jobVariablesAttributes) {
                localVarQueryParameter['job_variables_attributes'] = jobVariablesAttributes;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/projects/{id}/jobs/{job_id}/play',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a single job by ID
         * @param {JobsApiGetSingleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleById(requestParameters: JobsApiGetSingleByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesJob>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleById(requestParameters.id, requestParameters.jobId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List jobs for a project
         * @param {JobsApiListForProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listForProject(requestParameters: JobsApiListForProjectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<APIEntitiesJob>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listForProject(requestParameters.id, requestParameters.scope, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Run a manual job
         * @param {JobsApiRunManualJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async runManualJob(requestParameters: JobsApiRunManualJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.runManualJob(requestParameters.id, requestParameters.jobId, requestParameters.jobVariablesAttributes, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a single job by ID
         * @param {JobsApiGetSingleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleById(requestParameters: JobsApiGetSingleByIdRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesJob> {
            return localVarFp.getSingleById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List jobs for a project
         * @param {JobsApiListForProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listForProject(requestParameters: JobsApiListForProjectRequest, options?: AxiosRequestConfig): AxiosPromise<Array<APIEntitiesJob>> {
            return localVarFp.listForProject(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Run a manual job
         * @param {JobsApiRunManualJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runManualJob(requestParameters: JobsApiRunManualJobRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.runManualJob(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getSingleById operation in JobsApi.
 * @export
 * @interface JobsApiGetSingleByIdRequest
 */
export type JobsApiGetSingleByIdRequest = {
    
    /**
    * The ID of the project
    * @type {number}
    * @memberof JobsApiGetSingleById
    */
    readonly id: number
    
    /**
    * The ID of the job
    * @type {number}
    * @memberof JobsApiGetSingleById
    */
    readonly jobId: number
    
}

/**
 * Request parameters for listForProject operation in JobsApi.
 * @export
 * @interface JobsApiListForProjectRequest
 */
export type JobsApiListForProjectRequest = {
    
    /**
    * The ID of the project
    * @type {number}
    * @memberof JobsApiListForProject
    */
    readonly id: number
    
    /**
    * Return all jobs with the specified statuses
    * @type {Array<string>}
    * @memberof JobsApiListForProject
    */
    readonly scope?: Array<string>
    
}

/**
 * Request parameters for runManualJob operation in JobsApi.
 * @export
 * @interface JobsApiRunManualJobRequest
 */
export type JobsApiRunManualJobRequest = {
    
    /**
    * The ID of the project
    * @type {number}
    * @memberof JobsApiRunManualJob
    */
    readonly id: number
    
    /**
    * The ID of the manual job to run
    * @type {number}
    * @memberof JobsApiRunManualJob
    */
    readonly jobId: number
    
    /**
    * An array containing the custom variables available to the job
    * @type {Array<string>}
    * @memberof JobsApiRunManualJob
    */
    readonly jobVariablesAttributes?: Array<string>
    
}

/**
 * JobsApiGenerated - object-oriented interface
 * @export
 * @class JobsApiGenerated
 * @extends {BaseAPI}
 */
export class JobsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get a single job by ID
     * @param {JobsApiGetSingleByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getSingleById(requestParameters: JobsApiGetSingleByIdRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getSingleById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List jobs for a project
     * @param {JobsApiListForProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public listForProject(requestParameters: JobsApiListForProjectRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).listForProject(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Run a manual job
     * @param {JobsApiRunManualJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public runManualJob(requestParameters: JobsApiRunManualJobRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).runManualJob(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
