// document.write("<table >")
// for(var a=1; a<=100;a = a+10){
//      document.write("<tr>")

//     for(var b = a ; b< a+10; b++){
//         document.write("<td>")

//         document.write(b )
//         document.write("</td>")
//     }
//     document.write("</tr>")
//     // document.write("<br>")
// }

// document.write("</table>")

// var city = prompt("Enter city name ?")

// var firstchar = city.slice(0,1);
// var otherchar = city.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toUpperCase();

// var city = firstchar + otherchar ;
// console.log(city);



// var text = "Hello World War II Baby";
// for(var i=0; i<text.length; i++){
//     if(text.slice(i,i + 12) === "World War II"){
//         text = text.slice(0,i) + "The second world war" + text.slice(i + 12);
//         console.log(text)
//     }
// }


// var text = "Hello World War II Baby";
// // get -1 if indexnum not found!
// // var induxnum = text.indexOf("world");
// var induxnum = text.indexOf("World");
// var firsttext = text.slice(0,induxnum)
// var replace = "The second world war"
// var thirdtext = text.slice(induxnum + 12)

//         console.log(induxnum)
//         console.log(thirdtext)

//         console.log(firsttext + replace + thirdtext)
   


// var para = "this is example ";
// var para1 = para.replace("this","This")
// console.log(para1)



// var para = "this is example ,this is example ";
// var para1 = para.replace("this","This")
// console.log(para1)


// var para = "this is example ,this is example ";
// var para1 = para.replace(/this/g ,"This")
// console.log(para1)




// var name = "SarFraz";
// for(var i=0; i < name.length ; i++){
//     console.log(name.charAt(i))
// }


// var num = 1.5;
// var num = 1.4;
// round a/c to rule 
// var round = Math.round(num);
// // round higher 
// var round = Math.ceil(num);
// // round lower 
// var round = Math.floor(num);
// // randon number 
// var round = Math.random() ;
// // random number multiplty 
// var round = Math.random() *100;
// var rand = Math.floor(round);
// console.log(rand)

// console.log(round)



// Toss game 

// var headuser = prompt("Enter heads username");
// var tailuser = prompt("Enter tail username");
// var toss = Math.random() * 2;
// // console.log(toss)
// var floor = Math.floor(toss)

// if(floor=== 0){
//     alert("Heads "+ headuser + " Win The Toss")
// }
// else{
//     alert("Tails "+ tailuser + " Win The Toss")
// }



// // convert string to int 
// // method 01 
// var num = "10"
// num = Number(num)
// console.log(5+num)

// // method 02 
// var num = "10"
// num = parseInt(num)
// console.log(50+num)

// // number to string 
// var num = 10;
// console.log(num.toString())

// var num = 10.5454789865;

// var count = num.toFixed(4)
// console.log(count)