// var b=0;
// while(b<10){
//     console.log(b);
//     b++;
// }



// var c=0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10)



// function foo(){
//     alert('Hello World!')
// }




// function foo(greet){
//     alert(greet)
// }


// function clickBtn(){
//     alert("click")
// }



// var myLink = document.getElementById('mylink');
// myLink.onclick = function getName(){
//     var name = document.getElementById("name");
//     console.log(name.value)
//     name.value = ""
// }



// function setName(){
//     var name = document.getElementById('name');
//     name.value = "Sarfraz"

//     var para = document.getElementById("para");

//     para.innerHTML = "hello this is example!"
// }

// setName();



// calculator 



function getNum(num){
   
    var result = document.getElementById("result")
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = "";
}

function back(){
    var result = document.getElementById("result")
    var len = result.value.length ;
    result.value = "";
}


function getResult(){
    var result = document.getElementById("result")
    // console.log(result.value)
    result.value = eval(result.value)
    
}