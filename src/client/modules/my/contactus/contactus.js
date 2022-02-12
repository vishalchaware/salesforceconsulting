import { LightningElement } from 'lwc';
export default class Contactus extends LightningElement {
    formData={}
    formHandler(event){
        const {name, value} = event.target
        this.formData[name] = value
    }
    sendEmail(){
        console.log(this.formData)
        this.resetForm()
    }
    resetForm(){
        const form = this.template.querySelector('form')
        if(form){
            form.reset()
        }
    }
}