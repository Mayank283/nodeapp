class Shape {

    /* It is the function used to create object with new keyword and name shape. 
     * Also performs the task of creating a constructor property on proptotype object.
     * Can be ommited if default parameter is to be passed.
     * var Shape = function(){...} of ES5
     * */
    constructor() {
        this.arr = [1,2,3,4,5,6];
    }


    /* equivalent to 
    Shape.prototype.add = function(name){
        ...
    } 
    of ES5.
    This method is added to the prototype object*/
    add() {
        this.arr.forEach(function (element) {
            console.log(element);
        }, this);
    }
};
module.exports.Shape = Shape;