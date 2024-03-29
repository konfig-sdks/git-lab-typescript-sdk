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
 * @interface BranchesProtectBranchRequest
 */
export interface BranchesProtectBranchRequest {
    /**
     * Flag if developers can push to that branch
     * @type {boolean}
     * @memberof BranchesProtectBranchRequest
     */
    'developers_can_push'?: boolean;
    /**
     * Flag if developers can merge to that branch
     * @type {boolean}
     * @memberof BranchesProtectBranchRequest
     */
    'developers_can_merge'?: boolean;
}

