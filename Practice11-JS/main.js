const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you must write task first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    inputBox.value = "";

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData()
  }
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData()
    }
  },
  false
);


function saveData(){
    localStorage.setItem("data" , listCont.innerHTML);
}

function loadData(){
    listCont.innerHTML = (localStorage.getItem("data"));
}
loadData()