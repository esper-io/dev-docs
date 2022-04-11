# Groups and Blueprints

## Is a Blueprint applied automatically when I create a group?

 No, groups are created without Blueprints. There are various ways to assign a Blueprint to a group after it is added to your directory: “Create a new Blueprint”, “Clone Existing Blueprint” or “Import Blueprint”.


**Note:** If a device is onboarded to a group without a Blueprint, a Blueprint with default settings will be assigned to that group. If you want to change this configuration, you can either change the Blueprint settings, or reapply a different Blueprint. Check out the default Blueprint settings [here](https://onboarding-esper.netlify.app/blueprint_default_values.pdf).

  

## Can I restore a deleted group?

You cannot restore a deleted group. Groups and their subgroups are not versioned, so if you delete a group, you need to create a new one from scratch.

  

## Can I move a device to a different group?

 Certainly! Navigate to the group where the device is onboarded to, select the device, click the “Actions” button, click “Move”, and then select the destination group.

  

## What happens to a device if I delete the group it is onboarded to?

You cannot delete a group with onboarded devices. If you wish to delete a group, you need to migrate your devices to another group first.

  

## Do I need to manually create groups/subgroups on the Console and move devices over for managing device updates?

Not at all! You can use Esper APIs for automating device/group management. Check out more [here](https://api.esper.io/tag/Device-Group).

  

## Is it mandatory to create a group to manage devices?

 Yes, you have to have at least one parent level group to start managing your devices. Creating sub-groups is optional.

  

## Where are the groups hosted?

 All the groups and devices are hosted in the root level, “The Directory”.

  

## Can I factory reset all the devices in a group/sub-group?

Yes. You can apply the factory reset command to the group, sub-group or individual devices.

  

## Is it possible to have dynamic groups - aka, having the same device in multiple groups?

 Not currently. A device can only be assigned to a single group, but you can move it if you need to.

