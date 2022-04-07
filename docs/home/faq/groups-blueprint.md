# Groups and Blueprints

Q: Is a Blueprint applied automatically when I create a group?

A: No, groups are created without Blueprints. There are various ways to assign a Blueprint to a group after it is added to your directory: “Create a new Blueprint”, “Clone Existing Blueprint” or “Import Blueprint”.


**Note:** If a device is onboarded to a group without a Blueprint, a Blueprint with default settings will be assigned to that group. If you want to change this configuration, you can either change the Blueprint settings, or reapply a different Blueprint. Check out the default Blueprint settings [here](https://onboarding-esper.netlify.app/blueprint_default_values.pdf).

  

Q: Can I restore a deleted group?

A: You cannot restore a deleted group. Groups and their subgroups are not versioned, so if you delete a group, you need to create a new one from scratch.

  

Q: Can I move a device to a different group?

A: Certainly! Navigate to the group where the device is onboarded to, select the device, click the “Actions” button, click “Move”, and then select the destination group.

  

Q: What happens to a device if I delete the group it is onboarded to?

A: You cannot delete a group with onboarded devices. If you wish to delete a group, you need to migrate your devices to another group first.

  

Q: Do I need to manually create groups/subgroups on the Console and move devices over for managing device updates?

A: Not at all! You can use Esper APIs for automating device/group management. Check out more [here](https://api.esper.io/tag/Device-Group).

  

Q: Is it mandatory to create a group to manage devices?

A: Yes, you have to have at least one parent level group to start managing your devices. Creating sub-groups is optional.

  

Q: Where are the groups hosted?

A: All the groups and devices are hosted in the root level, “The Directory”.

  

Q: Can I factory reset all the devices in a group/sub-group?

A: Yes. You can apply the factory reset command to the group, sub-group or individual devices.

  

Q: Is it possible to have dynamic groups - aka, having the same device in multiple groups?

A: Not currently. A device can only be assigned to a single group, but you can move it if you need to.

