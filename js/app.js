//close button

var closeButton = document.getElementsByClassName("close")



//creating to-dos function

function createNewElement(){
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    if(theInputValue == ''){
      alert("This cannot be left empty!");
    } else{
      document.getElementById("the-ul").appendChild(li);
    }

    document.getElementById("the-input").value = "";

    var thePanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag)

//removes items when clicked on span close button

    for (i = 0; i < closeButton.length; i++) {
     closeButton[i].onclick = function() {
       var theDiv = this.parentElement;
       theDiv.style.display = "none";
     }
    }
}

  var ulList = document.querySelector('ul')
  ulList.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
      event.target.classList.toggle('checked');
  }
}
