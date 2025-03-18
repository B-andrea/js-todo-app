
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
        myList.appendChild(listItem);
     });
 