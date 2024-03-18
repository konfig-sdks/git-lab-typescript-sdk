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
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PlanlimitsModifyLimitsRequest
 */
export interface PlanlimitsModifyLimitsRequest {
    /**
     * Name of the plan to update
     * @type {string}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'plan_name': PlanlimitsModifyLimitsRequestPlanNameEnum;
    /**
     * Maximum number of jobs in a single pipeline
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_pipeline_size'?: number;
    /**
     * Total number of jobs in currently active pipelines
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_active_jobs'?: number;
    /**
     * Maximum number of pipeline subscriptions to and from a project
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_project_subscriptions'?: number;
    /**
     * Maximum number of pipeline schedules
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_pipeline_schedules'?: number;
    /**
     * Maximum number of DAG dependencies that a job can have
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_needs_size_limit'?: number;
    /**
     * Maximum number of runners registered per group
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_registered_group_runners'?: number;
    /**
     * Maximum number of runners registered per project
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'ci_registered_project_runners'?: number;
    /**
     * Maximum Conan package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'conan_max_file_size'?: number;
    /**
     * Maximum storage size for the root namespace enforcement in MiB
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'enforcement_limit'?: number;
    /**
     * Maximum generic package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'generic_packages_max_file_size'?: number;
    /**
     * Maximum Helm chart file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'helm_max_file_size'?: number;
    /**
     * Maximum Maven package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'maven_max_file_size'?: number;
    /**
     * Maximum storage size for the root namespace notifications in MiB
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'notification_limit'?: number;
    /**
     * Maximum NPM package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'npm_max_file_size'?: number;
    /**
     * Maximum NuGet package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'nuget_max_file_size'?: number;
    /**
     * Maximum PyPI package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'pypi_max_file_size'?: number;
    /**
     * Maximum Terraform Module package file size in bytes
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'terraform_module_max_file_size'?: number;
    /**
     * Maximum storage size for the root namespace in MiB
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'storage_size_limit'?: number;
    /**
     * Maximum number of downstream pipelines in a pipeline\'s hierarchy tree
     * @type {number}
     * @memberof PlanlimitsModifyLimitsRequest
     */
    'pipeline_hierarchy_size'?: number;
}

type PlanlimitsModifyLimitsRequestPlanNameEnum = 'default' | 'free' | 'bronze' | 'silver' | 'premium' | 'gold' | 'ultimate' | 'ultimate_trial' | 'premium_trial' | 'opensource'

