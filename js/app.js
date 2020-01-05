function createNewElement(){
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    if(theInputValue == ''){
      alert("This cannot be left empty!")
    }
}
