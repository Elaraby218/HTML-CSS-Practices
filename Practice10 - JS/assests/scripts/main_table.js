let nUserBtn = document.querySelector("#nUserBtn") ; 
nUserBtn.addEventListener('click', function(){
    window.location.href = "/index.html" ;
})

let myTable = document.querySelector("#tbl tbody") ; 
console.log(myTable);

function writeTable(filterValue){
    if(filterValue){
        let found = false ; 
        let val = filterValue.replace(/\s+/g, '');
        Object.keys(localStorage).forEach(function(key){
            if(isJSON(key)){
                let curObj = JSON.parse(localStorage.getItem(key)); 
                if(typeof curObj == "object" && (curObj.id==val||curObj.department.toLowerCase()==val.toLowerCase()||curObj.firstName.toLowerCase()==val.toLowerCase())){
                    let nUser = `
                        <tr>
                            <td>${curObj.id}</td>
                            <td>${curObj.firstName}</td>
                            <td>${curObj.secondName}</td>
                            <td>${curObj.email}</td>
                            <td>${curObj.phoneNumber}</td>
                            <td>${curObj.department}</td>
                            <td>
                                <button class="edit" id="editBtn" onclick="editUser('${curObj.firstName}',${curObj.id})">Edit</button>
                            </td>
                            <td>
                                <button class="del" id="delBtn" onclick="deleteUser('${curObj.firstName}',${curObj.id})">Delete</button>
                            </td>
                        </tr>
                    ` ; 
                    myTable.innerHTML+= nUser ; 
                    found = true ; 
                }
            }
         });
         if(!found){
            myTable.innerHTML+="<h1>Sorry, No user Found</h1>";
         }
    }
    else {
        Object.keys(localStorage).forEach(function(key){
            if(isJSON(key)){
                let curObj = JSON.parse(localStorage.getItem(key)); 
                if(typeof curObj == "object"){
                    let nUser = `
                        <tr>
                            <td>${curObj.id}</td>
                            <td>${curObj.firstName}</td>
                            <td>${curObj.secondName}</td>
                            <td>${curObj.email}</td>
                            <td>${curObj.phoneNumber}</td>
                            <td>${curObj.department}</td>
                            <td>
                                <button class="edit" id="editBtn" onclick="editUser('${curObj.firstName}',${curObj.id})">Edit</button>
                            </td>
                            <td>
                                <button class="del" id="delBtn" onclick="deleteUser('${curObj.firstName}',${curObj.id})">Delete</button>
                            </td>
                        </tr>
                    ` ; 
                    myTable.innerHTML+= nUser ; 
                }
            }
         });
    }
}
writeTable();

function editUser(fName , id){
    let userId = `user` + String(id) ; 
    localStorage.userNeedEdit = userId ; 
    location.href = "/index.html" ; 
}

function deleteUser(fName,id){
    let userId = 'user' + String(id) ; 
    console.log(userId);
    localStorage.removeItem(userId) ; 
    myTable.innerHTML=""; 
    writeTable();
}

function searchUser(){
    let srchBtn = document.querySelector("#sBtn"); 
    console.log(srchBtn);
    srchBtn.addEventListener('input',function(){
        // console.log(srchBtn.value);
        let searchValue = srchBtn.value ; 
        myTable.innerHTML=""; 
        writeTable(searchValue);
    }) ;

}
function isJSON(key) {
    let item = localStorage.getItem(key);
    if (item === null) {
        return false;
    }
    try {
        JSON.parse(item);
        return true; 
    } catch (e) {
        return false; 
    }
}
searchUser();
