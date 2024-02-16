import { useDispatch } from "react-redux";

function TodoApp() {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-primary text-center">Todo app using redux react</h3>
    </div>
  );
}

export default TodoApp;
