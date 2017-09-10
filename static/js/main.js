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

var deleteButton = document.getElementByClassName("delete").addEventListener("click", function(i){ 
    if (i.parent) {
        this.Delete = function (item) {
            // reinitiates the data variable as empty and thus removes the data in it
            data = {};
            // Delete the current row
            this.data.splice(i, 1);
            // Display the new list
            this.FetchAll();
        };
    }
);