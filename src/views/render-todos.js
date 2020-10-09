const renderTodos = (todosArr) => {
	const ulEl = document.createElement("ul");

	for (const todo of todosArr) {
		const divEl = document.createElement("div");
		divEl.id = "list";
		const liEl = document.createElement("li");

		const checkBoxEl = document.createElement("input");
		const delBtn = document.createElement("button");
		delBtn.innerHTML = "🗑";
		checkBoxEl.type = "checkbox";
		if (todo.completed) {
			checkBoxEl.setAttribute("checked", true);
		}
		checkBoxEl.id = todosArr.indexOf(todo);
		liEl.appendChild(checkBoxEl);
		divEl.appendChild(liEl);
		divEl.appendChild(delBtn);
		liEl.innerHTML += todo.text;
		ulEl.appendChild(divEl);
	}

	return ulEl;
};

describe(
	"renderTodos: renders a list of todos",
	() => {
		const expect = chai.expect;

		describe("renders no todos", () => {
			const singleTodo = renderTodos([]);
			it('has tagName: "UL"', () => {
				expect(singleTodo).to.have.tagName("UL");
			});
			it("has childElementCount: 0", () => {
				expect(singleTodo).to.have.property("childElementCount", 0);
			});
		});

		describe("renders a single todo", () => {
			const singleTodo = renderTodos([{ text: "hello", completed: false }]);
			it('has tagName: "UL"', () => {
				expect(singleTodo).to.have.tagName("UL");
			});
			it("has childElementCount: 1", () => {
				expect(singleTodo).to.have.property("childElementCount", 1);
			});
			describe(".children[0]", () => {
				const childElement = singleTodo.children[0];
				it('has tagName: "LI"', () => {
					expect(childElement).to.have.tagName("LI");
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text("hello");
				});
				it("has childElementCount: 1", () => {
					expect(childElement).to.have.property("childElementCount", 1);
				});
				describe(".children[0]", () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "INPUT"', () => {
						expect(childChildElement).to.have.tagName("INPUT");
					});
					it("is not checked", () => {
						expect(childChildElement).to.have.property("checked", false);
					});
				});
			});
		});

		describe("renders 2 todos", () => {
			const doubleTodo = renderTodos([
				{ text: "hello", completed: false },
				{ text: "bye", completed: true },
			]);
			it('has tagName: "UL"', () => {
				expect(doubleTodo).to.have.tagName("UL");
			});
			it("has childElementCount: 2", () => {
				expect(doubleTodo).to.have.property("childElementCount", 2);
			});
			describe(".children[0]", () => {
				const childElement = doubleTodo.children[0];
				it('has tagName: "LI"', () => {
					expect(childElement).to.have.tagName("LI");
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text("hello");
				});
				it("has childElementCount: 1", () => {
					expect(childElement).to.have.property("childElementCount", 1);
				});
				describe(".children[0]", () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "INPUT"', () => {
						expect(childChildElement).to.have.tagName("INPUT");
					});
					it("is not checked", () => {
						expect(childChildElement).to.have.property("checked", false);
					});
				});
			});
			describe(".children[1]", () => {
				const childElement = doubleTodo.children[1];
				it('has tagName: "LI"', () => {
					expect(childElement).to.have.tagName("LI");
				});
				it('has text: "hello"', () => {
					expect(childElement).to.have.text("bye");
				});
				it("has childElementCount: 1", () => {
					expect(childElement).to.have.property("childElementCount", 1);
				});
				describe(".children[0]", () => {
					const childChildElement = childElement.children[0];
					it('has tagName: "INPUT"', () => {
						expect(childChildElement).to.have.tagName("INPUT");
					});
					it("is checked", () => {
						expect(childChildElement).to.have.property("checked", true);
					});
				});
			});
		});
	},
	true
);
