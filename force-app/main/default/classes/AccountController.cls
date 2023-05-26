public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){

        Id userIds  = UserInfo.getUserId();
        List<Account> accRecords = [Select Name, Phone, Industry from Account where CreatedById =: userIds];
System.debug('   accRecords   '+accRecords);
        return accRecords;
    }


}