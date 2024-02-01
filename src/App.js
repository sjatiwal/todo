import LoginPage from "./components/loginPage";
import Todolist from "./components/todolist";
import { useSelector } from "react-redux";
function App() {
  const { name, password } = useSelector((state) => state.user.user);
  console.log(name, password);
  return (
    <div>
      {name !== "satish" && password !== "123" ? <LoginPage /> : <Todolist />}
    </div>
  );
}

export default App;
