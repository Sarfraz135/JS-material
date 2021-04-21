// // var list = document.getElementById("li1")
// var list = document.getElementsByTagName("li")

// console.log(list)
// console.log(list[2])
// console.log(list.length)












// var target = document.getElementById("p1")

// if(target.hasAttribute("class")){
//     alert("available")
// }else{
//     alert("not available")
// }




// var target = document.getElementById("p1")
// console.log(target.getAttribute("class"))
// target.setAttribute("class","blue")
// console.log(target.getAttribute("class"))
// console.log(target.attributes[1].nodeName)







var p = document.createElement('p')
var text = document.createTextNode("Hello World")
p.appendChild(text)
// console.log(p)

var main = document.getElementById("main");
main.appendChild(p)












// function addMessage(){
//     var val = document.getElementById("val")
//     var p = document.createElement("p")
//     var textNode = document.createTextNode(val.value)
//     p.appendChild(textNode)
//     var message = document.getElementById("message")
//     message.appendChild(p)

//     val.value = ""
// }
