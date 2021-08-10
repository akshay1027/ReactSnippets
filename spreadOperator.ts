const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState('');

// Spread operator is used whenever we want to add new element to an array in state. 
// When done like this, it means that all the previous elements of todolist is spread, 
// now we can add new element at the end.
setTodoList([...todoList, newTask]);
