import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    name = 'Salesforce Troop';
    get addNumber() {
        return 1 + 2;
    }
}
