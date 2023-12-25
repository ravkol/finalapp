//@ui5-bundle com/elc/adminapp1/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/elc/adminapp1/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.elc.adminapp1.Component",{metadata:{manifest:"json"}})});
},
	"com/elc/adminapp1/i18n/i18n.properties":'# This is the resource bundle for com.elc.adminapp1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Maint Notification 1\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Maint Notification 1\n\nflpSubtitle=manage\n',
	"com/elc/adminapp1/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.elc.adminapp1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.1","toolsId":"8b0a2e90-d1b1-444d-b38d-ba926ec21db9"},"dataSources":{"mainService":{"uri":"odata/v4/admin/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"notification1-manage":{"semanticObject":"notification1","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.3","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.elc.adminapp1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"maintItemsList","target":"maintItemsList"},{"pattern":"maintItems({key}):?query:","name":"maintItemsObjectPage","target":"maintItemsObjectPage"}],"targets":{"maintItemsList":{"type":"Component","id":"maintItemsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/maintItems","variantManagement":"Page","navigation":{"maintItems":{"detail":{"route":"maintItemsObjectPage"}}}}}},"maintItemsObjectPage":{"type":"Component","id":"maintItemsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/maintItems"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});