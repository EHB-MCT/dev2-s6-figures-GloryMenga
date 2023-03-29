import figure from './Figure.js';

export default class Circle extends figure{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
}