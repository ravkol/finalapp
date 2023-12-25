sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.elc.adminapp1',
            componentId: 'maintItemsObjectPage',
            contextPath: '/maintItems'
        },
        CustomPageDefinitions
    );
});