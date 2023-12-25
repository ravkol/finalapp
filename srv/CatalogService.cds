using elc as my from '../db/data-model';

service AdminService {

    entity maintItems as projection on my.maintItems;

}