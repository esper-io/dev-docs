# API Reference

Esper APIs are a set of REST-based APIs that help you programmatically control and monitor Android-based Dedicated Devices running the Esper agent using Esper Manage. With these APIs, you can orchestrate and manage devices that have been provisioned against your Esper Manage environment. Furthermore, these APIs allows you to manage the Android applications installed on your Dedicated Device fleet. To read more about the various capabilities of Esper APIs and Esper managed devices, please visit [esper.io](https://esper.io).

To use these APIs you will need to create a developer account with Esper and get access to the Esper Console and the Esper Manage Dashboard. You can find out more about Esper and sign up for a free account at [esper.io/signup](https://esper.io/signup)

Esper APIs adhere to [Open API specification](https://swagger.io/docs/specification/about/) and you can check our latest API spec on [GitHub](https://github.com/esper-io/esper-api-spec).

## Authentication

The client needs to send authentication details to access the Esper APIs by generating and applying an API key. Be sure to sign up for your free trial account with Esper Dev to generate your key. See [Generating an API key](./module/genapikey.md)

Once you have the access token, you need to send an authorization header as below

<div class="language-sh">
<pre>
<code>
    curl -X GET \
    https://{{ esper_tenant_name }}-api.esper.cloud/api/enterprise/:enterprise_id/device/ \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'Content-Type: application/json' \
</code>
</pre>
</div>

:::tip
Please note the use of keyword **Bearer** before the token value.
:::

## Errors

The APIs use standard HTTP status codes to indicate success or failure. All error responses will have a JSON body in the following format

```python
{
    "errors": [],
    "message": "error message",
    "status": 400
}
```

- `errors` List of error details
- `message` Error description
- `status` HTTP status code

## APIs

Below are quick links to frequently used APIs. To see a full list of APIs and latest updates, please visit [API documentation](https://api.esper.io)

### Token

- [Get token information](https://api.esper.io/#tag/Token)

### Enterprise

- [Get enterprise information](https://api.esper.io/#tag/Enterprise)
- [Update enterprise information](https://api.esper.io/#operation/partialUpdateEnterprise)

### Application

- [Get application information](https://api.esper.io/#tag/Application)
- [Delete application](https://api.esper.io/#operation/deleteApplication)
- [App version management](https://api.esper.io/#operation/getAppVersions)
- [Upload an application](https://api.esper.io/#operation/upload)

### Devices

- [Get device information](https://api.esper.io/#tag/Device)
- [List app installed on device](https://api.esper.io/#operation/getAppInstalls)
- [Get latest telemetry event](https://api.esper.io/#operation/getDeviceEvent)

### Device Groups

- [Device Group Management](https://api.esper.io/#tag/Device-Group)

### Device Commands

- [Run command on device](https://api.esper.io/#operation/runCommand)
- [Get command status](https://api.esper.io/#operation/getCommand)

### Group Commands

- [Run command on a group](https://api.esper.io/#operation/runGroupCommand)
- [Get command status on group](https://api.esper.io/#operation/getGroupCommand)

If you face any issues in API usage, we recommend you reach out to [Esper Dev Support](./support.md)
