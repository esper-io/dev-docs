
# December 2022

What’s new in Esper Device Provisioner v7.0:
 

## Features 

- Starting with v6.4, you can now sign in to the Device Provisioner using your preferred sign-on method: Email & Password, Sign In with Google, or Single Sign-on (SSO) through your identity provider. In order to sign in through Google or SSO, your tenant will need to be migrated to Esper SSO which implements Auth0. Find out more about the [migration process](https://docs.esper.io/home/faq/temporary.html). 
- We enhanced communication security between modules.


## Bug Fixes

- Resolved an issue that searched for devices globally when inside a Group. Now, you’ll only see results for that Group. 
- Fixed an issue where the Group breadcrumbs didn’t display properly when selecting an onboarding location. 
- Fixed an issue on the login screen where the cursor always returned to the beginning of the line when clicking on the eye icon. The cursor will now remember where it was last, even if you need to show a password instead of hiding it. 
- Resolved an issue where the tool was stuck in a set up cycle after restarting. 
- Fixed an issue where the login page was shown instead of the endpoint screen after closing the application and opening it again.




