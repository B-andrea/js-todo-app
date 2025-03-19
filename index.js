var json_data = [];
var myList = document.getElementById("todo-list");

json_data.forEach((element) => {
    newTodo(element.title);
});

registerEventListener();
function registerEventListener() {
    var closeButtons = document.getElementsByClassName("delete");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", deleteTodo, false);
    }
} // looping through every delete button and adding deleteTodo function to it

function deleteTodo() {
    var li = this.parentElement; // Grabbing parent list element of the text and delete button which are direct children of the list
    myList.removeChild(li); // Removing the list element
}

function newTodo(todoTitle) {
    if (!todoTitle) {
        // If textbox is not empty, execute the below code
        todoTitle = document.getElementById("todoTitle").value;
    }
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todoTitle));

    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.className = "btn btn-sm btn-danger m-1 delete";
    deleteLink.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(deleteLink);
    myList.appendChild(listItem);
    registerEventListener();
}
