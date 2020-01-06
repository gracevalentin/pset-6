//close and priority buttons

var closeButton = document.getElementsByClassName("close")
var priorityButton = document.getElementsByClassName("priority")


const todoItems = [];

//creating to-dos function

function createNewElement(){
    var li = document.createElement('li');
    li.id = todoItems.length;
    var theInputValue = document.getElementById("the-input").value;


    todoItems.push({
      id: todoItems.length,
      content: theInputValue,
      priority: "low",
      complete: false
    });


    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    if(theInputValue == ''){
      alert("This cannot be left empty!");
    } else{
      document.getElementById("the-ul").appendChild(li);
    }


  //document.getElementById("the-input").value = "";


    var thePanTag = document.createElement("SPAN");
    var xMark = document.createTextNode("\u00d7");
    thePanTag.className = "close";
    thePanTag.appendChild(xMark);
    li.appendChild(thePanTag)


stuff below doesnt work!!

    var exclamationPoint = document.createTextNode("!");
    thePanTag.className = "priority";
    thePanTag.appendChild(exclamationPoint);
    li.appendChild(thePanTag)

//removes items when clicked on span close button

    for (i = 0; i < closeButton.length; i++) {
     closeButton[i].onclick = function() {
       var theDiv = this.parentElement;
       console.log(theDiv.id);
       todoItems.splice(theDiv.id, 1);

       theDiv.style.display = "none";
     }
    }
}

  var ulList = document.querySelector('ul')
  ulList.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
      event.target.classList.toggle('checked');
    }
  });
