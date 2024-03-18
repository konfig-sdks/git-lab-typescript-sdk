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
 * API_Entities_Badge model
 * @export
 * @interface APIEntitiesBadge
 */
export interface APIEntitiesBadge {
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'link_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'rendered_link_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'rendered_image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIEntitiesBadge
     */
    'kind'?: string;
}

