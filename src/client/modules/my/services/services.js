import { LightningElement } from 'lwc';
import SERVICES_DATA from '../../../data/servicesData';

export default class Services extends LightningElement {
    servicesData = [];
    connectedCallback() {
        this.formatData();
    }
    formatData() {
        this.servicesData = SERVICES_DATA.map(item => {
            let className = `icon ${item.color}`;
            return {...item, className }
        });
    }
}