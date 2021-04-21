var list = document.getElementById("list")

function addTodo(){

    // create li tag with text node 
    var todoItem = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
 li.appendChild(liText)
    list.appendChild(li)


    // create delete button 
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
 delBtn.appendChild(delText)


 // create edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.appendChild(editText)






  // append button to li
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    delBtn.setAttribute("class","btn")
    editBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    editBtn.setAttribute("onclick","editItem(this)")
   
   
    

    todoItem.value = ""
}

 //  we can write any other character for parameter except e ..#i.e  a,b,c ...x,y,z
function deleteItem(e){
   e.parentNode.remove()
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter edit Value",val)
     
   e.parentNode.firstChild.nodeValue= editValue
}
function dltAll(){
   list.innerHTML = ""
}