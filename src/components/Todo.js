import React, { useState } from "react";
// import "./Todo.css"
import { addTodo, removeTodo , removeAll} from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);

  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="additems">
            <input
              type="text"
              placeholder="✍️ Add Items.. "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItmes">
            {list.map((elem) => {
              return (
                <div className="eachItems" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item "
                      onClick={() => dispatch(removeTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All"
            onClick={()=>dispatch(removeAll())}>
              <span>check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
