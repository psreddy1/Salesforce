trigger AccountTrigger on Account (Before Insert,Before Update,Before Delete,After Insert, After Update, After Delete, After UnDelete) {
//context variables
/*
Trigger.isInsert
Trigger.isupdate
Trigger.isDelete
Trigger.isundelete
Trigger.isBefore
Trigger.isAfter
Trigger.New
Trigger.old
Trigger.newmap
trigger.oldmap
trigger.size
*/

for(Account lst :  trigger.new){// foreach loop
if(trigger.isBefore){
    //account related records
    if(trigger.isinsert){
        lst.Name = lst.Name+'new record';
    }else if(trigger.isUpdate){
        lst.Name = lst.Name+'old record';
    }
} 

if(trigger.isAfter){
    System.debug('  -Action-    ');
   // 
    //other than account records
    //same records are locked
}



}


}