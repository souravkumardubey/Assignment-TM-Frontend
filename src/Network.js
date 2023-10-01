import popover from "bootstrap/js/src/popover";

const ID = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE5YTg2NTg3Zjg0MDcwNGNiOWZkYmYiLCJpYXQiOjE2OTYxODA3NDZ9.Wdln_El_NcZ01huHZQBsvT7KVrkheBuRn_Tim5H4tP0";

function Task(id,title, description, status, date){
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = date;
}

export async function getTasks(callback){

    const res = await fetch("http://localhost:8000/dashboard",{
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            'user':ID
        }
    });
    console.log("HELP");
    let json = await res.json();
    let arr = json['tasks'];
    let tasks = []
    for(let i = 0;i < arr.length;i++){
        tasks.push(new Task(
            arr[i]['_id'],
            arr[i]['title'],
            arr[i]['description'],
            arr[i]['status'],
            arr[i]['dueDate']
        ));
    }
    return tasks;
}