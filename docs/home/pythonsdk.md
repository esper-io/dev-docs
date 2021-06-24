# Esper SDK for Python

Esper provides a Python client library to communicate with the Esper APIs to programmatically control and monitor your enterprise's Android-based Dedicated Devices using Esper Manage. To read more about the various capabilities of Esper Manage and Esper managed devices, please visit [esper.io](https://esper.io).

Current stable release versions are

    API version: 1.0.0
    SDK version: 0.0.9

:::tip
Note: Esper plans to release SDK support for Kotlin, Java, and JavaScript. If you are using a language other than Python and would like to immediately work with the Esper APIs, please consider calling the APIs directly. You can refer to the Esper API documentation [here](https://api.esper.io).
:::

We are always in active development and we try our best to keep all of our documentation up to date. However, if you have time you can check our latest documentation on [GitHub](https://github.com/esper-io/esper-client-py) for code samples and [API documentation](https://api.esper.io) as well as request and response formats.

## Pre-requisites

1.  **Python:** We recommend you use Python 3.4 or above.
2.  **Access to Esper console:** Sign up for the Esper Trial to obtain access to the Esper Console with a private Esper Cloud account. During that process you will set your environment name. Once your environment is set up you can login to your account on `https://{{ esper_tenant_name }}.esper.cloud` where "{{ esper_tenant_name }}" is your chosen environment name giving you access to both the Esper Console and the Esper Manage Dashboard. Your `SERVER URL` will be `https://{{ esper_tenant_name }}-api.esper.cloud/api`. See [Requesting an Esper Dev Trial account](./gettingstarted.md#_1-sign-up-for-an-account).
3.  **Generate an API key:** API key authentication is used for accessing APIs. You will have to generate this from the Esper Manage Dashboard. Web Dashboard for your account can be accessed at `https://{{ esper_tenant_name }}.esper.cloud`. See [Generating an API Key](./gettingstarted.md#_1-sign-up-for-an-account).

## Installation

### Using `pip install`

From PyPI

    pip install esperclient


or

From [GitHub](https://github.com/esper-io/esper-client-py)


    pip install git+https://github.com/esper-io/esper-client-py.git

### From source

Download/Clone the project and install via [Setuptools](https://pypi.python.org/pypi/setuptools).


    $ git clone https://github.com/esper-io/esper-client-py.git
    $ cd esper-client-py
    $ python setup.py install

:::tip
You do not need to install setuptools separately since they are packaged along with the downloaded library
:::

## Usage

Import `esperclient` package

    import esperclient


Next, you need to configure your client to talk to APIs. For this you will need `SERVER URL` and `API KEY` as generated in [pre-requisites](#pre-requisites) section.

<div class="language-python">
<pre>
<code>
configuration = esperclient.Configuration()
configuration.host = 'https://{{ esper_tenant_name }}-api.esper.cloud/api'
configuration.api_key['Authorization'] = 'LpDriKp7MWJiRGcwc8xzREeUj8OEFa'
configuration.api_key_prefix['Authorization'] = 'Bearer'
</code>
</pre>
</div>

Now you can perform various operations as described below. To see the complete list of actions and code samples, visit [SDK documentation](https://github.com/esper-io/esper-client-py#documentation-for-api-endpoints) To see response formats, visit [API documentation](https://esper-io.github.io/esper-api-spec/)

Some additional information you'll need in order to access Esper APIs is your `enterprise ID`, which is a unique id assigned to your Esper Dev account. You can get your Enterprise ID from the web dashboard in `Company Settings` tab. The Enterprise ID will be a string in UUID format i.e `595a6107-b137-448d-b217-e20cc58ee84d`.

## Examples

Some of the frequently used examples are given below:

## Get Token Information

  ```python
  from esperclient import TokenApi, ApiClient
  from esperclient.rest import ApiException

  # create an instance of the API class
  api_instance = TokenApi(ApiClient(configuration))
  try:
      api_response = api_instance.get_token_info()
      print(api_response)
  except ApiException as e:
      print("Exception when calling TokenApi->get_token_info: %s\n" % e)
  ```

### Output

```python
{
    "id": "string",
    "enterprise": "string",
    "user": "string",
    "developer_app": "string",
    "source_refresh_token": "string",
    "token": "string",
    "expires_on": "2019-08-29T11:06:03Z",
    "scope": [
        "string"
    ],
    "created_on": "2019-08-29T11:06:03Z",
    "updated_on": "2019-08-29T11:06:03Z"
}
```

## Get Enterprise Information

```python
from esperclient import EnterpriseApi, ApiClient
from esperclient.rest import ApiException

# create an instance of the API class
api_instance = EnterpriseApi(ApiClient(configuration))
enterprise_id = '595a6107-b137-448d-b217-e20cc58ee84d'
try:
    api_response = api_instance.get_enterprise(enterprise_id)
    print(api_response)
except ApiException as e:
    print("Exception when calling EnterpriseApi->get_enterprise: %s\n" % e)
```

### Output

```python
{
    "id": "string",
    "name": "string",
    "short_code": "string",
    "registered_name": "string",
    "registered_address": "string",
    "location": "string",
    "zipcode": "string",
    "contact_person": "string",
    "contact_number": "string",
    "contact_email": "user@example.com",
    "emm": {
        "google_enterprise_id": "string"
    },
    "created_on": "2019-08-29T11:06:03Z",
    "updated_on": "2019-08-29T11:06:03Z"
}
```

## List All Devices

```python
import esperclient
from esperclient.rest import ApiException

# Configure API key authorization: apiKey
configuration = esperclient.Configuration()
configuration.host = 'SERVER_URL'
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = esperclient.DeviceApi(esperclient.ApiClient(configuration))
enterprise_id = 'enterprise_id_example' # str | ID of the enterprise
name = 'name_example' # str | Filter by device name (optional)
group = 'group_example' # str | Filter by group id (optional)
imei = 'imei_example' # str | filter by imei (optional)
state = 56 # int | filter by device state (optional)
brand = 'brand_example' # str | filter by branch (optional)
is_gms = true # bool | filter for gms devices (optional)
search = 'search_example' # str | A search term. Search by device name, imei or mac address (optional)
limit = 20 # int | Number of results to return per page. (optional) (default to 20)
offset = 0 # int | The initial index from which to return the results. (optional) (default to 0)

try:
    # Fetch all devices in an enterprise
    api_response = api_instance.get_all_devices(enterprise_id, name=name, group=group, imei=imei, state=state, brand=brand, is_gms=is_gms, search=search, limit=limit, offset=offset)
    print(api_response)
except ApiException as e:
    print("Exception when calling DeviceApi->get_all_devices: %s\n" % e)
```

### Output

```python
{
  "count": 0,
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "string",
      "url": "string",
      "device_name": "string",
      "policy_name": "string",
      "status": 0,
      "state": 0,
      "current_command": "string",
      "suid": "string",
      "fcm_id": "string",
      "enterprise": "string",
      "policy": "string",
      "user": "string",
      "groups": [
        "string"
      ],
      "api_level": 0,
      "template_name": "string",
      "mqtt_id": "string",
      "softwareInfo": {},
      "hardwareInfo": {},
      "displays": {},
      "networkInfo": {},
      "memoryInfo": {},
      "audioConstraints": {},
      "provisioned_on": "2019-05-09T13:28:41Z",
      "created_on": "2019-05-09T13:28:41Z",
      "updated_on": "2019-05-09T13:28:41Z",
      "emm_device": {
        "id": 0,
        "google_device_id": "string",
        "managementType": "string",
        "device": "string",
        "google_user": 0,
        "policy": 0,
        "created_on": "2019-05-09T13:28:41Z",
        "updated_on": "2019-05-09T13:28:41Z",
        "is_active": true
      },
      "is_gms": true,
      "is_active": true
    }
  ]
}
```

## List All Applications

```python
  import esperclient
  from esperclient.rest import ApiException

  # Configure API key authorization: apiKey
  configuration = esperclient.Configuration()
  configuration.host = 'SERVER_URL'
  configuration.api_key['Authorization'] = 'YOUR_API_KEY'
  configuration.api_key_prefix['Authorization'] = 'Bearer'

  # create an instance of the API class
  api_instance = esperclient.ApplicationApi(esperclient.ApiClient(configuration))
  enterprise_id = 'enterprise_id_example' # str | A UUID string identifying this enterprise.
  application_name = 'application_name_example' # str | filter by application name (optional)
  package_name = 'package_name_example' # str | filter by package name (optional)
  is_hidden = true # bool | filter default esper apps (optional)
  limit = 20 # int | Number of results to return per page. (optional) (default to 20)
  offset = 0 # int | The initial index from which to return the results. (optional) (default to 0)

  try:
      # List apps in enterprise
      api_response = api_instance.get_all_applications(enterprise_id, application_name=application_name, package_name=package_name, is_hidden=is_hidden, limit=limit, offset=offset)
      print(api_response)
  except ApiException as e:
      print("Exception when calling ApplicationApi->get_all_applications: %s\n" % e)
```

### Output

```python
{
  "count": 0,
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "string",
      "versions": [
        {
          "id": "string",
          "version_code": "string",
          "build_number": "string",
          "hash_string": "string",
          "min_sdk_version": "string",
          "target_sdk_version": "string",
          "download_url": "string"
        }
      ],
      "application_name": "string",
      "package_name": "string",
      "developer": "string",
      "category": "string",
      "content_rating": "string",
      "compatibility": "string",
      "created_on": "2019-05-09T13:28:41Z",
      "updated_on": "2019-05-09T13:28:41Z",
      "is_active": true,
      "is_hidden": true,
      "enterprise": "string"
    }
  ]
}
```

## Upload an Application

```python
import esperclient
from esperclient.rest import ApiException

api_instance = esperclient.ApplicationApi(esperclient.ApiClient(configuration))
enterprise_id = '595a6107-b137-448d-b217-e20cc58ee84d' # str | A UUID string identifying this enterprise.
app_file = '/path/to/file.apk' # file | valid APK file

try:
    # upload an application to enterprise
    api_response = api_instance.upload(enterprise_id, app_file)
    print(api_response)
except ApiException as e:
    print("Exception when calling ApplicationApi->upload: %s\n" % e)
```

### Output

```python
{
  "application": {
    "id": "string",
    "versions": [
      {
        "id": "string",
        "version_code": "string",
        "build_number": "string",
        "hash_string": "string",
        "min_sdk_version": "string",
        "target_sdk_version": "string",
        "download_url": "string"
      }
    ],
    "application_name": "string",
    "package_name": "string",
    "developer": "string",
    "category": "string",
    "content_rating": "string",
    "compatibility": "string",
    "created_on": "2019-05-09T13:28:41Z",
    "updated_on": "2019-05-09T13:28:41Z",
    "is_active": true,
    "is_hidden": true,
    "enterprise": "string"
  }
}
```

## List App Versions

```python
import esperclient
from esperclient.rest import ApiException

api_instance = esperclient.ApplicationApi(esperclient.ApiClient(configuration))
application_id = '222a6107-b237-248d-c117-e20cc58ee74e' # str | A UUID string identifying this application.
enterprise_id = '595a6107-b137-448d-b217-e20cc58ee84d' # str | A UUID string identifying enterprise.
version_code = 'version_code_example' # str | filter by version code (optional)
build_number = 'build_number_example' # str | filter by build number (optional)
limit = 20 # int | Number of results to return per page. (optional) (default to 20)
offset = 0 # int | The initial index from which to return the results. (optional) (default to 0)

try:
    # List App versions
    api_response = api_instance.get_app_versions(application_id, enterprise_id, version_code=version_code, build_number=build_number, limit=limit, offset=offset)
    print(api_response)
except ApiException as e:
    print("Exception when calling ApplicationApi->get_app_versions: %s\n" % e)
```

### Output

```python
{
  "count": 0,
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "string",
      "installed_count": 0,
      "permissions": [
        {
          "id": "string",
          "permission": "string",
          "grant_state": "Default",
          "created_on": "2019-05-09T13:28:41Z",
          "updated_on": "2019-05-09T13:28:41Z",
          "is_active": true,
          "enterprise": "string",
          "app_version": "string"
        }
      ],
      "app_file": "string",
      "app_icon": "string",
      "version_code": "string",
      "build_number": "string",
      "size_in_mb": 0,
      "hash_string": "string",
      "release_name": "string",
      "release_comments": "string",
      "release_track": "Alpha",
      "created_on": "2019-05-09T13:28:41Z",
      "updated_on": "2019-05-09T13:28:41Z",
      "min_sdk_version": "string",
      "target_sdk_version": "string",
      "is_enabled": true,
      "enterprise": "string",
      "application": "string"
    }
  ]
}
```

## Deploy Application to Device

```python
import esperclient
from esperclient.rest import ApiException

api_instance = esperclient.CommandsApi(esperclient.ApiClient(configuration))
command_args = esperclient.CommandArgs(app_version='2f81b955-4a30-4b1b-a99f-b4016ba24854')  # replace with valid uuid
command = esperclient.CommandRequest(command='INSTALL', command_args=command_args)
try:
    api_response = api_instance.run_command(enterprise_id, device_id, command)
    print(api_response)
except ApiException as e:
    print("Exception when calling CommandsApi->run_command: %s\n" % e)
```

### Output

```python
{
  "id": "string",
  "current_base_uri": "string",
  "command_args": {},
  "action": "acknowledge",
  "schedule": "string",
  "group_schedule_id": "string",
  "command": "INSTALL",
  "state": "Command Initiated",
  "details": "string",
  "created_on": "2019-05-09T13:28:41Z",
  "updated_on": "2019-05-09T13:28:41Z",
  "enterprise": "string",
  "device": "string",
  "group_command": "string",
  "issued_by": "string"
}
```

## Reboot a Device

```python
import esperclient
from esperclient.rest import ApiException

api_instance = esperclient.CommandsApi(esperclient.ApiClient(configuration))
command = esperclient.CommandRequest(command='REBOOT')
try:
    api_response = api_instance.run_command(enterprise_id, device_id, command)
    print(api_response)
except ApiException as e:
    print("Exception when calling CommandsApi->run_command: %s\n" % e)
```

### Output

```python
{
  "id": "string",
  "current_base_uri": "string",
  "command_args": {},
  "action": "acknowledge",
  "schedule": "string",
  "group_schedule_id": "string",
  "command": "REBOOT",
  "state": "Command Initiated",
  "details": "string",
  "created_on": "2019-05-09T13:28:41Z",
  "updated_on": "2019-05-09T13:28:41Z",
  "enterprise": "string",
  "device": "string",
  "group_command": "string",
  "issued_by": "string"
}
```

If you face any issue in SDK usage, we recommend you that you reach out to [Esper Dev Support](./support.md)
