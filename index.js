class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, x) => x + acc)
  }
  
}

class Triangle extends Polygon{
  get isValid(){
    return this.countSides == 3 && this.sides.every( e => e < this.perimeter - e )
  }
}

class Square extends Polygon{
  get area(){
    return this.sides[0] ** 2
  }

  get isValid(){
    const s = this.sides
    return this.countSides == 4 &&  s[0] == s[1] && s[1] == s[2] && s[2] == s[3]
  }
}