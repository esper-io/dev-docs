# Introduction

  

EQL, Esper Query Language, is a domain-specific language that is used to query the devices on Esper. The device data is stored as JSON.

  

The device document contains static and dynamic device attributes like telemetry, hardware/software configuration, installed app, etc.

  

EQL can be used with any JSON data. However, the current support is only for device data.

  

This document is about the usage of EQL. EQL is in development right now, and we will update this document with time.

  

For demonstration purposes, we will be using sample JSON data to query. The same rules can be applied to query device JSON.

  

Consider a collection of documents with JSON structure as below:

  
```json
{
  "name": "Foo",
  "location": [
    "Bengaluru",
    "Seattle",
    "Bellevue"
  ],
  "rating": 5,
  "scores": [
    5,
    4,
    3
  ],
  "active": true,
  "price": 10.15,
  "last_active": "2019-07-02T10:46:39.425399+00:00",
  "details": {
    "url": "https://example.com",
    "description": "esper document",
    "registered_on": "2019-07-02T10:46:39.425399+00:00"
  },
  "projects": [
    {
      "name": "telemetry",
      "version": 2
    },
    {
      "name": "eea",
      "version": 1
    }
  ]
}
```
  
  

To use EQL, you need to be aware of the components required to form a query.

  

Basic components are

1.  Fields: These are the JSON fields of your data on which you can query.
    
2.  Operators: These are EQL supported operators like comparison operators, logical operators, lookup operators, etc
    
3.  Queries: These are the types of EQL queries.
    

  

All the examples given below are with respect to the sample JSON document described earlier.

## Fields

Fields are the terminal keys of your JSON document. One can query on a terminal JSON key. For the above JSON, below are the terminal keys or fields which can be used in EQL.

  
```yml
name  
location  
rating  
scores  
active  
price  
last_active  
details.url  
details.description  
details.registered_on  
projects.name  
projects.version

 ``` 

**Note**: One cannot use `projects` or `details` alone for the query. It has to be a terminal key, i.e., `projects.name`, `details.url`.

  

Accessing Nested Fields

To query on a nested field, use the dot (.) operator to access the field.

  

Example: Consider the following nested field

```json
"details": {  
    "url": "https://example.com",  
    "description": "esper document",  
    "registered_on": "2019-07-02T10:46:39.425399+00:00"  
}
```
  

To query on the “url” field present inside “details” use details.url

```yml
details.url:"https://www.esper.io"
```
  

## Operators

### Comparison Operators

#### : (Equality)

Returns documents with an equality condition  
  

Example: Get all active documents

```yml
active: true
```
  

## Logical Operators

### AND

Returns documents satisfying both conditions to the left and the right of the operator.

  

Example: Get documents that belong to Seattle and are priced at $110.

```sql
location:"Seattle"  AND price:110
```
  

#### OR

Returns documents satisfying either one or both of the conditions to the left and right of the operator.  
  

Example: Get documents which either belong to Nevada or are priced at $50.

```sql
location:"Nevada"  OR price:50
```
  

## Lookup Operators

### IN

Returns documents with the values contained in the provided list.

A list is a collection of comma-separated values inside the opening and closing braces i.e. (and)

  

Example: A valid list of integers

```sql
(5, 1, 3)
```
  

Example: A valid list of strings

```sql
(“foo”, “bar”)
```
  

Example: Get documents where the rating is one of the values in 5, 4 or 3

```sql
rating IN (5, 4, 3)
```
  

Example: Get documents that belong to Seattle, Texas, or Bengaluru

```sql
location IN (“Seattle”, “Texas”, “Bengaluru”)
```
  

**Note**: For strings, IN matching is case-sensitive.

  

#### LIKE

Returns results containing the given string.

**Note**: LIKE matching is case insensitive.  
  

Example: Get documents where name contains foo.

```sql
name LIKE "foo"
```
  

## Queries

There are two types of queries in EQL

1.  Simple query
    
2.  Compound query
    

### Simple Query

A simple query operates on a single field, and it is an atomic query. A simple query is usually of the form:

  
```xml
<JSON FIELD> <OPERATOR> <VALUE>
```

  

