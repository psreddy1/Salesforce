public with sharing class lwcSelectedRecordIdCtrl {
    @AuraEnabled(cacheable=true)
    public  static List<Account> getAccountList()
    {
        List<Account> acclist=[select Name, Industry, Website, Type, Phone, Description from Account LIMIT 10];
        return acclist;
    }
}