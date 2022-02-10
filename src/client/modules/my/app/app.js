import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    name = 'Salesforce Troop';
    technologies = ['LWC OSS', 'Salesforce', 'Admin']
    greetingmsg = 'Hello Bro';
    changeName() {
        this.name = 'LWC OSS';
    }
    get addNumber() {
        return 1 + 2;
    }
    nameChange(event) {
        this.name = event.detail;
    }
}