JSON FIELD is the terminal key/property from the JSON document to be queried described in the Fields section.

  

OPERATOR is a reserved keyword like `IN`, `:` (equality), `LIKE`, `LESS THAN`, which performs a designated operation described in the Operators section.

  

VALUES is the value of the JSON field for the query. Valid values are string, integer, double, boolean, list, date string.

  

Below are examples of some valid values

  
- Boolean: true or false
- Integer: A whole number e.g 10, -2, 521
- Double: A real number e.g 11.5, 6.0001
- String: Double quoted characters e.g “foo”, “bar”, “hello”, “esper”, “eql”  
- List: Collection of comma-separated values inside the opening and closing braces i.e `( and )`,`(5, 1, 3)`, `(“foo”, “bar”)`
- Date: A string representation of date e.g. “2019-07-02T10:46:39.425399+00:00”
  

  
#### Examples

Get document with name “Foo”

```yml
name:"Foo"
```
  

Get documents where the location is Chennai or Bengaluru

```sql
location  IN ("Chennai", "Bengaluru")
```
  

Query to get document where `url` matches with `example` (partial string search- contains, starts, or ends with)

```sql
details.url LIKE "example"
```
  

### Compound Query

A compound query is formed by combining one or more Simple queries using either `AND`, `OR` and precedence grouping using parenthesis `(` and `)`

  

#### Examples

Query where the name is `Foo` and the location is `Nevada`.

```sql
name:"Foo"  AND location:"Nevada"
```
  
  

Query where the name is like “foo” or score and the rating is 5.

```sql
name  LIKE “foo” OR (scores:5 AND  rating: 5)
```
  
  

Query where the description contains “esper”, or the name is Esper with 5 ratings in Bengaluru.

```sql
(details.url  LIKE “esper” OR  name: “esper”) AND  rating:5 AND  location: “Bengaluru”
```
  

## EQL for Esper Device

This section contains example queries with respect to the data of the devices at Esper.

  

Following is the structure of device JSON at Esper.  
  
