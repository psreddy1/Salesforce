import { LightningElement,wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/lwcSelectedRecordIdCtrl.getAccountList';
 
export default class LwcSelectedRecordId extends LightningElement {
    @track recordIdVal
    @wire(getAccountList) accounts;
    handleClick(event)
    {
        const selectedId=event.target.value;
       // alert('#### SelectedRecordId is ####'+selectedId);
 
       this.recordIdVal = selectedId;
    }
 
 
}