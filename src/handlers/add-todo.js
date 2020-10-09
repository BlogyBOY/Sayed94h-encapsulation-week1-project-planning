const addBtn = document.getElementById("add-btn");
const todoText = document.getElementById("todo-id");
var ulEl;
let view = {
	displayTodos: function () {
		let todoArr = app.state.todos;
		ulEl = document.createElement("ul");
		ulEl.style.listStyleType = "none";
		for (const todo of todoArr) {
			const divEl = document.createElement("div");
			divEl.className = "list";
			const liEl = document.createElement("li");
			liEl.textContent = todo.text;
			const checkBoxEl = document.createElement("input");
			const delBtn = document.createElement("button");
			//delBtn.id = `${todoArr.indexOf(todo)}btn`;
			delBtn.id = "delbtn";
			delBtn.textContent = "🗑";
			//delBtn.style.width = "44px";
			// delBtn.style.height = "39px";
			delBtn.style.fontSize = "18px";
			delBtn.addEventListener(
				"click",
				handlers.deleteTodos(todoArr.indexOf(todo))
			);
			checkBoxEl.type = "checkbox";
			if (todo.completed) {
				checkBoxEl.setAttribute("checked", true);
			}
			checkBoxEl.id = todoArr.indexOf(todo);
			divEl.appendChild(checkBoxEl);

			divEl.appendChild(liEl);
			divEl.appendChild(delBtn);

			ulEl.appendChild(divEl);
		}
		document.getElementById("root").appendChild(ulEl);
	},
};

let handlers = {
	addTodos: function (event) {
		event = event || window.event;
		event.preventDefault();
		let todoItem = todoText.value;
		app.addTodo(todoItem);
		view.displayTodos();
		logger.push({
			action: "Add todo",
			event,
			state: app.state,
		});
	},
	deleteTodos: function (pos) {
		debugger;
		app.deleteTodo(pos);
		view.displayTodos();
	},
};
