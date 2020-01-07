//close and priority buttons

var closeButton = document.getElementsByClassName("close")
var priorityButton = document.getElementsByClassName("priority")


const todoItems = [];

//creating to-dos function
var li = document.createElement('li');
function createNewElement(){
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

//checked
var ulList = document.querySelector('ul')
ulList.addEventListener('click', function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked');
  }
})

//removed
document.getElementById("the-input").value = "";

  var thePanTag = document.createElement("SPAN");
  var xMark = document.createTextNode("\u00d7");
  thePanTag.className = "close";
  thePanTag.appendChild(xMark);
  li.appendChild(thePanTag)

//removes items when clicked on span close button


  for (i = 0; i < closeButton.length; i++) {
   closeButton[i].onclick = function() {
     var theDiv = this.parentElement;
     todoItems.splice(theDiv.id, 1);
     theDiv.style.display = "none";
   }
  }

};


//array

let index = todoItems.indexOf(todoItems);

  todoItems[index] = document.createElement("li");
  document.getElementById("ul").append(ulList[index].li);

//array end
