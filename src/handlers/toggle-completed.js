'use strict';

const toggleCompletedHandler = (event) => {

  // event delegation!
  const target = event.target;
  if (target.nodeName !== 'INPUT' || target.type !== 'checkbox') {
    return;
  }

  // update state using app method
  const todoIndex = Number(target.id);
  app.toggleCompleted(todoIndex);

  logger.push({
    action: 'toggle todo',
    event,
    todoIndex,
    state: app.state
  });

};
