const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    // Check if all required fields are filled
    var form = document.getElementById("myForm");
    if (form.checkValidity() === false) {
       return;
    }

    // Show notification
    var notification = document.getElementById("notification");
    notification.style.display = "block";

    // Hide notification after 3 seconds
    setTimeout(function(){
       notification.style.display = "none";
    }, 3000);

    // Clear the form (if needed)
    form.reset();
 });

document.getElementById("about-btn").addEventListener("click", function() {
    window.location.href = "Landing/index.html";
  });



function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

