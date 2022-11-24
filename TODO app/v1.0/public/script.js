// const taskInput = document.querySelector("#task_name");
// const tasklist = document.querySelector("#task_list");
// const addTaskUrl = "http://localhost:3000/addtask";
// taskInput.addEventListener("keyup",async (event)=>{
//     // console.log(event.key);
//     if(event.key=="Enter")
//     {
//         //send request to the server
//         let taskname = event.target.value;
//         let obj = `{
//             "name" : "${taskname}",
//         }`
//         //add task
//         if(sendRequest(obj))        
//         {
//             addTask(taskname);
//             event.target.value = "";
//         }
//         else
//         {
//             window.alert("connection failure");
//         }
//     }
// })

// {
//     function sendRequest(object)
//     let request = new XMLHttpRequest();
//     request.open("GET", addTaskUrl);
//     request.setRequestHeader("Accept", "application/text");
//     request.setRequestHeader("Content-Type", "application/json");
//     request.setRequestHeader("Access-Control-Allow-Origin","*")
//     request.addEventListener("load",function(){
//            console.log( request.responseText);
//     });

//     /*request.onload(()=>{
//         console.log(request.responseText);
//     })*/
//     let reqBody = object;
//     console.log(reqBody);
//     request.send(reqBody);
// }

// let addTask = (taskname)=>{
//     const id = new Date().getTime();
//     console.log(id);
//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.id = `${id}`;
//     li.innerHTML = taskname;
//     tasklist.appendChild(li);
// }