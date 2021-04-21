// var count = 0 ;
// var interval;
// function timer(){
//     count++
//    console.log(count)
// }
// //  1000 ms = 1 sec 
// interval = setInterval(timer,1000)


// setTimeout(function(){
// clearInterval(interval)
// },5000)

// function timeOut(){
//     console.log("Stop...")
// }
// setTimeout(timeOut,300)





// stop watch 


// var min = 0;
// var sec = 0;
// var msec = 0;

// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");
// var interval;

// function timer(){
//     msec++
//     msecHeading.innerHTML = msec;
//     if(msec >= 100){
//         sec++
//         secHeading.innerHTML = sec
//         msec = 0;
//     }
//     else if(sec >= 60){
//         min++
       
//         minHeading.innerHTML = min
//         sec = 0
//     }
// }

// function start(){
//     interval = setInterval(timer,10)
//     // const button = document.querySelector('button')
//     // button.disabled = true
//     document.getElementById('start').disabled = true
//     document.getElementById('stop').disabled = false

// }

// function stop(){
//     clearInterval(interval)
//     // const button = document.querySelector('button')
//     // button.disabled = false
//     document.getElementById('start').disabled = false
//     document.getElementById('stop').disabled = true

// }


// function reset(){
//     min = 0;
//     sec = 0;
//     msec = 0;
//     minHeading.innerHTML = min;
//     secHeading.innerHTML = sec;
//     msecHeading.innerHTML = msec;
//     stop()
// }



// Document Object Model = DOM 

// without dom 
var a = document.getElementById('some')  


// with DOM 

console.log(document.childNodes[1].childNodes[1].childNodes[0])