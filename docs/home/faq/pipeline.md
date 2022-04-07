# Pipelines

Q: I am trying to *only* update tablets with certain app versions, so I want to query tablets by a particular installed app version. Is there a way to do advanced queries in Pipelines to filter the devices or groups?

A: This level of fine-grained filtering functionality is not available through the Console. Pipelines can be set to target either individual devices, or devices at a group/subgroup level. Having said that, you can create “Tags” and “Aliases” for your devices to bucket them, and when you are setting the Pipeline targets, you can filter the devices by these.

  

Q: What are some of the additional Pipelines capabilities I can access through using APIs?

A: When using Console, the number of Pipeline stages are limited to 3, and the number of operations per stage is limited to 5. You can create more stages and more operations by using APIs. Additionally, you can script success criteria for automated stage promotion.

  

Q: When can I edit the properties, targets and operations of a Pipeline?

A: You can edit Pipeline settings during the definition stage - aka, before running the Pipeline. Once you send the run Pipeline command, you can no longer edit your Pipeline settings.

  

Q: What happens if I target offline devices?

A: The Pipeline stages timeout after a week. If the device becomes online in that period, it will receive the set operation. If not, you can re-run the Pipeline and target those offline devices.
