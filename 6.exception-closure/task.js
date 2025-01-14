//1 задание 
function parseCount(qty) {
  let num = Number.parseInt(qty);
  if (isNaN(num) === true) {
    throw new Error("Невалидное значение");
  }
  return num;
}

function validateCount(value) {
  try {
    return parseCount(value);
  }
  catch (err) {
    return err;
  }
}
// 2 задание 
class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let num = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(num.toFixed(3));
  }

}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch (error) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
    };
  }
}