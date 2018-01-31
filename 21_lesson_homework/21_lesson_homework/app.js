var plane = new Plane("avi", "ELAL", "USA");
var bird = new Bird("Dove", "white", 2);
var kite = new Kite("Blue", 50);
function createIFly() {
    var randomNum = Math.round(Math.random() * 2);
    if (randomNum == 0) {
        return bird;
    }
    else if (randomNum == 1) {
        return plane;
    }
    else if (randomNum == 2) {
        return kite;
    }
}
var iFlyArr = new Array(10);
for (var i = 0; i < iFlyArr.length; i++) {
    iFlyArr[i] = createIFly();
    if (iFlyArr[i] instanceof Bird) {
        iFlyArr[i].fly(15);
    }
    else if (iFlyArr[i] instanceof Plane) {
        iFlyArr[i].fly(1000);
    }
    else if (iFlyArr[i] instanceof Kite) {
        iFlyArr[i].fly(10);
    }
    document.write("Is land?&nbsp" + iFlyArr[i].land() + "<br/>");
}
//# sourceMappingURL=app.js.map