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

import { APIEntitiesCommit } from './apientities-commit';
import { APIEntitiesJobProject } from './apientities-job-project';
import { APIEntitiesUserBasic } from './apientities-user-basic';

/**
 * API_Entities_Job model
 * @export
 * @interface APIEntitiesJob
 */
export interface APIEntitiesJob {
    /**
     * The ID of the job
     * @type {number}
     * @memberof APIEntitiesJob
     */
    'id'?: number;
    /**
     * The name of the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'name'?: string;
    /**
     * The current status of the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'status'?: string;
    /**
     * The stage of the job in the CI/CD pipeline
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'stage'?: string;
    /**
     * The creation time of the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'created_at'?: string;
    /**
     * The start time of the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'started_at'?: string;
    /**
     * The finish time of the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'finished_at'?: string;
    /**
     * 
     * @type {APIEntitiesCommit}
     * @memberof APIEntitiesJob
     */
    'commit'?: APIEntitiesCommit;
    /**
     * Indicates if the job is archived
     * @type {boolean}
     * @memberof APIEntitiesJob
     */
    'archived'?: boolean;
    /**
     * Indicates if the job is allowed to fail
     * @type {boolean}
     * @memberof APIEntitiesJob
     */
    'allow_failure'?: boolean;
    /**
     * The time when the job was erased, if applicable
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'erased_at'?: string;
    /**
     * The duration of the job in seconds
     * @type {number}
     * @memberof APIEntitiesJob
     */
    'duration'?: number;
    /**
     * The duration the job was queued before execution, in seconds
     * @type {number}
     * @memberof APIEntitiesJob
     */
    'queued_duration'?: number;
    /**
     * The reference for the job
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'ref'?: string;
    /**
     * The artifacts produced by the job
     * @type {Array}
     * @memberof APIEntitiesJob
     */
    'artifacts'?: Array;
    /**
     * Indicates if the job is tagged
     * @type {boolean}
     * @memberof APIEntitiesJob
     */
    'tag'?: boolean;
    /**
     * The URL for accessing the job in the web interface
     * @type {string}
     * @memberof APIEntitiesJob
     */
    'web_url'?: string;
    /**
     * 
     * @type {APIEntitiesJobProject}
     * @memberof APIEntitiesJob
     */
    'project'?: APIEntitiesJobProject;
    /**
     * 
     * @type {APIEntitiesUserBasic}
     * @memberof APIEntitiesJob
     */
    'user'?: APIEntitiesUserBasic;
}

