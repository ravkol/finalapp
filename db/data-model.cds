namespace elc;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity maintItems : cuid, managed {

    s4Id               : String(50);
    problemDescription : String(5000);
}