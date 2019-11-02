const api = 'https://hamsahmedansari-todo-server.herokuapp.com';


getTodo = () => {
    try {
        fetch(`${api}/todo`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
    } catch(err){
        console.log(err,"An error accur");
     }

}

postTodo = ()=>{
    const data = {
        description: "This is belongs to Ali",
		isDelete: false,
		status: "transforming",
		title: "AHA",
		type: "Desert"
    }
    const options = {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
    }
    try{
        fetch(`${api}/todo`,options)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            return console.log(data);
        })
    }catch(err){
        console.log(err,'Error while posting')
    }
}


updateTodo = ()=> {
     const id = '5dbd8d9cd37f110024cb9da3';
     const data = {
        description: "This was belongs to Ali, now is Ali's brother",
		isDelete: true,
		status: "transformed",
		title: "AHA",
		type: "Sea"
    }
    const options = {
        method : 'PUT',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
    }
     try{
        fetch(`${api}/todo/${id}`,options)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            return console.log(data);
        })
    }catch(err){
        console.log(err,'Error while posting')
    }
}

deleteTodo = ()=>{
    const id = '5dbd8b2cd37f110024cb9da2';
    const options = {
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json'
        },
        // body : JSON.stringify(data)
    }
     try{
        fetch(`${api}/todo/${id}`,options)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            return console.log(data);
        })
    }catch(err){
        console.log(err,'Error while posting')
    }
}
// getTodo();
// postTodo();
// updateTodo();
// deleteTodo();

getSingleTodo = ()=>{
    const id = '5dbd9179d37f110024cb9da4';
    try {
        fetch(`${api}/todo/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            return console.log(data);
        })
    } catch (error) {
        console.log(error, "Data not get")
    }
}

getSingleTodo();