let myForm = document.forms[0];
let regBtn = document.querySelector("#rgBtn") ; 
if(!localStorage.availableId){
    localStorage.availableId = 1 ; 
}
myForm.onsubmit = function(e){
    e.preventDefault() ; 
    let fName      = document.querySelector("[name = fName]").value ; 
    let sName      = document.querySelector("[name = sName]").value ; 
    let email      = document.querySelector("[name = email]").value ; 
    let pNumber    = document.querySelector("[name = pNum]").value ; 
    let department = document.querySelector("[name = department]").value ; 
    console.log(fName , sName , email , pNumber , department);

    let uId = localStorage.availableId ;
    if(localStorage.userNeedEdit){
        let userEid = localStorage.userNeedEdit ; 
        let curId = + extractNumbers(userEid);
        uId = curId ;
    }
    console.log(uId);

    let nUser = {
        firstName   : `${fName}` , 
        secondName  : `${sName}` , 
        email       : `${email}` , 
        department  : `${department}` , 
        phoneNumber : `${pNumber}` , 
        id          :  uId ,
    }
    let currentUser = `user${uId}` ; 
    localStorage.setItem(`${currentUser}` , JSON.stringify(nUser));
    if(localStorage.userNeedEdit){
        localStorage.removeItem("userNeedEdit");
        regBtn.textContent = "Regeister" ; 
    } else {
        localStorage.availableId++;      
    }
    cleanValues();
    window.location.href = "/indexT.html" ;
}

if(localStorage.userNeedEdit){
    let userId = localStorage.userNeedEdit ; 
    let user = JSON.parse(localStorage.getItem(userId));
    console.log(user) ;
    let fName      = document.querySelector("[name = fName]"); 
    let sName      = document.querySelector("[name = sName]") ; 
    let email      = document.querySelector("[name = email]") ; 
    let pNumber    = document.querySelector("[name = pNum]"); 
    let department = document.querySelector("[name = department]") ; 

    fName.value = user.firstName ; 
    sName.value = user.secondName ;
    email.value = user.email ;
    department.value = user.department ; 
    pNumber.value = user.phoneNumber ;  
    
    regBtn.textContent = "Save" ; 
}

function extractNumbers(str) {
    const matches = str.match(/\d+/g);
    return matches ? matches.join('') : null;
}

function cleanValues(){
    let fName      = document.querySelector("[name = fName]"); 
    let sName      = document.querySelector("[name = sName]") ; 
    let email      = document.querySelector("[name = email]") ; 
    let pNumber    = document.querySelector("[name = pNum]"); 
    let department = document.querySelector("[name = department]") ; 

    fName.value = "" ; 
    sName.value = "" ;
    email.value = "" ;
    department.value = "" ; 
    pNumber.value = "" ;  
}
