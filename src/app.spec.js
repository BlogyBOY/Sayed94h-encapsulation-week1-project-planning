'use strict';


describe('app: todo manager inspired by Practical JavaScript', () => {
  const expect = chai.expect;

  describe('get state: read the app\'s ._state property', () => {
    // set the initial state for this grouping of tests
    app._state = { todos: [{ text: 'hi', completed: true }] };

    it('returns a reference to state', () => {
      const gotState = app.state;
      expect(gotState).to.equal(app._state);
    });
    it('gets the correct values from _state', () => {
      const gotState = app.state;
      expect(gotState).to.deep.equal({
        todos: [
          { text: 'hi', completed: true }]
      });
    });
  });

  describe('set state: reset the app\'s ._state property', () => {
    // set the initial state for this grouping of tests
    const newState = {
      todos: [
        { text: 'bye', completed: false }]
    };
    app.state = newState;

    it('sets _state to a true copy of the new state', () => {
      const _state = app._state;
      expect(_state).to.equal(newState);
    });
    it('_state has the correct values', () => {
      const gotState = app.state;
      expect(gotState).to.deep.equal({
        todos: [
          { text: 'bye', completed: false }]
      });
    });
  });

  describe('app.toggleCompleted: given a todo index, change its status', () => {
    // set the initial state for this grouping of tests
    app.state = {
      todos: [
        { text: 'hello', completed: false },
        { text: 'bye', completed: false }
      ]
    };

    it('changes the first todo', () => {
      app.toggleCompleted(0);
      expect(app.state).to.deep.equal({
        todos: [
          { text: 'hello', completed: true },
          { text: 'bye', completed: false }
        ]
      });
    });
    it('changes the second todo', () => {
      app.toggleCompleted(1);
      expect(app.state).to.deep.equal({
        todos: [
          { text: 'hello', completed: true },
          { text: 'bye', completed: true }
        ]
      });
    });
    it('changes the first todo again', () => {
      app.toggleCompleted(0);
      expect(app.state).to.deep.equal({
        todos: [
          { text: 'hello', completed: false },
          { text: 'bye', completed: true }
        ]
      });
    });
    it('does nothing if the index is out of range', () => {
      app.toggleCompleted(71);
      expect(app.state).to.deep.equal({
        todos: [
          { text: 'hello', completed: false },
          { text: 'bye', completed: true }
        ]
      });
    });
  });

  describe('... writing tests ...', () => {
    it('is', () => { });
    it('fun', () => { });
    it('!', () => { });
  });

});
