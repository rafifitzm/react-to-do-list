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
    console.log("Adding a todo...");
    // 1. Construct a to-do object based on user input
    const newTodo = { title, done: false };
    // 2. Add it to the todos list
    changeTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <div id="todosContainer">
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}<input type="checkbox" checked={todo.done}/></li>
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
