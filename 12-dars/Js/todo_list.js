let addMessage = document.querySelector(".message");
let addButton = document.querySelector(".add");
let todo = document.querySelector(".todo");

let todoList = [];

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    displayMessages()
    e.target.reset();
})

function displayMessages() {
    let displayMessage = "";
    todoList.forEach(function(item, i){
        displayMessage += `
        <li>
        <input type="checkbox" id='item_${i}' ${item.checked ? "checked" : ""}>
        <label for='item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}