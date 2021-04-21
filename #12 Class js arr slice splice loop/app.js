// var arr = ["cat","dog","tiger","lion"];
// console.log(arr)
// console.log(arr[2])

// var arr1 = new Array("ali","fraz","aman");
// console.log(arr1)


// arr[3] = "Monkey";

// arr.splice(2,1,"graph");
// console.log(arr)


// arr.push("rat");
// console.log(arr)

// arr.pop();
// console.log(arr)

// arr.shift();
// console.log(arr)

// arr.unshift("mice");
// console.log(arr)

// // splice 
// // splice(position from where we want to cut or replace ,lenght or  no of element from selected postion) 

// arr.splice(2,1,"graph");
// console.log(arr)

// arr.splice(1,2)
// console.log(arr)

// arr1.push("fahad","raza");
// console.log(arr1)

// // slice 
// // slice (starting position , endind position - 1) 
// var arr2 = arr1.slice(1,3)
// console.log(arr2)

// console.log("increament")
// var x ;
// for(x = 1; x<=10 ; x = x+2){
//     console.log(x)
// }
// console.log("decreament")

// var x ;
// for(x = 10; x>=0 ; x = x-2){
//     console.log(x)
// }


// for(var i=1; i<3; i = i+2){
//     alert("Hello Sarfraz")
// }

// for(var n=1; n<=10; n++){
//     document.write("2" + "x" + n + "=" + 2*n + "<br>" )
    
// }


// var names = ["Sarfraz", "Amaan", "Fahad", "Wahab","Sumair"]

// for( var i=0; i< names.length ; i++){
    
//     document.write(names[i] + "<br>")
// }

// for( var i=0; i< names.length ; i++){
//     if(names[i] === "Amaan"){
//         alert(names[i] + " Got Top In The Class!")
// }
  
// }

// for(var x=1; x>0 ; x++){
//     if(x=== 5){
//         break
//     }
//     console.log("Hello World!")
// }

// for (var i=0; i<5; i++){
//     for(var j=0; j<3 ; j++){
//         console.log("Pakistan Zindabad!")
//     }
// }

// var firstName = ["Sarfraz","Sumair"]
// var lastName = ["Aslam","Ahmed"]
// for (var i=0; i<firstName.length; i++){
//     for(var j=0; j<lastName.length ; j++){
//         console.log(firstName[i] + " " + lastName[j])
//     }
// }

// for (var i=0; i<10; i++){
//     for(var j=0; j<i; j++){
//        document.write("*")
//     }
//     document.write("<br>")
// }

// var word = prompt("Enter Your Word");
// var check = "";
// for (var i = word.length - 1; i >=0; i--){
//    check += word[i]
// }
// // console.log(word,check)
// if(check === word){
//     console.log(word + " is palindrone word")
// }


// var name = "SARFRAZ";
// name = name.toLowerCase();
// // name = name.toUpperCase();
// console.log(name);


// var name = "sarfraz";
// console.log(name.indexOf("f"))


// var val1 = +prompt("Enter First value")
// var sign = prompt("Enter Your Operator Sign")
// var val2 = +prompt("Enter Second value")


// if (sign === '+'){
//     result = val1 + val2
//     console.log(  val1+sign +val2 + "="+ result)
// }

// if (sign === '-'){
//     result = val1 - val2
//     console.log(  val1+sign +val2 + "="+ result)
// }

// if (sign === '*'){
//     result = val1 * val2
//     console.log(  val1+sign +val2 + "="+ result)
// }
// if (sign === '/'){
//     result = val1 / val2
//     console.log(  val1+sign +val2 + "="+ result)
// }
// if (sign === '%'){
//     result = val1/val2 *100 + '%'
//     console.log(  val1+sign +val2 + "="+ result)
// }


var equ = prompt("Enter Your Equation");
var num = equ.length

for(var i=0; i<num ; i++){
    if(equ.slice(i,i+1) === '+' || equ.slice(i,i+1) === '-' || equ.slice(i,i+1) === '*' || equ.slice(i,i+1) === '/'){
        console.log("Sign Has Found!")
        
    }
}