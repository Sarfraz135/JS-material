// var webCourse = {
//     t1 : "ali",
//     t2 : "Ahmed",
//     t3 : "Sarfraz"
// }
// // update 
//  webCourse.t4 = "nadia"
//  webCourse.class = [18,19]
//  webCourse.t5 = undefined
// console.log(webCourse)

// var abc = "t4" in webCourse

// console.log(abc)

// var course = {};

// course.name = "WEB"

// console.log(course)

// // Contructor function 
// // first letter of function name should be capital




// function Course(t1,t2,t3){
//     this.a = t1;
//     this.b = t2;
//     this.c = t3;
// }

// var xyz = new Course("ali","fraz","basit")
// console.log(xyz)






















function calcAnnual() {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * .8;
            break;
        }
    }
    return bestPrice * 12;
}


// This is the calling statement that executes the function.
// var annualPrice = calcAnnual();
calcAnnual();




var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};

