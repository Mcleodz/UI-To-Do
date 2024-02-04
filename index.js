/** Declaring Global Variables */
var task_name_list = [];

function create_task(){
    /** Sets task name to inputted task name */
    var task_name = document.getElementById("new-item-name");

    /** Sets new_task_name to inputted task name as temporary name */
    var new_task_name = task_name.value;

    /** Creates div for task information */
    var new_task = document.createElement("div");
    new_task.className = "new-item";

    /** Creates alert if name is empty */
    if (new_task_name == ""){
        alert("Please enter a task name");
        return;
    }
    
    if (task_name_list.includes(new_task_name)){
        alert("That task already exists");
        return;
    }

    new_task.id = new_task_name;

    document.getElementById("todo-list").appendChild(new_task);

    var task_name_text = document.createElement("p");
    task_name_text.className = "task-name";

    var text = document.createTextNode(new_task_name);
    task_name_text.appendChild(text);
    document.getElementById(new_task_name).appendChild(task_name_text);

    var delete_button = document.createElement("button");
    delete_button.className = "task-button";
    delete_button.innerHTML = "Delete";
    delete_button.onclick = function(){
        task_name_list.pop(new_task_name);
        document.getElementById(new_task_name).remove();
        return;
    }
    document.getElementById(new_task_name).appendChild(delete_button);

    task_name_list.push(new_task_name);

    task_name.value = "";
    task_name.placeholder = "(new task name)"
}
