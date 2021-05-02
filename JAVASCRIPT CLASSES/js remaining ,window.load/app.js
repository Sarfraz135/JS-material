function press(){
    var locate = window.location.href
    console.log(locate)
    // window.location.href = 'https://www.google.com/'
    // window.location.assign('https://www.google.com/')
    // window.location.reload(false) // cache reloading
    // window.location.reload(true) // server reloading
    var content = `<h1>Succesfully change page `
    //  window.open().document.write(content)
    // window.open('https://www.google.com/')
   var win = window.open('https://www.google.com/','win1','width=200,height=100,left=100,top=100')
    if(win === null ){
     alert('please disable the popup locker')
win.close()
    }
    

}