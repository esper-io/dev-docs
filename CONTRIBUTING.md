# Contributing to Esper docs

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Esper docs. Following these guidelines helps maintainers understand your report :pencil:, reproduce the behaviour :computer: :computer:, and find related reports :mag_right:.

### Running on Esper docs on your local machine

1. First fork this repo `https://github.com/esper-io/dev-docs` and clone the same.
2. Install [nodejs](https://nodejs.org/) (version v10.16.0 and above) and [yarn](https://yarnpkg.com/en/) (v1.16.0 or above).
3. In the source directory run the following commands to get the docs running.
    ```
    $ yarn install
    $ yarn docs:dev
    ```
### Contributing

1. Once you have your fork setup, make the changes on the fork 
    >Be sure to follow the proper Markdown syntax. For more information, see the [style guide](https://vuepress.vuejs.org/guide/markdown.html).
2. Submit a Pull Request (PR) from your branch to `esper.io/dev-docs/develop` \
\
    Your PR should always target the **develop** branch. You should never open a PR that targets the live branch.

    Each PR should usually address one issue at a time. The PR can modify one or multiple files. If you're addressing multiple fixes on different files, separate PRs are preferred.
    \
    \
    The Esper team will review your PR and let you know if there are any other updates/changes necessary in order to approve it.

3. The maintainers will merge your PR into the develop

    From develop there'll be merges to **master** after the content is reviewed further by the esper team.

    Once your change is live on **esper docs**, you can view them on https://docs.esper.io/


## DOs and DON'Ts

The following list shows some guiding rules that you should keep in mind when you're contributing to the Esper documentation:

 -  **DO** create separate branch on your fork before working on the docs
 - **DON'T** surprise us with large pull requests. Instead file an issue and start a discussion.
- **DO** follow the [GitHub Flow workflow](https://guides.github.com/introduction/flow/).
- **DO** blog and tweet (or whatever) about your contributions, frequently!
- **DON'T** modify host URLs on the docs with static URLs. When you are modifying an endpoint, in case it has a user specific endpoint, use `{{ esper_tenant_name }}` so that vuepress will plug in the respective endpoint name there.\
Eg. If you're planning to use `https://<endpoint-name>.esper.cloud` then use `https://{{ esper_tenant_name }}.esper.cloud` instead
