const addBtn = document.getElementById("add-btn");
const todoText = document.getElementById("todo-id");

function addHander(event) {
	app.addTodo();

	logger.push({
		action: "Add todo",
		event,
		state: app.state,
	});
}
addBtn.addEventListener("click", app.addTodo);
