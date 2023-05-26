import { LightningElement, api,wire } from 'lwc';
//Importing the apex clss, variables from html/object

import insertRecord from '@salesforce/apex/SnadDeveloperController.insertRecord';
import getRecords from '@salesforce/apex/SnadDeveloperController.getRecords';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';



export default class SnadRecordPage extends LightningElement {

errorCheck = false;
flag = false;
errorMessage;
@api recordId;

name='';
org = '';
strName = '';
SnadOrg = '';
recordList;

columns = [
  {label: 'Name', fieldName: 'Name'},
  {label: 'Org', fieldName: 'Org__c'}
];

handleName(event){
this.SnadName = event.target.value;
console.log("name  ", this.SnadName);
}

handleOrg(event){
    this.SnadOrg = event.target.value;
    console.log("org  ", this.SnadOrg);
}

CreateRecord() {
        if(this.SnadName === null || this.SnadName === '' || this.SnadName === undefined){
          this.errorCheck = true;
          this.errorMessage ='Please Enter Name'; 
        } else if(this.SnadOrg === null || this.SnadOrg === '' || this.SnadOrg === undefined){
            this.errorCheck = true;
          this.errorMessage ='Please Enter Org Name'; 
        }else{
            this.errorCheck = false;
            console.log('new pass111 ====>'+this.SnadName);
            console.log('new pass 222====>'+this.SnadOrg);
            

            insertRecord({snadName:this.SnadName, snadOrg:this.SnadOrg})
                .then(result=> {
                    console.log('result   222   '+JSON.stringify(result));

                    if(result){
                      this.recordList = result;
                    }  
                  }//insert method
               ).catch(error=>{
                  console.log('error  666   '+JSON.stringify(error));         
              })//end of catch 
        }//end of else condition
  }// end of CreateRecord method
}