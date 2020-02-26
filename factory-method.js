CoordinateSystem = {
    cartesian: 0,
    polar: 1
}

class Point{
    // constructor(a, b, cs = CoordinateSystem.cartesian){
    //     switch (cs){
    //         case CoordinateSystem.cartesian:
    //             this.x = a
    //             this.y = b
    //             break
    //         case CoordinateSystem.polar:
    //             this.x = a * Math.cos(b)
    //             this.y = a * Math.sin(b)
    //             break
    //     }
    // }

    //factory
    constructor(x, y){
        this.x = x
        this.y = y
    }
}