let todo = []
let doing = prompt("What would you like to do?")
while(doing != 'quit' && doing != 'q'){
    doing = prompt("What would you like to do?")
    switch(doing){
        case "new":{
            let todoAdd = prompt("enter new todolist")
            todo.push(todoAdd)
            console.log(`${todoAdd} added to list`)
            console.log("*********")
            break;
        }
        case "list":{
            for (let i = 0; i<todo.length;i++){
                console.log(`${i}: ${todo[i]}`)
            }
            console.log("*********")
            break;
        }
        case "delete":{
            let todoDel = parseInt(prompt("enter delete index"))
            if (Number.isNaN(todoDel)) console.log("Unknown index")
            let deleted = todo.splice(todoDel,1)
            console.log(`${deleted} is deleted`)
            console.log("*********")
            break;
        }
    }
}