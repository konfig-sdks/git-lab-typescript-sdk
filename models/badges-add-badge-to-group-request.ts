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
 * @interface BadgesAddBadgeToGroupRequest
 */
export interface BadgesAddBadgeToGroupRequest {
    /**
     * URL of the badge link
     * @type {string}
     * @memberof BadgesAddBadgeToGroupRequest
     */
    'link_url': string;
    /**
     * URL of the badge image
     * @type {string}
     * @memberof BadgesAddBadgeToGroupRequest
     */
    'image_url': string;
    /**
     * Name for the badge
     * @type {string}
     * @memberof BadgesAddBadgeToGroupRequest
     */
    'name'?: string;
}

