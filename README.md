# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

##### MTA Initial#######################
---
_schema-version: '3.1'
ID: finalapp
version: 1.0.0
description: "A simple CAP project."
parameters:
  enable-parallel-deployments: true
build-parameters:
  before-all:
    - builder: custom
      commands:
        - npx cds build --production
modules:
  - name: finalapp-srv
    type: nodejs
    path: gen/srv
    parameters:
      buildpack: nodejs_buildpack
    build-parameters:
      builder: npm
    provides:
      - name: srv-api # required by consumers of CAP services (e.g. approuter)
        properties:
          srv-url: ${default-url}
    requires: []
################## MTA after Adding Fiori App##############
_schema-version: "3.1"
ID: finalapp
description: A simple CAP project.
version: 1.0.0
modules:
- name: finalapp-srv
  type: nodejs
  path: gen/srv
  provides:
  - name: srv-api
    properties:
      srv-url: ${default-url}
  parameters:
    buildpack: nodejs_buildpack
  build-parameters:
    builder: npm
- name: finalapp-app-content
  type: com.sap.application.content
  path: .
  requires:
  - name: finalapp-repo-host
    parameters:
      content-target: true
  build-parameters:
    build-result: resources
    requires:
    - artifacts:
      - comelcadminapp1.zip
      name: comelcadminapp1
      target-path: resources/
- name: comelcadminapp1
  type: html5
  path: app/adminapp1
  build-parameters:
    build-result: dist
    builder: custom
    commands:
    - npm install
    - npm run build:cf
    supported-platforms: []
resources:
- name: finalapp-repo-host
  type: org.cloudfoundry.managed-service
  parameters:
    service: html5-apps-repo
    service-name: finalapp-html5-srv
    service-plan: app-host
- name: finalapp-destination-service
  type: org.cloudfoundry.managed-service
  parameters:
    config:
      HTML5Runtime_enabled: false
      init_data:
        instance:
          destinations:
          - Authentication: NoAuthentication
            Name: ui5
            ProxyType: Internet
            Type: HTTP
            URL: https://ui5.sap.com
          existing_destinations_policy: update
      version: 1.0.0
    service: destination
    service-name: finalapp-destination-service
    service-plan: lite
parameters:
  deploy_mode: html5-repo
  enable-parallel-deployments: true
build-parameters:
  before-all:
  - builder: custom
    commands:
    - npx cds build --production
#########################