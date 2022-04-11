# Pipelines

## I am trying to *only* update tablets with certain app versions, so I want to query tablets by a particular installed app version. Is there a way to do advanced queries in Pipelines to filter the devices or groups?

 This level of fine-grained filtering functionality is not available through the Console. Pipelines can be set to target either individual devices, or devices at a group level. Having said that, you can create Tags and Aliases for your devices to bucket them, and when you are setting the Pipeline targets, you can filter the devices by these.

  

## What are the benefits of using Esper Pipelines APIs?

 You can integrate Esper Pipelines to your CI/CD flow by using our APIs. Additionally, you can create, update, delete or query Pipeline, Stage and Target Runs at scale. Check out Esper Pipelines APIs [here.](https://api.esper.io/tag/Pipelines)

  

## When can I edit the properties, targets and operations of a Pipeline?

 You can edit Pipeline settings during the definition stage - aka, before running the Pipeline. Once you send the Run Pipeline command, you can no longer edit that specific Run instance. However, once the run has been completed, you can configure a new Run and edit the Pipeline properties, stage operations, and targets.

  

## What happens if I target offline devices?

 The Pipeline stages timeout after a week. If the device becomes online in that period, it will receive the set operation. If not, you can re-run the Pipeline and target those offline devices.
