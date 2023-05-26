public with sharing class CreateAcc {
    

    @AuraEnabled
    public static Account createAccount(Account acc) {
        Boolean flag = false;
        try{
         system.debug('  Account Record  ---  '+acc);
        insert acc;
            //flag = true;
           
        }catch(Exception e){
            System.debug('  --   '+e);flag = false;
        }
        return acc; 
    }
}