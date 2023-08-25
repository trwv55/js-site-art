import modals from './modules/modals';
import showMoreStyles from './modules/showMoreStyles';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    showMoreStyles('.button-styles', '#styles .row');
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    pictureSize('.size-block');
    filter();
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    drop();
});
