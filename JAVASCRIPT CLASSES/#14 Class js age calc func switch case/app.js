// var a = new Date();
// console.log(a)
// var b = a.toString();
// console.log(b + 5555555)
// var c= b.slice(0,3)
// console.log(c)




// var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var now = new Date();
// var theDay = now.getDay();
// var nameOftoday = dayNames[theDay];
// console.log(nameOftoday)




// console.log(a.getTime())
// console.log(a.getDay())
// console.log(a.getMonth())
// console.log(a.getSeconds())
// console.log(a.getHours())
// console.log(a.getUTCFullYear())






// var dob = new Date(prompt("Enter Your Date of birth","june 15,1970"))
// var dobmili = dob.getTime();
// // console.log(dobmili)
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accu = Math.floor(diff/(1000*60*60*24*30 *12))
// console.log(accu)




// function greeting(greet){
//     alert(greet)
// }

// greeting("Hello World!");


// function greeting(a,b,c){
//     alert(a+b+c)
// }

// greeting(10,5,3)



// function add(a,b,c){
//    var z= a+b+c
//    return z;
// }

// add(10,5,3)




// function add(a,b,c){
//    var z= a+b+c
//    return z;

// }

// var g = add(10,5,3);
// alert(g);






// function add(a,b,c){
//     var f=15
//     var z= a+b+c
//     return z;
    
//  }
 
//  var g = add(10,5,3);
// //  alert(g);
// console.log(f);



// var h = 10;
// function add(a,b,c){
//     alert(h)
//     var z= a+b+c
//     return z;
    
//  }
 
//  var g = add(10,5,3);
//  alert(g);



// function ageCalc(){
// var dob = new Date(prompt("Enter Your Date of birth","june 15,1970"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accu = Math.floor(diff/(1000*60*60*24*30 *12))
// console.log(accu)
// }
// ageCalc();






   // parameters
// function greeting(a,b,c){
//     alert(a+b+c)
// }

  // arguments
// greeting(10,5,3)





// var a = "Aslam"

// function son(){
//     a = "Sarfraz"
//     console.log(a)
// }

// son();

// // console.log(a);






// function calc(num1,opr,num2){

//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2 
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
//     else if (opr === "%"){
//         return (num1/num2)*100
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }

// var result = calc(5,"+",3)
// var result1 = calc(5,"-",3)
// var result2 = calc(5,"*",3)
// var result3 = calc(6,"/",3)
// var result4 = calc(5,"%",3)

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)






// function fool(a,b=3){
//     return a+b
// }

// console.log(fool(4))




// function fool(a,b=3){
//     return a+b
// }

// console.log(fool(4,4))



var name ="Sarfraz"


switch(name){
    case "Sarfraz":
        alert("Hello Sarfraz!")
        break;
    case "Basit":
        alert("Hello Basit!")
        break;
    default:
        alert("Hello World!")
}