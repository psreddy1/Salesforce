public with sharing class SnadDeveloperController{
    
    @AuraEnabled
    public static List<SNAD_Developers__c> insertRecord(String snadName, String snadOrg){
        Boolean flag = false;
        List<SNAD_Developers__c> snadRecords = new List<SNAD_Developers__c>();
        try{
        System.debug('  SnadName   '+snadName);
        System.debug('  SnadOrg   '+snadOrg); 
               
            SNAD_Developers__c snad = new SNAD_Developers__c();
            snad.Name = snadName;
            snad.Org__c = snadOrg;

            if(snad.Name !=null && snad.Org__c!=null){
                System.debug('  details 1111 '+snad); 
                Database.insert(snad);
                flag  = true;
                
            }

            if(flag){
                System.debug('   -flag-  '+flag);    
                System.debug('   -snad-  '+snad.id); 
                 snadRecords = [Select Id, Name, Org__c from SNAD_Developers__c where id =: snad.id];
                System.debug('   -snadRecords-  '+snadRecords); 
            }
           return snadRecords;
        }
        catch(Exception e){
           System.debug('  exception   '+e);
           return null;
        }
    }
    @AuraEnabled
    public static SNAD_Developers__c getRecords(Id recId){

        return [Select Id, Name, Org__c from SNAD_Developers__c where id =: recId];
    }
}