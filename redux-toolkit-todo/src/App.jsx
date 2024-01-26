import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen">
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
