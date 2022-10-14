import esperclient

from esperclient.rest import ApiException
from datetime import datetime, timedelta

configuration = esperclient.Configuration()
configuration.host = 'https://YOUR_ENDPOINT_HERE-api.esper.cloud/api'
configuration.api_key['Authorization'] = 'YOUR_BEARER_TOKEN_HERE'
configuration.api_key_prefix['Authorization'] = 'Bearer'

enterprise_id  = "YOUR_ENTERPRISE_ID_HERE"

WINDOW_PERIOD = timedelta(minutes=25)
COMMAND_DURATION = timedelta(days=365)

# As we are using the Console Time type, the time will need to be in UTC timezone in the 24 hour format.
# 13:30 UTC -> 5:30 AM PST
REBOOT_AT_TIME = "13:30:00"

GROUPS = [
    "YOUR_GROUP_NAME", 
    "YOUR_GROUP_NAME", 
    "YOUR_GROUP_NAME"
]

def get_group_by_name(name):
    api_instance = esperclient.DeviceGroupApi(esperclient.ApiClient(configuration))

    try:
        # List device groups
        api_response = api_instance.get_all_groups(enterprise_id, name=name)
        return api_response
    except ApiException as e:
        print("Exception when calling DeviceGroupApi->get_all_groups: %s\n" % e)

def create_command(command):
    api_instance = esperclient.CommandsV2Api(esperclient.ApiClient(configuration))

    try:
        # Create a command request
        api_response = api_instance.create_command(enterprise_id, command)
        return api_response
    except ApiException as e:
        print("Exception when calling CommandsV2Api->create_command: %s\n" % e)

def create_recurring_scheduled_reboot_command_on_group(groups, start_time):
    # Console time is in UTC
    now = datetime.utcnow()

    startTimeParts = start_time.split(":")
    todayStartTime = now.replace(hour=int(startTimeParts[0]), minute=int(startTimeParts[1]), second=int(startTimeParts[2]))
    startDelta = timedelta(minutes=1)
    if todayStartTime < now:
        startDelta = timedelta(days=1)

    start = now + startDelta
    end = start + COMMAND_DURATION

    startDate = start.strftime("%Y-%m-%d")
    endDate = end.strftime("%Y-%m-%d")

    startTime = start_time
    endTime = (datetime.combine(datetime.today(), datetime.strptime(start_time, '%H:%M:%S').time()) + WINDOW_PERIOD).strftime("%H:%M:%S")

    schedule = esperclient.V0CommandScheduleEnum.RECURRING
    scheduleArgs = esperclient.V0CommandScheduleArgs(
        days=[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        name="Reboot %s" % str(datetime.now().strftime("%Y-%m-%d_%H-%M")),
        time_type="console",
        start_datetime="%sT%sZ" % (startDate, startTime),
        end_datetime="%sT%sZ" % (endDate, endTime),
        window_end_time=endTime,
        window_start_time=startTime,
    )

    commandArgs = esperclient.V0CommandArgs()

    command = esperclient.V0CommandRequest(
        enterprise=enterprise_id,
        command_type="GROUP",
        device_type="all",
        groups=groups if type(groups) == list else [groups],
        command="REBOOT",
        command_args=commandArgs,
        schedule=schedule,
        schedule_args=scheduleArgs,
    )
    return create_command(command)


if __name__ == "__main__":
    for group in GROUPS:
        group_result = get_group_by_name(group)

        if group_result and group_result.results:
            id = group_result.results[0].id
            command = create_recurring_scheduled_reboot_command_on_group(id, REBOOT_AT_TIME)
            print(command)