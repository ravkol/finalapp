using AdminService as service from '../../srv/CatalogService';

annotate service.maintItems with @(
    odata.draft.enabled: true,
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'S4ID',
            Value : s4Id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Problem Details',
            Value : problemDescription,
        },
    ]
);
annotate service.maintItems with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'S4ID',
                Value : s4Id,
                ![@Common.FieldControl]: #ReadOnly
            },
            {
                $Type : 'UI.DataField',
                Label : 'Problem Details',
                Value : problemDescription,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
