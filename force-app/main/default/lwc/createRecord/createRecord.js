import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import createAccount from '@salesforce/apex/CreateAcc.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecord extends LightningElement {

    name = NAME_FIELD;
    industry = INDUSTRY_FIELD;
    phone = PHONE_FIELD;

    rec = {
        Name :  this.name,
        Industry : this.industry,
        Phone :  this.phone
    }

    handelNamechange(event){
        this.rec.Name = event.target.value;
        //console.log("name", this.rec.Name);
        //alert(' this.rec.name  '+this.rec.name);
    }
    handelPhonechange(event){
        this.rec.Phone = event.target.value;
        //console.log("phone", this.rec.Phone);
        //alert(' this.rec.phone  '+this.rec.phone);
    }
    handelinduschange(event){
        this.rec.Industry = event.target.value;
       // console.log("industry", this.rec.Industry);
       //alert(' this.rec.Industry  '+this.rec.Industry);
    }
    createAccRec(){
        createAccount({ acc : this.rec })
        .then(result => {
            this.message = result;
           
            this.error = undefined;
            if(this.message !== undefined) {
                this.showToast('Success', this.message, 'Success', 'dismissable');
            }
            
            console.log(JSON.stringify(result));
            console.log("result", this.message);
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
    }
        showToast(title, message, variant, mode){
            alert('   test  ');
            const event = new ShowToastEvent({
                title : title,
                message : message,
                variant : variant,
                mode : mode
            });
            this.dispatchEvent(event);
        }


}