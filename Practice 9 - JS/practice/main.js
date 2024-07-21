let mainDiv = document.querySelector("#shape-div") ; // parent 
let newDiv = document.createElement("div") ; 

let  w = 0 , h=0 , c="black" , br = 0 ; 

let myFomr = document.forms[0] ; 

myFomr.onsubmit = function(e){
    e.preventDefault();
    w = Number(document.querySelector("[name = width ]").value) ; 
    h = Number(document.querySelector("[name = height ]").value) ; 
    br = Number(document.querySelector("[name = b-radius ]").value) ; 
    c = document.querySelector("[name = color ]").value ; 
    newDiv.style.backgroundColor = c ; 
    newDiv.style.minWidth = `${w}px` ; 
    newDiv.style.minHeight = `${h}px` ; 
    newDiv.style.borderRadius = `${br}%` ; 
    mainDiv.append(newDiv);
}