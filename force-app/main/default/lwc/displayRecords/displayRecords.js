import { LightningElement,track, wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class DisplayRecords extends LightningElement {
    @track accountList;
    @track columns = [
        {label: 'Label', fieldName: 'Name'},
        {label: 'Phone', fieldName: 'Phone'},
        {label: 'Industry', fieldName: 'Industry'}
      ];

    @wire (getAccounts) accRecords({error,data}){
        if(data){
            this.accountList = data;
        }else if(error){
            this.error = undefined;
        }
    }
}