var inputNewTask = document.querySelector('#new-task'),
    addButton = document.querySelector('#add'),
    inputUnfinishedTask = document.querySelector('#unfinished-tasks'),
    inputFinishedTask = document.querySelector('#finished-tasks');

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
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;
}

function addTask() {
    if (inputNewTask.value) {
        var listItem = createNewElement(inputNewTask.value);
        inputUnfinishedTask.appendChild(listItem);
        bindTaskEvents(listItem, finishTask);
        inputNewTask.value = "";
    }
}

addButton.onclick = addTask;

function deleteTask() {
    var listItem = this.parentNode,
        itemRemove = listItem.parentNode;
    itemRemove.removeChild(listItem);
}

function editTask() {
    var editButton = this,
        listItem = this.parentNode,
        label = listItem.querySelector('label'),
        input = listItem.querySelector('input[type=text]'),
        containsClass = listItem.classList.contains('editMode');

    if (containsClass) {
        label.innerText = input.value;
        editButton.className = 'material-icons edit';
        editButton.innerHTML = '<i class="material-icons">edit</i>';
    } else {
        input.value = label.innerText;
        editButton.className = 'material-icons save';
        editButton.innerHTML = '<i class="material-icons">save</i>';
    }
    listItem.classList.toggle('editMode');
}

function finishTask() {
    var listItem = this.parentNode,
        checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box</i>';

    inputFinishedTask.appendChild(listItem);
    bindTaskEvents(listItem, unfinishTask);
}

function unfinishTask() {
    var listItem = this.parentNode,
        checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';

    inputUnfinishedTask.appendChild(listItem);
    bindTaskEvents(listItem, finishTask);
}

function bindTaskEvents(listItem, checkboxEvent) {
    var checkbox = listItem.querySelector('button.checkbox');
    var editButton = listItem.querySelector('button.edit');
    var deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}