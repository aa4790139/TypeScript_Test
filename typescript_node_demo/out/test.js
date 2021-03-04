var message = 'Hello Web, I am is TypeSciprt abc';
console.log(message);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 11] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color[c]);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
    console.log(labelledObj);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//# sourceMappingURL=test.js.map