/*var json_data = [
    {
        title: "sample todo item",
        completed: false,
    },
];*/

var json_data = JSON.parse(localStorage.getItem("json_data"));
var myList = document.getElementById("todo-list");

if (json_data) {
    json_data.forEach((element) => {
        newTodo(element.title, element.id);
    });
}

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
    var json_temp = JSON.parse(localStorage.getItem("json_data"));
    //How do we delete the item from json_temp without a unique identifier?
    delete json_temp[li.dataset.id];
    localStorage.setItem("json_data", JSON.stringify(json_temp));
}

function newTodo(todoTitle, todoID) {
    if (!todoTitle && !todoID) {
        // If textbox is not empty, execute the below code
        todoTitle = document.getElementById("todoTitle").value;
        var todoID = storeTodoLocal(todoTitle);
    }
    var listItem = document.createElement("li");
    listItem.dataset.id = todoID;
    listItem.appendChild(document.createTextNode(todoTitle));

    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.className = "btn btn-sm btn-danger m-1 delete";
    deleteLink.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(deleteLink);
    myList.appendChild(listItem);
    registerEventListener();
    console.log("new todo added");
    console.log(listItem);
}

//This function takes todoTitle as an argument, which represents the text of the new to-do item
function storeTodoLocal(todoTitle) {
    // retrieve and parse existing JSON from localstorage
    var json_temp = JSON.parse(localStorage.getItem("json_data"));
    //Retrieve existing list of to-do items stored in local storage

    if (!json_temp) {
        json_temp = [];
    }
    //If json_temp is null, (i.e. no previous data was found), it initialises an empty array. This ensures that we have a valid array to work with.

    //Creating a new to do ID based on length of existing local storage array
    var todoID = json_temp.length;

    // add new todo object to JSON/JS array created above
    json_temp.push({
        id: todoID,
        title: todoTitle,
        completed: false,
    });

    // log updated JSON to console
    console.log(json_temp);

    // stringify updated JSON and store back in localStorage
    localStorage.setItem("json_data", JSON.stringify(json_temp));
    // Converts the updated json_temp array back into a JSON string
    return todoID;
}
