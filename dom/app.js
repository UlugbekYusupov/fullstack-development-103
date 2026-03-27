// // practice
// // let myText = document.createElement("p");
// // myText.classList.add("paragraph");
// // myText.textContent = "Hello Dunyo !";
// // myText.style.background = "red";
// // document.body.appendChild(myText);


// // Practice - 1(To do list)

// // task-1
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.flexDirection = "column";
// document.body.style.alignItems = "center";

// let wrapper = document.createElement("div");
// wrapper.classList.add("wrapper");
// wrapper.style.width = "700px";
// wrapper.style.display = "flex";
// wrapper.style.flexDirection = "column";
// wrapper.style.alignItems = "center";
// wrapper.style.position = "relative";
// wrapper.style.padding = "20px";

// document.body.appendChild(wrapper);

// let mainTitle = document.createElement("h1");
// mainTitle.textContent = "Interactive To-Do List";
// mainTitle.style.fontFamily = "Arial";
// mainTitle.style.textAlign = "center";
// wrapper.appendChild(mainTitle);




// let taskWrapper = document.createElement("div");
// taskWrapper.classList.add("task-wrapper");
// taskWrapper.style.width = "600px";
// taskWrapper.style.padding = "20px";
// taskWrapper.style.background = "white"
// taskWrapper.style.borderRadius = "10px";
// taskWrapper.style.display = "flex";
// taskWrapper.style.justifyContent = "space-between";
// taskWrapper.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
// wrapper.appendChild(taskWrapper);

// let leftWrapper = document.createElement("div");
// // leftWrapper.style.background = "green";
// leftWrapper.style.display = "flex";
// leftWrapper.style.flexDirection = "column";
// leftWrapper.style.alignItems = "start";
// leftWrapper.classList.add("left-wrapper");

// let rightWrapper = document.createElement("div");
// // rightWrapper.style.background = "green";
// rightWrapper.classList.add("right-wrapper");

// taskWrapper.appendChild(leftWrapper);
// taskWrapper.appendChild(rightWrapper);


// let taskOneTitle = document.createElement("h4");
// taskOneTitle.textContent = "Task-1";
// taskOneTitle.style.textAlign = "flex-start";
// taskOneTitle.style.margin = "0";
// taskOneTitle.style.fontFamily = "Arial";
// leftWrapper.appendChild(taskOneTitle);

// let description = document.createElement("p");
// description.textContent = "Description For task-1";
// description.style.fontSize = "20px";
// description.style.fontFamily = "Arial";
// description.style.fontWeight = "bold";
// leftWrapper.appendChild(description);

// let deleteBtn = document.createElement("button");
// deleteBtn.textContent = "Delete";
// deleteBtn.style.background = "red";
// deleteBtn.style.color = "white";
// deleteBtn.style.border = "none";
// deleteBtn.style.borderRadius = "10px";
// deleteBtn.style.padding = '10px 20px';

// deleteBtn.addEventListener("click", () => {
//     taskWrapper.remove();
// })
// leftWrapper.appendChild(deleteBtn);


// let taskStatus1 = document.createElement("div");
// taskStatus1.textContent = "pending";
// taskStatus1.style.background = "orange";
// taskStatus1.style.fontFamily = "Arial";
// taskStatus1.style.color = "white";
// taskStatus1.style.padding = "6px 10px";
// taskStatus1.style.borderRadius = "10px";

// rightWrapper.appendChild(taskStatus1);




// // task-2
// let taskWrapper2 = document.createElement("div");
// taskWrapper2.classList.add("task-wrapper2");
// taskWrapper2.style.width = "600px";
// taskWrapper2.style.padding = "20px";
// taskWrapper2.style.background = "white"
// taskWrapper2.style.borderRadius = "10px";
// taskWrapper2.style.display = "flex";
// taskWrapper2.style.justifyContent = "space-between";
// taskWrapper2.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
// taskWrapper2.style.marginTop = "15px"
// wrapper.appendChild(taskWrapper2);

// let leftWrapper2 = document.createElement("div");
// // leftWrapper.style.background = "green";
// leftWrapper2.style.display = "flex";
// leftWrapper2.style.flexDirection = "column";
// leftWrapper2.style.alignItems = "start";
// leftWrapper2.classList.add("left-wrapper2");

// let rightWrapper2 = document.createElement("div");
// // rightWrapper.style.background = "green";
// rightWrapper2.classList.add("right-wrapper2");

// taskWrapper2.appendChild(leftWrapper2);
// taskWrapper2.appendChild(rightWrapper2);


