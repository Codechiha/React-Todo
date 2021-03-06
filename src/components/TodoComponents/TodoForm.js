import React from 'react';

const TodoForm = props => {
  return(
    <div>
      <form onSubmit={props.addTask}>
        <input
          type='text'
          name='inputTask'
          placeholder='Enter To Do Task'
          value={props.inputTask}
          onChange={props.handleChange}
        />
        <button type='submit'>Add To-Do</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
