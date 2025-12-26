const App = () => {
  const [todos, changeTodos] = React.useState(
    [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
    ]
  );

  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    // 1. Construct a to-do object based on user input
    const newTodo = { title, done: false };
    // 2. Add it to the todos list
    changeTodos([...todos, newTodo]);
    setTitle('');
  };

  const deleteTodo = (index) => {
    // Bind an event to the delete button that triggers a method.
    // The method removes the to-do from todos.
    // changeTodos([...todos].splice(index, 1));
    const newTodos = todos.filter((_, i) => i !== index);
    changeTodos(newTodos);
  };

  return (
    <div id="todosContainer">
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}<input type="checkbox" checked={todo.done}/>
            <button type="button" onClick={() => deleteTodo(index)} id="deleteButton"><i class="fa-solid fa-trash-can"></i></button>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" id="todoTitle" value={title} onChange={handleTitleChange} />
        <button type="button" onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
