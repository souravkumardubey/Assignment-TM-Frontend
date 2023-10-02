

export function Task(id,title, description, status, date){
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = date;
}

export async function getTasks(){

    const res = await fetch("http://localhost:8000/dashboard",{
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            'user':localStorage.getItem('ID')
        }
    });
    const json = await res.json();
    const arr = json['tasks'];
    const tasks = []
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

export async function postTask(task){
    const promise = await fetch("http://localhost:8000/add-post",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'user':localStorage.getItem('ID')
        },
        body:JSON.stringify(task)
    });
    const json = await promise.json();
    return json['_id'];
}

export function editTask(task){
   const res = fetch("http://localhost:8000/edit-post/"+task.id,{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(task)
    })
    return res.then(
        (res)=>{
           if(res.status === 200)return task.id;
           return undefined;
        },
        (err)=>console.log(err)
    );
}

export function deleteTask(task){
    const res = fetch("http://localhost:8000/delete-post/"+task.id,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json',
        }
    });
    return res.then(
        (res)=>{
            if(res.status === 200)return task.id;
            return undefined;
        },
        (err)=>console.log(err)
    )
}

export async function login(user,pass){
    const res = await fetch("http://localhost:8000/login",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username:user,
            password:pass
        })
    })
    if(res.ok){
        const json = await res.json();
        if(json['token'] !== undefined){
            localStorage.setItem("ID",json['token']);
            localStorage.setItem('username',user);
            return true;
        }else {
            alert(json['message']);
            return false;
        }
    }
}

export async function register(user,pass){
    const res = await fetch("http://localhost:8000/register",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username:user,
            password:pass
        })
    })
    if(res.ok){
        const json = await res.json();
        if(json['user'] !== undefined){
            return login(user,pass);
        }else{
            alert(json['message']);
            return false;
        }
    }
}



