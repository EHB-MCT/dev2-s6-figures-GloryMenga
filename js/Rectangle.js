import figure from './Figure.js';

export default class Rectangles extends figure{
    constructor(name, width, height){
        super(name);
        //Parent.constructor() --> Figure.constructor()
        this.width = width;
        this.height = height;
    }
}
