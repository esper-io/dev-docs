# New Single Sign On Methods

As Esper strives to provide our customers with the most advanced functionality for their devices, we're excited to announce that we'll be transitioning to Single Sign-On (SSO) with support for SAML and OIDC, enhanced security, and other features. This transition will begin in February 2022, and we will begin notifying users via email when they will need to reset their passwords in order to migrate to these new and exciting features.

Once this process starts, you will need to log in to the system again. 

![Esper sign in page](./images/esper-sign-in-page.png)

If you log in to Esper using your **email address and password**, you’ll be prompted to log in using these same credentials. 
If you used your username to log in, you’ll now have to use an email address associated with your Esper account. 
If you have multiple Esper tenants, you may use the same email and password to log into them. 

If you use Sign In with Google, select the option to **Continue with Google**. You’ll receive directions to check your email for an invitation sent from Esper. Click on the invitation link to log in using Sign In with Google. The link will be valid for 24 hours.

## Frequently Asked Questions

**Why do I need to do this?**

- As part of the migration process, you’ll be required to reset your sign-on method. 

**What will change with the new authentication system?**

- There will be two major changes: 
1. You may continue to use email/password *and* Sign In with Google to log into Esper. 
::: warning 
Note: These methods will create different accounts in the Console’s User Management section. 
:::
2. You will no longer be asked to sign up with a username, first name, and last name. We’ve simplified this process so that now only a single name will be used in the Esper Console. 

**I don't remember the password I used to log in.** 

- Use the **Forgot Password** button to reset your password. Then, log back in. 

**I don't remember the email address I used to log in.** 

- Ask your administrator to provide you with the email you registered with. Administrators can also send new invites. 

**I've been using a username and password and my registered email is no longer working.** 

- Ask your administrator to send a new invite to you. 

**What if I’m already using SSO to sign in to Esper?**

- You should receive an email with instructions on how to transition to the new SSO method. If you did not receive an email, and you use SSO to currently sign in to Esper, please reach out to [Esper Support](mailto:support@esper.io). 

**Will every user need to configure SSO?** 

- No. This is something an administrator will need to set up first through an identity provider (such as Okta). Not every organization will need SSO. Your team should discuss if it is right for your needs.

**Should I set up SSO, and how do I do that?**

- Not every organization will need SSO. However, if you already have an identity provider such as Okta, it may make sense to implement it in Esper. Refer to the [SSO documentation](https://console-docs.esper.io/sso/) for more details.

**How can I make sure users accept SSO invites and log in using only the SSO method?** 

- You can see SSSO intives in the Pending Users section of User Management. 
- You can also switch to have users use only SSO (instead of Google Single Sign-on and Email/Password). Detailed instructions are included in the [SSO documentation](https://console-docs.esper.io/sso/). 

**As an administrator, how can I make sure my team has switched to the right authentication type?** 

- In the User Management screen, there is now a Sign-in Type column that lets you know how a user has signed in. 
- When you set up SSO with Esper and your Identity Provider, there is also an option to send bulk Esper SSO invites to your team. 

**As an administrator, why do I see different authentication modes (Google authentication, email password, SSO) in the Sign-in Type section of User Management for the same user?**

- This helps administrators manage different authentication modes and makes it possible to track down unwanted modes. For example, if your team no longer uses Google Single Sign-on, you could delete the user profiles from User Management and send new events for Email/Password if you needed to. 


