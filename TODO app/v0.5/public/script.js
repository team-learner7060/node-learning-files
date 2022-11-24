
let button = document.querySelector("#submit");
let input = document.querySelector("#task_name");

button.addEventListener("click",async ()=>{
    let obj = {name : input.value, completion_status : false, id : new Date().getTime()};
    let response = await createPost(obj);
    console.log(response);
    if(response && response.status)
    {
        //add to tasklist
        console.log("task added")
    }
    else
    {
        console.log("task addition failed");
    }
})

async function createPost(data)
{
    data =  JSON.stringify(data);
    const config = {
        method: "POST",
        headers : {'Content-Type':'application/json'},
        body : data
    }
    console.log(data);
    const response =await fetch("http://localhost:3000/submit", config)
        .then((response)=>{return response.json()})
            .then((data)=>{return data}).catch((error)=>{
        console.log("request failed");
        
    });
    return response;
}