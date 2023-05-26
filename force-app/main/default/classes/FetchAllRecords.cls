public with sharing class FetchAllRecords {
    public FetchAllRecords() {

    }

    @AuraEnabled(cacheable=true)
    public static void fetchRecords(Id RecordId) {
        System.debug('   -RecordId-  '+RecordId);

   // return osobjectWrapper;
 }



}