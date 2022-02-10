import { LightningElement, api } from 'lwc';
export default class Greeting extends LightningElement {
    @api msg;
    callParent() {
        const event = new CustomEvent('namechange', {
            detail: 'New Name'
        });
        this.dispatchEvent(event);
    }
}