// let taskOneTitle2 = document.createElement("h4");
// taskOneTitle2.textContent = "Task-2";
// taskOneTitle2.style.textAlign = "flex-start";
// taskOneTitle2.style.margin = "0";
// taskOneTitle2.style.fontFamily = "Arial";
// leftWrapper2.appendChild(taskOneTitle2);

// let description2 = document.createElement("p");
// description2.textContent = "Description For task-2";
// description2.style.fontSize = "20px";
// description2.style.fontFamily = "Arial";
// description2.style.fontWeight = "bold";
// leftWrapper2.appendChild(description2);

// let deleteBtn2 = document.createElement("button");
// deleteBtn2.textContent = "Delete";
// deleteBtn2.style.background = "red";
// deleteBtn2.style.color = "white";
// deleteBtn2.style.border = "none";
// deleteBtn2.style.borderRadius = "10px";
// deleteBtn2.style.padding = '10px 20px';

// deleteBtn2.addEventListener("click", () => {
//     taskWrapper2.remove();
// })
// leftWrapper2.appendChild(deleteBtn2);


// let taskStatus2 = document.createElement("div");
// taskStatus2.textContent = "in progress";
// taskStatus2.style.background = "blue";
// taskStatus2.style.fontFamily = "Arial";
// taskStatus2.style.color = "white";
// taskStatus2.style.padding = "6px 10px";
// taskStatus2.style.borderRadius = "10px";

// rightWrapper2.appendChild(taskStatus2);



// // task-3
// let taskWrapper3 = document.createElement("div");
// taskWrapper3.classList.add("task-wrapper3");
// taskWrapper3.style.width = "600px";
// taskWrapper3.style.padding = "20px";
// taskWrapper3.style.background = "white"
// taskWrapper3.style.borderRadius = "10px";
// taskWrapper3.style.display = "flex";
// taskWrapper3.style.justifyContent = "space-between";
// taskWrapper3.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
// taskWrapper3.style.marginTop = "15px"
// wrapper.appendChild(taskWrapper3);

// let leftWrapper3 = document.createElement("div");
// // leftWrapper.style.background = "green";
// leftWrapper3.style.display = "flex";
// leftWrapper3.style.flexDirection = "column";
// leftWrapper3.style.alignItems = "start";
// leftWrapper3.classList.add("left-wrapper3");

// let rightWrapper3 = document.createElement("div");
// // rightWrapper.style.background = "green";
// rightWrapper3.classList.add("right-wrapper3");

// taskWrapper3.appendChild(leftWrapper3);
// taskWrapper3.appendChild(rightWrapper3);


// let taskOneTitle3 = document.createElement("h4");
// taskOneTitle3.textContent = "Task-3";
// taskOneTitle3.style.textAlign = "flex-start";
// taskOneTitle3.style.margin = "0";
// taskOneTitle3.style.fontFamily = "Arial";
// leftWrapper3.appendChild(taskOneTitle3);

// let description3 = document.createElement("p");
// description3.textContent = "Description For task-3";
// description3.style.fontSize = "20px";
// description3.style.fontFamily = "Arial";
// description3.style.fontWeight = "bold";
// leftWrapper3.appendChild(description3);

// let deleteBtn3 = document.createElement("button");
// deleteBtn3.textContent = "Delete";
// deleteBtn3.style.background = "red";
// deleteBtn3.style.color = "white";
// deleteBtn3.style.border = "none";
// deleteBtn3.style.borderRadius = "10px";
// deleteBtn3.style.padding = '10px 20px';

// deleteBtn3.addEventListener("click", () => {
//     taskWrapper3.remove();
// })
// leftWrapper3.appendChild(deleteBtn3);


// let taskStatus3 = document.createElement("div");
// taskStatus3.textContent = "completed";
// taskStatus3.style.background = "green";
// taskStatus3.style.fontFamily = "Arial";
// taskStatus3.style.color = "white";
// taskStatus3.style.padding = "6px 10px";
// taskStatus3.style.borderRadius = "10px";

// rightWrapper3.appendChild(taskStatus3);





// // add task button
// let addTaskBtn = document.createElement("button");
// addTaskBtn.textContent = "Add Task";
// addTaskBtn.style.background = "blue";
// addTaskBtn.style.color = "white";
// addTaskBtn.style.fontFamily = "Arial";
// addTaskBtn.style.display = "block"
// addTaskBtn.style.border = "none";
// addTaskBtn.style.borderRadius = "10px";
// addTaskBtn.style.width = '640px';
// addTaskBtn.style.height = '40px';
// addTaskBtn.style.marginTop = '10px';

