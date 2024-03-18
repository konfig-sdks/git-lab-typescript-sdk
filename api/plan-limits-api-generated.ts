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
import { APIEntitiesPlanLimit } from '../models';
// @ts-ignore
import { PlanlimitsModifyLimitsRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PlanLimitsApi - axios parameter creator
 * @export
 */
export const PlanLimitsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List the current limits of a plan on the GitLab instance.
         * @summary Get current plan limits
         * @param {'default' | 'free' | 'bronze' | 'silver' | 'premium' | 'gold' | 'ultimate' | 'ultimate_trial' | 'premium_trial' | 'opensource'} [planName] Name of the plan to get the limits from. Default: default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentLimits: async (planName?: 'default' | 'free' | 'bronze' | 'silver' | 'premium' | 'gold' | 'ultimate' | 'ultimate_trial' | 'premium_trial' | 'opensource', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/application/plan_limits`;
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
            if (planName !== undefined) {
                localVarQueryParameter['plan_name'] = planName;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/application/plan_limits',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Modify the limits of a plan on the GitLab instance.
         * @summary Change plan limits
         * @param {PlanlimitsModifyLimitsRequest} planlimitsModifyLimitsRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyLimits: async (planlimitsModifyLimitsRequest: PlanlimitsModifyLimitsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'planlimitsModifyLimitsRequest' is not null or undefined
            assertParamExists('modifyLimits', 'planlimitsModifyLimitsRequest', planlimitsModifyLimitsRequest)
            const localVarPath = `/api/v4/application/plan_limits`;
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
                requestBody: planlimitsModifyLimitsRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v4/application/plan_limits',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(planlimitsModifyLimitsRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlanLimitsApi - functional programming interface
 * @export
 */
export const PlanLimitsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlanLimitsApiAxiosParamCreator(configuration)
    return {
        /**
         * List the current limits of a plan on the GitLab instance.
         * @summary Get current plan limits
         * @param {PlanLimitsApiGetCurrentLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentLimits(requestParameters: PlanLimitsApiGetCurrentLimitsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesPlanLimit>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentLimits(requestParameters.planName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Modify the limits of a plan on the GitLab instance.
         * @summary Change plan limits
         * @param {PlanLimitsApiModifyLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async modifyLimits(requestParameters: PlanLimitsApiModifyLimitsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIEntitiesPlanLimit>> {
            const planlimitsModifyLimitsRequest: PlanlimitsModifyLimitsRequest = {
                plan_name: requestParameters.plan_name,
                ci_pipeline_size: requestParameters.ci_pipeline_size,
                ci_active_jobs: requestParameters.ci_active_jobs,
                ci_project_subscriptions: requestParameters.ci_project_subscriptions,
                ci_pipeline_schedules: requestParameters.ci_pipeline_schedules,
                ci_needs_size_limit: requestParameters.ci_needs_size_limit,
                ci_registered_group_runners: requestParameters.ci_registered_group_runners,
                ci_registered_project_runners: requestParameters.ci_registered_project_runners,
                conan_max_file_size: requestParameters.conan_max_file_size,
                enforcement_limit: requestParameters.enforcement_limit,
                generic_packages_max_file_size: requestParameters.generic_packages_max_file_size,
                helm_max_file_size: requestParameters.helm_max_file_size,
                maven_max_file_size: requestParameters.maven_max_file_size,
                notification_limit: requestParameters.notification_limit,
                npm_max_file_size: requestParameters.npm_max_file_size,
                nuget_max_file_size: requestParameters.nuget_max_file_size,
                pypi_max_file_size: requestParameters.pypi_max_file_size,
                terraform_module_max_file_size: requestParameters.terraform_module_max_file_size,
                storage_size_limit: requestParameters.storage_size_limit,
                pipeline_hierarchy_size: requestParameters.pipeline_hierarchy_size
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.modifyLimits(planlimitsModifyLimitsRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlanLimitsApi - factory interface
 * @export
 */
export const PlanLimitsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlanLimitsApiFp(configuration)
    return {
        /**
         * List the current limits of a plan on the GitLab instance.
         * @summary Get current plan limits
         * @param {PlanLimitsApiGetCurrentLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentLimits(requestParameters: PlanLimitsApiGetCurrentLimitsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesPlanLimit> {
            return localVarFp.getCurrentLimits(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify the limits of a plan on the GitLab instance.
         * @summary Change plan limits
         * @param {PlanLimitsApiModifyLimitsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        modifyLimits(requestParameters: PlanLimitsApiModifyLimitsRequest, options?: AxiosRequestConfig): AxiosPromise<APIEntitiesPlanLimit> {
            return localVarFp.modifyLimits(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCurrentLimits operation in PlanLimitsApi.
 * @export
 * @interface PlanLimitsApiGetCurrentLimitsRequest
 */
export type PlanLimitsApiGetCurrentLimitsRequest = {
    
    /**
    * Name of the plan to get the limits from. Default: default.
    * @type {'default' | 'free' | 'bronze' | 'silver' | 'premium' | 'gold' | 'ultimate' | 'ultimate_trial' | 'premium_trial' | 'opensource'}
    * @memberof PlanLimitsApiGetCurrentLimits
    */
    readonly planName?: 'default' | 'free' | 'bronze' | 'silver' | 'premium' | 'gold' | 'ultimate' | 'ultimate_trial' | 'premium_trial' | 'opensource'
    
}

/**
 * Request parameters for modifyLimits operation in PlanLimitsApi.
 * @export
 * @interface PlanLimitsApiModifyLimitsRequest
 */
export type PlanLimitsApiModifyLimitsRequest = {
    
} & PlanlimitsModifyLimitsRequest

/**
 * PlanLimitsApiGenerated - object-oriented interface
 * @export
 * @class PlanLimitsApiGenerated
 * @extends {BaseAPI}
 */
export class PlanLimitsApiGenerated extends BaseAPI {
    /**
     * List the current limits of a plan on the GitLab instance.
     * @summary Get current plan limits
     * @param {PlanLimitsApiGetCurrentLimitsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanLimitsApiGenerated
     */
    public getCurrentLimits(requestParameters: PlanLimitsApiGetCurrentLimitsRequest = {}, options?: AxiosRequestConfig) {
        return PlanLimitsApiFp(this.configuration).getCurrentLimits(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modify the limits of a plan on the GitLab instance.
     * @summary Change plan limits
     * @param {PlanLimitsApiModifyLimitsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanLimitsApiGenerated
     */
    public modifyLimits(requestParameters: PlanLimitsApiModifyLimitsRequest, options?: AxiosRequestConfig) {
        return PlanLimitsApiFp(this.configuration).modifyLimits(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
