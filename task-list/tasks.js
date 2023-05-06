
const setCounter = () => {
    document.getElementById("taskCounter").innerHTML = localStorage.length;
}

const init = () => {
    setCounter();
    if(localStorage.length > 0){
        for(let i=1; i<=localStorage.length; i++){
            document.getElementById("task-list").innerHTML += localStorage.getItem(i) +"\n";
        }
    }
}

init();

const addTask = () => {
    const task = document.forms["taskForm"]["task"].value;
    if(String(task).trim() == "") return;
    localStorage.setItem(localStorage.length+1, String(task).trim());
    const x = localStorage.getItem(localStorage.length);
    document.getElementById("task-list").innerHTML += x +"\n";
    document.getElementById("task").value = "";
    setCounter();
}

const clearTasks = () => {
    localStorage.clear();
    document.getElementById("task-list").innerHTML = "";
    setCounter();
}