```json
{
  "tenant": "alpha",
  "enterprise": {
    "id": "d276b043-1cfe-49cc-8b61-efd03735297e",
    "name": "Alpha"
  },
  "id": "c87b07be-7507-4642-acb8-c31fb7322347",
  "name": "ESP-ALP-A0001",
  "state": "ACTIVE",
  "software": {
    "supported_abi": "arm64-v8a",
    "android_version": "10",
    "security_patch_level": "2020-03-01",
    "device_kernel_version": "4.4.177-18057978",
    "android_api": 29,
    "eea_version": null,
    "security_state": "LOW_RISK"
  },
  "hardware": {
    "brand": "samsung",
    "model": "SA-B412DN",
    "hardware": "nox001",
    "manufacturer": "samsung",
    "serial_number": "S58N22GEDGD"
  },
  "network": {
    "imei": [
      "243878115869812",
      "456879115862345"
    ],
    "wifi": {
      "mac_address": "dc:dc:e2:b8:8e:54",
      "ssid": "random",
      "frequency": -1,
      "link_speed": -1,
      "signal": 0,
      "configured_networks": [
        "\"Guest\"",
        "\"Alpha 2.4\""
      ]
    },
    "dns": [
      "/192.135.142.197",
      "/192.135.142.247"
    ],
    "ip_address": [
      "10.333.268.50/24"
    ],
    "data_speed_upload": 1855,
    "data_speed_download": 2873,
    "ethernet_state": "NOT CONNECTED",
    "interface_name": "rmnet0",
    "active_connection": "CELLULAR",
    "cellular": {
      "type": "4G LTE",
      "status": "CONNECTED",
      "signal": "-101dB"
    }
  },
  "memory": {
    "ram_total_in_mb": "3723",
    "internal_storage_total_in_mb": "68719",
    "available_ram_in_mb": 1850,
    "available_internal_storage_in_mb": 47117,
    "os_occupied_storage_in_mb": 4338
  },
  "template": {
    "name": "custom-template"
  },
  "provisioned_at": "2020-06-19T09:07:25.209169+00:00",
  "gms": true,
  "mqtt": false,
  "iotcore": true,
  "alias": "alpha-device-1",
  "type": "real",
  "tags": "test device",
  "app_mode": "MULTI_APP",
  "lockdown_state": "UNLOCKED",
  "timezone_string": "Europe/Zurich",
  "policy": {
    "id": 1,
    "name": "policy 2.0"
  },
  "group": {
    "id": "9ff3255f-a2a8-4b1d-9769-e5fa3a84b98a",
    "name": "Test",
    "path": "All devices/fleet"
  },
  "cpu": {
    "usage": [
      12.37,
      21.57,
      16.49,
      21.57,
      8.82,
      10.89,
      0,
      9.9
    ]
  },
  "location": {
    "lat": 47.3828228,
    "lng": 8.5148608,
    "alt": 449.5,
    "city": "Zürich",
    "state": "Zürich",
    "country": "Switzerland",
    "zipcode": "8004"
  },
  "bluetooth": {
    "paired_devices": [],
    "connected_devices": []
  },
  "data": {
    "upload": 276946744,
    "download": 393967413
  },
  "settings": {
    "gps_state": "LOCATION_MODE_ON",
    "wifi_state": true,
    "adb_enabled": false,
    "adb_timeout": 3600000,
    "rotation_state": "AUTO",
    "bluetooth_state": false,
    "brightness_scale": 9,
    "remote_adb_enabled": false,
    "screen_off_timeout": 30000
  },
  "battery": {
    "power_source": "BATTERY_UNPLUGGED",
    "power_status": "BATTERY_STATUS_DISCHARGING",
    "screen_state": "N/A",
    "level": 92,
    "scale": 100,
    "state": "BATTERY_STATUS_DISCHARGING",
    "health": "GOOD",
    "current": -6,
    "voltage": 4.198,
    "current_avg": -34,
    "technology": "Li-ion",
    "temperature": 22,
    "low_indicator": false,
    "capacity_count": 92,
    "capacity_total": 2879900,
    "level_absolute": 92
  },
  "app_list": [
    "Facebook com.facebook.android.app 3.3.10.2",
    "Google com.google.android.googlequicksearchbox 11.29.10.21.arm64"
  ],
  "dpc": {
    "version": "v7.3.6014"
  },
  "status": "offline",
  "last_seen_at": "2020-11-06T17:33:03.648207+00:00"
}
```
  

  
  

### Examples

Get all devices in the Alpha enterprise.

```sql
enterprise.name:"Alpha"
```
  

Get all devices in the Test group.

```sql
group.name:"Test"
```
  

Get all Samsung devices in Bengaluru.

```sql
location.city:"Bengaluru"  AND hardware.brand:"samsung"
```
  

Get all online devices.

```sql
status:"online"
```
  

Get offline devices with Android version 8 or 9.

```sql
software.android_version IN ("8", "9") AND status:"offline"
```
  

Get online devices having Facebook app installed.

```sql
app_name:"Facebook" and status:"offline"
```
  

**Note:** **app_name** is not present in the device document. Some of the app fields like **app_name**, **app_version**, and **package_name** are mapped to app_list in the device document. Since EQL is under active development, watch out for the support of arrays in future releases.

  

Devices with version 2.1.0 for Chrome application.

```sql
package_name:"Google Chrome"  AND app_version:"2.1.0"
```
  

If you want to query for all the 2.1.X versions of an app, you can use LIKE query.

```sql
package_name:"Google Chrome"  AND app_version LIKE  "2.1."
```
  

Get devices that are GMS or in kiosk mode.

```sql
gms:true  OR app_mode:"KIOSK"
```
  

All Google devices in the group Bengaluru, Nevada, California or devices having Esper Agent v6.0.1740 with Android version 8.1.0.

Note: The group name must be present on the Esper Console.

```sql
(group.name IN ("Bengaluru","Nevada","California") AND hardware.brand:"google") OR (dpc.version:"v6.0.1740"  AND software.android_version:"8.1.0")
```
  

Devices that are using IoT core for communication and are not GMS.

```sql
iotcore:true AND gms:false
```
