# DevRel 73

DevRel 73 is here with several important updates. Along with improvements to the Console tag history function, we have added the ability to push alerts to AWS SNS topics. We've also enhanced the device bootup experience. You can find the complete breakdown of what's new below.

## Push alerts to SNS topic

You can now configure alerts to send to an [AWS SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html). To get started, you'll need to configure the SNS topic on the Esper Console while creating an alert. Navigate to the Alert section of the Console and click 'Create Alert.'

![Push alerts to SNS topic](https://i0.wp.com/blog.esper.io/wp-content/uploads/2021/12/Image_1-1.png?resize=1024%2C486&ssl=1)

1.  Select SNS as the communication channel.
2.  Enter the details of your SNS topic, including the topic's ARN, AWS access key ID, and a secret access key with permission to publish to this topic.

**Note**: The access key id and secret key correspond to the AWS user who has access to this topic on your AWS account.

Once configured, whenever the alerting condition matches, Esper will send an event to this topic. You need to configure your system to [consume](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) from (subscribe to) this topic.

## Delete tags from the tag history and any associated device

You can now delete tags from the tag history in the Console.

First, navigate to the Device and Groups section of the Console. On the modal to add and edit tags, you'll see a new 'X' icon to delete tags. Deleting a tag will also remove it from all devices with that tag.

![Delete tags from the tag history and any associated device](https://i0.wp.com/blog.esper.io/wp-content/uploads/2021/12/Image_2.png?resize=1024%2C456&ssl=1)

We display a warning that the action will remove this tag from any tagged device. When a tag no longer exists on any device, it will be deleted from the 'add tag' dropdown.

## Display loading page on the device when booting

We have added a loading experience as the device boots. You will now see a 'Preparing your device' screen.

![Display loading page on the device when booting](https://i0.wp.com/blog.esper.io/wp-content/uploads/2021/12/Image_3.png?resize=525%2C1022&ssl=1)

## Bug fixes and improvements

- We've enhanced the responsiveness of the Remote Viewer and Remote Control tools.
- In some instances, the Console would display incorrect app version information on the Console until manually refreshed. The Console will now verify the current package version and sync the displayed app version once per day.
- For Samsung devices running Android 11 and above, the Knox License key will automatically appear on devices.

We're excited to launch DevRel 73 today, and the Esper team is hard at work on DevRel 74, which is currently scheduled to launch by the end of December 2021. Please [reach out](https://support.esper.io/s/) to share your thoughts on how Esper can improve future releases.

And from the entire Esper team, we all wish you very Happy Holidays!
