 class Polygon {
    constructor(array){
        this.sides = array
    }

    get countSides(){
        let newArray = [...this.sides]
        return newArray.length
    }

    get perimeter(){
        let newArray = [...this.sides]
        let sumArray = newArray.reduce((a,b) => {
            return a + b
        })
        return sumArray
    }
 }

 class Triangle extends Polygon{
   get isValid(){
       if(this.countSides === 3 ){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
       }
   }
 }

 class Square extends Polygon{
    get isValid(){
        if(this.countSides === 4 ){
         let side1 = this.sides[0]
         let side2 = this.sides[1]
         let side3 = this.sides[2]
         let side4 = this.sides[3]

 
         return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
    }

    get area(){
        let side1 = this.sides[0]
        let area = side1 * side1
        return area
    }
 }