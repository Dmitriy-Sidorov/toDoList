var inputNewTask = document.querySelector('#new-task');
var addButton = document.querySelector('#add');
var inputUnfinishedTask = document.querySelector('#unfinished-tasks');
var inputFinishedTask = document.querySelector('#finished-tasks');

function createNewElement(task) {
    var listItem = document.createElement('li'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        checkbox = document.createElement('button'),
        editButton = document.createElement('button'),
        deleteButton = document.createElement('button');

    label.innerText = task;
    input.type = 'text';
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    editButton.className = 'material-icons edit';
    editButton.innerHTML = '<i class="material-icons">edit</i>';
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = '<i class="material-icons">delete</i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask() {
    if (inputNewTask.value) {
        var listItem = createNewElement(inputNewTask.value);
        inputUnfinishedTask.appendChild(listItem);
        inputNewTask.value = "";
    }
}
addButton.onclick = addTask;
