sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/elc/adminapp1/test/integration/FirstJourney',
		'com/elc/adminapp1/test/integration/pages/maintItemsList',
		'com/elc/adminapp1/test/integration/pages/maintItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, maintItemsList, maintItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/elc/adminapp1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemaintItemsList: maintItemsList,
					onThemaintItemsObjectPage: maintItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);