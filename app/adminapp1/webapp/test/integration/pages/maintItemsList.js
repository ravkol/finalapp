sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.elc.adminapp1',
            componentId: 'maintItemsList',
            contextPath: '/maintItems'
        },
        CustomPageDefinitions
    );
});