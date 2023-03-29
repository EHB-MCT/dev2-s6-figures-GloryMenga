"use strict";
import Figure from './Figure.js';
import Rectangles from './Rectangle.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {

    },
    init() {
        console.log('Form init!');
        const rectangles = new Square("rect", 30);
        console.log(rectangles);
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();