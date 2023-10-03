# Dynamic Trust Hub (DTH) prototype

A single prototype that represents the DTH MVP journey - a common platform to store and manage identity across DWP. The prototype is made up of the Authentication service (based on work on Authenticate as a Service (AaaS)) journey, associated IDV capabilities and some aspects of potential consuming services such as Digital Self Serve / Customer Experience Portal (DSS/CXP),  Apply for Carers Allowance, etc.

## Prototype Kit View Versioning tool

This prototype uses the following tool for dynamic versioning of views, see [prototype-kit-view-versioning](https://github.com/dwp/prototype-kit-view-versioning/blob/master/README.md) for further info.

## Connecting with other services

To integrate with other services' prototypes, a service name can be dynamically set by passing a URL parameter, for example: https://dth-prototype.herokuapp.com/auth/dev-ready/sign-in?service-name=Service%20Name

We capture any connected consuming service in 'app/data/session-data-defaults.js'. These values can then be used to dynamically link back to another prototype at the of the IDV journey, see 'app/views/idv/hmrciv/success.html'. The actual DTH service name is captured in there as well as 'const dthServiceName'.

## Heroku

When any changes are committed and pushed to the master branch of the [GitLab repo] (https://gitlab.com/dwp/dynamic-trust-hub/prototypes/dth-prototype), Heroku redeploys the prototype. The credentials for viewing the live prototype are set in Heroku under 'Settings' > 'Config Vars' > 'Reval Config Vars'.

## Dev-ready prototype updates

Any changes to the dev-ready prototype should be notified to relevant dev teams via the #idt-forgerock-ui Slack channel.

## GOV.UK Prototype Kit

Go to the [GOV.UK Prototype Kit site](https://govuk-prototype-kit.herokuapp.com/docs) to download the latest version and read the documentation.

## About the Prototype Kit

The Prototype Kit provides a simple way to make interactive prototypes that look like pages on GOV.UK. These prototypes can be used to show ideas to people you work with, and to do user research.

Read the [project principles](https://govuk-prototype-kit.herokuapp.com/docs/principles).

## Security

If you publish your prototypes online, they **must** be protected by a [username and password](https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku). This is to prevent members of the public finding prototypes and thinking they are real services.

You must protect user privacy at all times, even when using prototypes. Prototypes made with the kit look like GOV.UK, but do not have the same security provisions. Always make sure you are handling user data appropriately.

## Installation instructions

- [Installation guide for new users (non technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/introduction)
- [Installation guide for developers (technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/developer-install-instructions)

## Support

The GOV.UK Prototype Kit is maintained by the Government Digital Service. If you’ve got a question or need support you can:

* email [govuk-design-system-support@digital.cabinet-office.gov.uk](mailto:govuk-design-system-support@digital.cabinet-office.gov.uk) 
* [get in touch on Slack](https://ukgovernmentdigital.slack.com/messages/prototype-kit)([open in app](slack://channel?team=T04V6EBTR&amp;id=C0647LW4R)) 
* [view known issues on GitHub](https://github.com/alphagov/govuk-prototype-kit/issues)
        
## Contributing

If you’ve got an idea or suggestion you can:

* [get in touch on the developer Slack channel](https://ukgovernmentdigital.slack.com/messages/prototype-kit-dev)([open in app](slack://channel?team=T04V6EBTR&amp;id=C0E1063DW))
* [create a GitHub issue](https://github.com/alphagov/govuk-prototype-kit/issues)
