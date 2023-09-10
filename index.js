



let form = document.querySelector("form");

let tbody = document.querySelector("tbody");

let task = document.querySelector("#task");
let priority = document.querySelector("#priority");

let taskArr = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let taskObj = {
        taskInp: task.value,
        priorityInp: priority.value
    }

    taskArr.push(taskObj);

    tbody.innerHTML = "";

    taskArr.map((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");



        // console.log(taskObj);
        td1.innerText = ele.taskInp;
        td2.innerText = ele.priorityInp;

        tr.append(td1, td2);

        tbody.append(tr);


        // if (taskObj.priorityInp == "High") {
        //     td2.innerText.style.backgroundColor = "red";
        // } else if (taskObj.priorityInp == "Low") {
        //     td2.innerText.style.backgroundColor = "green";
        // }

    })

    task.value = "";
    priority.value = "";







})


















