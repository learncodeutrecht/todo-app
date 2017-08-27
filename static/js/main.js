var app = (function(){ 
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
    return {
        addUpdateEventHandlers: addUpdateEventHandlers,
        getData: getData,
    }
})();
app.addUpdateEventHandlers();
