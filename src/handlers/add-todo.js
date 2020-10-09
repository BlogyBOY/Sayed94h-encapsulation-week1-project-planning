const addBtn = document.getElementById("add-btn");
const todoText = document.getElementById("todo-id");

function addHander(event) {
	let todoItem = todoText.value;
	app.addTodo(todoItem);
	logger.push({
		action: "Add todo",
		event,
		state: app.state,
	});
}

addBtn.addEventListener("click", addHander);