// addTaskBtn.addEventListener("click", () => {
//     let modal = document.createElement("div");
//     modal.classList.add("modal");
//     modal.style.position = "fixed";
//     modal.style.top = "20%";
//     modal.style.width = "500px";
//     modal.style.height = "300px";
//     modal.style.borderRadius = "10px";
//     modal.style.backgroundColor = "rgb(255, 255, 255)";
//     modal.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
//     modal.style.display = "flex";
//     modal.style.flexDirection = "column";
//     modal.style.justifyContent = "center";
//     modal.style.alignItems = "center";
//     modal.style.padding = "20px";
//     wrapper.appendChild(modal);

//     let modalTitle = document.createElement("h4");
//     modalTitle.textContent = "Add Task";
//     modalTitle.style.textAlign = "center";
//     modalTitle.style.fontFamily = "Arial";
//     modal.style.fontSize = "20px";
//     modal.style.fontWeight = "bold";
//     modal.appendChild(modalTitle);

//     let taskTitleInp = document.createElement("input");
//     taskTitleInp.placeholder = "Task Title";
//     taskTitleInp.style.width = "400px";
//     taskTitleInp.style.height = "40px";
//     taskTitleInp.style.borderRadius = "10px";
//     taskTitleInp.style.border = "1px solid gray";
//     taskTitleInp.style.padding = "10px";
//     modal.appendChild(taskTitleInp);

//     let taskDescriptionInp = document.createElement("textarea");
//     taskDescriptionInp.placeholder = "Task Description";
//     taskDescriptionInp.style.width = "400px";
//     taskDescriptionInp.style.maxWidth = "400px";
//     taskDescriptionInp.style.height = "100px";
//     taskDescriptionInp.style.borderRadius = "10px";
//     taskDescriptionInp.style.border = "1px solid gray";
//     taskDescriptionInp.style.padding = "10px";
//     taskDescriptionInp.style.marginTop = "10px";
//     modal.appendChild(taskDescriptionInp);


//     let statusSelect = document.createElement("select");
//     statusSelect.style.width = "420px";
//     statusSelect.style.height = "40px";
//     statusSelect.style.marginTop = "10px";
//     statusSelect.style.borderRadius = "10px";
//     statusSelect.style.border = "1px solid gray";
//     statusSelect.style.padding = "5px";

//     let statuses = ["Pending", "In Process", "Completed"];

//     statuses.forEach(status => {
//         let option = document.createElement("option");
//         option.textContent = status;
//         option.value = status.toLowerCase().replace(" ", "-");
//         statusSelect.appendChild(option);
//     });

//     modal.appendChild(statusSelect);


//     let saveBtn = document.createElement("button");
//     saveBtn.textContent = "Save";
//     saveBtn.style.background = "blue";
//     saveBtn.style.color = "white";
//     saveBtn.style.fontFamily = "Arial";
//     saveBtn.style.display = "block";
//     saveBtn.style.border = "none";
//     saveBtn.style.borderRadius = "10px";
//     saveBtn.style.width = '420px';
//     saveBtn.style.height = '60px';
//     saveBtn.style.marginTop = '10px';

//     saveBtn.addEventListener("click", () => {
//         let taskWrapper3 = document.createElement("div");
//         taskWrapper3.classList.add("task-wrapper3");
//         taskWrapper3.style.width = "600px";
//         taskWrapper3.style.padding = "20px";
//         taskWrapper3.style.background = "white"
//         taskWrapper3.style.borderRadius = "10px";
//         taskWrapper3.style.display = "flex";
//         taskWrapper3.style.justifyContent = "space-between";
//         taskWrapper3.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
//         taskWrapper3.style.marginTop = "15px"
//         wrapper.appendChild(taskWrapper3);


//         modal.appendChild(saveBtn);
//     })

//     let closeBtn = document.createElement("button");
//     closeBtn.textContent = "Close";
//     closeBtn.style.background = "red";
//     closeBtn.style.color = "white";
//     closeBtn.style.fontFamily = "Arial";
//     closeBtn.style.display = "block";
//     closeBtn.style.border = "none";
//     closeBtn.style.borderRadius = "10px";
//     closeBtn.style.width = '420px';
//     closeBtn.style.height = '60px';
//     closeBtn.style.marginTop = '10px';

//     closeBtn.addEventListener("click", () => {
//         modal.remove();
//     })

    
//     modal.appendChild(saveBtn);
//     modal.appendChild(closeBtn);


// });

// document.body.appendChild(addTaskBtn);