let message: string='Hello Web, I am is TypeSciprt abc';
console.log(message);

enum Color {Red, Green=10, Blue}
let c: Color = Color.Green;
console.log(Color[c]);

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
    console.log(labelledObj);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);