import { LightningElement, api, wire } from 'lwc';
import fetchRecords from '@salesforce/apex/FetchAllRecords.fetchRecords';


export default class ParentRecords extends LightningElement {
    @api recordId;
    CaseRec;
    CaseColumns = [];


    @wire(fetchRecords,{
        recordId : '$recordId'
    })lstObjects({error,data}){
        if(data){
            console.log(' -----   '+data);
        }
    }




}