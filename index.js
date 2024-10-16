// Your code here
class Polygon {
    constructor(side) {
        this.side = side
    }
    get countSides() {
        return this.side.length;
    }
    get perimeter() {
        return this.side.reduce((total, side) => total +side, 0)
    }
}
class Triangle extends Polygon {
    get isValid() {
        if(this.countSides !== 3) return false;

        const [a, b, c] = this.side;
        return a + b > c && a + c > b && b + c > a;
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides !== 4) return false;

        const [a, b, c, d] = this.side;
        return a === b && b === c && c === d;
    }
    get area() {
        const [a, b, c, d] = this.side;
        return a * b;
    }
}