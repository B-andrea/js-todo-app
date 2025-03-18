
     var json_data = [
       {
         "userId": 1,
         "id": 1,
         "title": "delectus aut autem",
         "completed": false
       },
       {
         "userId": 1,
         "id": 2,
         "title": "quis ut nam facilis et officia qui",
         "completed": false
       },
       {
         "userId": 1,
         "id": 3,
         "title": "fugiat veniam minus",
         "completed": false
       },
       {
         "userId": 1,
         "id": 4,
         "title": "et porro tempora",
         "completed": true
       },
       {
         "userId": 1,
         "id": 5,
         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
         "completed": false
       }
     ];


     var myList = document.getElementById("todo-list");

     json_data.forEach(element => { 
        var listItem = document.createElement("li");
        listItem.appendChild(
            document.createTextNode(element.title)
        );
        var deleteLink = document.createElement("a"); //Creating the delete button

        deleteLink.href = '#'; //Avoids deleteLink button navigating to another page
        deleteLink.className = "btn btn-sm btn-danger m-1 delete"; // Applying bootstrap styling to the button
        deleteLink.appendChild(
            document.createTextNode("Delete") // Appending/adding the 'delete' text to the 'deleteLink' button
        );
        listItem.appendChild(deleteLink); // Append/Add 'deleteLink' button to list items
        myList.appendChild(listItem);
     });
     var closeButtons = document.getElementsByClassName("delete");
     for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', deleteTodo, false);
     } // looping through every delete button and adding deleteTodo function to it
     function deleteTodo() {
        var li = this.parentElement; // Grabbing parent list element of the text and delete button which are direct children of the list
        myList.removeChild(li); // Removing the list element
        }

        function newTodo() {
       var inputVal = document.getElementById("todoTitle").value;
       var listItem = document.createElement("li");
       listItem.appendChild(
         document.createTextNode(inputVal) 
       );
       var deleteLink = document.createElement("a");
       deleteLink.href = "#";
       deleteLink.className = "btn btn-sm btn-danger m-1 delete";
       deleteLink.appendChild(
         document.createTextNode("Delete") 
       );
       listItem.appendChild(deleteLink);
       myList.appendChild(listItem);
     }
     
 