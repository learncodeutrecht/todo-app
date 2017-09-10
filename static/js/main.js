var data = {};
var addUpdateEventHandlers = function() {
    var buttons = document.getElementsByClassName("update-btn");
    for(var i=0; i in buttons; i++){
        var button = buttons[i];
        button.addEventListener("click", function (e){
            var inp = e.target.previousElementSibling;
            console.log(inp.value);
            data[inp.id] = inp.value;

        });
    }
}
var getData = function(){
    return data;
}
addUpdateEventHandlers();

var addDeleteEventHandlers = function() {

    var deleteButtons = document.getElementsByClassName("delete");
    for(var i=0; i in deleteButtons; i++ ){
        var deleteButton = deleteButtons[i];
        deleteButton.addEventListener("click", function(i){
            i.target.parentElement.remove();

        });
    }
}

addDeleteEventHandlers();