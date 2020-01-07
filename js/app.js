window.onload = function() {
  document.getElementById("add-button").onclick = addItem;
}

//close and priority buttons

var closeButton = document.getElementsByClassName("close")
var priorityButton = document.getElementsByClassName("priority")


const todoItems = [];

// add new items to array

function addItem() {
  const input = document.getElementById("the-input").value;

  todoItems.push({
    id: todoItems.length,
    content: input,
    priority: "low",
    complete: false
  });
  document.getElementById("the-input").value = "";

  renderItems();
}

function renderItems() {
  const list = document.getElementById("the-ul");
  list.innerHTML = "";

  for (let i = 0; i < todoItems.length; i++) {
    const li = document.createElement("li");
    const priority = document.createElement("span");
    const content = document.createElement("span");
    const remove = document.createElement("span");

    li.id = i;
    li.onclick = toggleCompletion;
    li.className = todoItems[i].complete === true ? "checked" : "";

    priority.id = i;
    priority.innerHTML = "!";
    priority.className = "priority";
    priority.onclick = togglePriority;

    content.id = i;
    content.innerHTML = todoItems[i].content;

    remove.id = i;
    remove.innerHTML = "\u00d7";
    remove.className = "close";
    remove.onclick = removeItem;

    li.appendChild(priority);
    li.appendChild(content);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

function togglePriority() {
  const index = this.id;

  if (todoItems[index].priority === "low") {
    todoItems[index].priority = "high";

    const item = todoItems.splice(index, 1)[0];
    todoItems.unshift(item);
  } else {
    todoItems[index].priority = "low";

    const item = todoItems.splice(index, 1)[0];
    todoItems.push(item);
  }

  renderItems();
}

function toggleCompletion() {
  console.log(this);
  const index = this.id;

  if (todoItems[index].complete === false) {
    todoItems[index].complete = true;
  } else {
    todoItems[index].complete = false;
  }

  renderItems();
}

function removeItem() {
  const index = this.id;
  todoItems.splice(index, 1);

  renderItems();
}
