import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoWork } from "../action/todoAction.js";

const Todolist = () => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editableIndex, setEditableIndex] = useState("");
  const { task } = useSelector((state) => state.task);
  console.log(task, "task");

  console.log(list, "list");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("TASK")) || [];
    setList(storedTasks);
  }, [task]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoTask !== "") {
      if (edit) {
        const updatedList = [...list];
        updatedList[editableIndex] = todoTask;
        localStorage.setItem("TASK", JSON.stringify(updatedList));
        setList(updatedList);
        dispatch(todoWork(updatedList));
        setEdit(false);
      } else {
        const updatedList = [...list, todoTask];
        localStorage.setItem("TASK", JSON.stringify(updatedList));
        setList(updatedList);
        dispatch(todoWork(updatedList));
      }
      setTodoTask("");
    }
  };
  const handleEdit = (index) => {
    setEdit(true);
    const updatedList = [...list];
    setTodoTask(updatedList[index]);
    setEditableIndex(index);
  };
  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    localStorage.setItem("TASK", JSON.stringify(updatedList));
    setList(updatedList);
    dispatch(todoWork(updatedList));
  };
  return (
    <div>
      <div className="flex justify-center text-3xl mt-2">ToDo List</div>
      <div className="flex bg-red-200 justify-center p-10 mt-10">
        <input
          type="text"
          className="border-2 p-2"
          value={todoTask}
          onChange={(e) => {
            setTodoTask(e.target.value);
          }}
        />
        <button
          onClick={addTodo}
          className="ml-2 bg-blue-400 w-[100px] rounded-[10px]"
        >
          ADD
        </button>
      </div>
      <div className="">
        {task.map((item, index) => {
          return (
            <div className="flex justify-around mt-2">
              <div className="w-[50%]">{item}</div>
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-400 w-[60px] rounded-[5px]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-blue-400 w-[60px] rounded-[5px]"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
