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
 * @interface ClustersUpdateInstanceClusterRequest
 */
export interface ClustersUpdateInstanceClusterRequest {
    /**
     * Cluster name
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'name'?: string;
    /**
     * Enable or disable Gitlab\'s connection to your Kubernetes cluster
     * @type {boolean}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'enabled'?: boolean;
    /**
     * The associated environment to the cluster
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'environment_scope'?: string;
    /**
     * Deploy each environment to a separate Kubernetes namespace
     * @type {boolean}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'namespace_per_environment'?: boolean;
    /**
     * Cluster base domain
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'domain'?: string;
    /**
     * The ID of the management project
     * @type {number}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'management_project_id'?: number;
    /**
     * Determines if GitLab will manage namespaces and service accounts for this cluster
     * @type {boolean}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'managed'?: boolean;
    /**
     * URL to access the Kubernetes API
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'platform_kubernetes_attributes[api_url]'?: string;
    /**
     * Token to authenticate against Kubernetes
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'platform_kubernetes_attributes[token]'?: string;
    /**
     * TLS certificate (needed if API is using a self-signed TLS certificate)
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'platform_kubernetes_attributes[ca_cert]'?: string;
    /**
     * Unique namespace related to Project
     * @type {string}
     * @memberof ClustersUpdateInstanceClusterRequest
     */
    'platform_kubernetes_attributes[namespace]'?: string;
}

