

function on_mouseOver(){
    document.getElementById('mouseOver').style.backgroundColor="blue";
}

function on_mouseOut(){
    document.getElementById('mouseOut').style.backgroundColor="green";
}

changeColor = ()=>{
    document.getElementById('king').style.backgroundColor="red";
}

function onDoubleClick(){
    document.getElementById("doubleClick").style.backgroundColor="pink";
}

function onFocus(){
    document.getElementById("focus").style.backgroundColor="aqua";
}

function onBlur_Handler(){
    let name = document.getElementById("blur").value ;
    console.log(name);
    document.getElementById("blur").value = name.toUpperCase();
}

function changeCase(){
    let name=document.getElementById('onblur').value
    document.getElementById('onblur').value = name.toUpperCase();
    
}