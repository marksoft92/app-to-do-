


let numbertask= 1 ;


function add(){
    const addTask = document.createElement('p')
    const textTask =document.createTextNode(`Task Number  ${numbertask}`);
    
   
    addTask.appendChild(textTask);
    document.getElementById("myList").appendChild(addTask);
    console.log(addTask);
    numbertask+=1;
    if (numbertask >6){clear();alert("there is no place on the sheet of paper")}

}

function remove(){
    
    const removeTask = document.getElementById('myList');
    console.log(removeTask);
   removeTask.removeChild(removeTask.lastElementChild);
   
   numbertask-=1;
 
}



function clear (){
    const clearTask = document.querySelectorAll('div p')
    for (let oneTask of clearTask){   
        oneTask.remove(oneTask);
    numbertask=1;}
 
}

document.querySelector('.add').addEventListener('click', add)
document.querySelector('.remove').addEventListener('click', remove)
document.querySelector('.clear').addEventListener('click', clear)




