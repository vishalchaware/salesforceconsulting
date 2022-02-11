import { LightningElement } from 'lwc';
import BANNER_DATA from '../../../data/bannerData'

export default class Banner extends LightningElement {
    heading = BANNER_DATA.heading
    description = BANNER_DATA.description
    bannerBtnText = BANNER_DATA.bannerBtnText
}
