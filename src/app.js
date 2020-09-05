'use strict';

/* This is the core application object, it contains:

  the state of your web page
    encapsulated in this object in the property _state

  methods that read, write, and change state
    these play the same role as Logic functions in the last module

  some basic rules:
    methods can read and write the _state property in your object
    methods can call other methods
    methods can NOT read or write the DOM

  study tips:
    copy your app object into JS Tutor
    remove extra methods when studying in JS Tutor (for cleaner visuals)

*/

const app = {
  _state: {
    todos: []
  },
  get state() {
    return this._state;
  },
  set state(newState) {
    this._state = newState
  },

  toggleCompleted: function (position) {
    if (position < 0 || this._state.todos.length <= position) {
      return;
    }
    const todo = this._state.todos[position];
    todo.completed = !todo.completed;
  }
}
