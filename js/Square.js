import figure from './Figure.js';

export default class Square extends figure{
    constructor(name, size, width, height){
        super(name);
        this.size = size;
        this.width = this.size;
        this.height = this.size;
    }
}