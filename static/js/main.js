var getData = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response);
            var newDiv,
                input,
                updateBtn,
                delBtn;
            var main = document.getElementById("main");
            response.forEach(function(e){
                newDiv = document.createElement("div");
                input = document.createElement("input");
                updateBtn = document.createElement("button");
                delBtn = document.createElement("button");
                newDiv.setAttribute("class", "field");
                input.setAttribute("id", e.id);
                input.value = e.description;
                updateBtn.setAttribute("class", "update-btn");

                updateBtn.addEventListener("click", function (e){
                    var inp = e.target.previousElementSibling;
                    console.log(inp.value);
                    /*TODO update db row*/

                });
                delBtn.setAttribute("class", "delete");
                delBtn.addEventListener("click", function(i){
                    /*TODO Remove db row */
                    i.target.parentElement.remove();
                });
                newDiv.appendChild(input);
                newDiv.appendChild(updateBtn);
                newDiv.appendChild(delBtn);
                main.appendChild(newDiv);
            });
        }
    }
    xhttp.open("GET", "todo",true);
    xhttp.send();
}

/*var addCreateEventHandlers = function(){
  var createButton = document.getElementsByClassName("create-btn")[0];
  console.log(createButton);
  createButton.addEventListener("click", function(e){
    var description = e.target.previousElementSibling.value;
    console.log(description);
  })
}
addCreateEventHandlers();
*/
document.addEventListener("DOMContentLoaded", function(){
    getData();
}, false);
