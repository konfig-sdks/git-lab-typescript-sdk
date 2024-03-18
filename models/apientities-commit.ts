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
 * @interface APIEntitiesCommit
 */
export interface APIEntitiesCommit {
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'short_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof APIEntitiesCommit
     */
    'parent_ids'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'author_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'author_email'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'authored_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'committer_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'committer_email'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'committed_date'?: string;
    /**
     * 
     * @type {object}
     * @memberof APIEntitiesCommit
     */
    'trailers'?: object;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesCommit
     */
    'web_url'?: string;
}

