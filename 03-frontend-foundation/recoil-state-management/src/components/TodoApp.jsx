import React, { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { fileterdTodos, todoFilter, todoAtom } from "../store/atoms/todo";

export default function TodoApp() {

    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    )
}

function App() {

    return (
        <>
            <TodoFilters />
            <TodoInputs />
            <TodoList />
        </>
    )
}

function TodoInputs() {
    const [title, setTodoTitle] = useState("");
    const [description, setDescription] = useState("");
    const setTodo = useSetRecoilState(todoAtom);

    function addTodo(title, description) {
        setTodo((todos) => {
            return [
                ...todos,
                {
                    title: title,
                    description: description,
                    isCompeleted: false
                }
            ]
        }

        )

    }

    return (
        <>
            <input type="text" value={title} placeholder="Todo" onChange={(e) => setTodoTitle(e.target.value)} />
            <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={() => addTodo(title, description)}>Add todo</button>
        </>

    )
}

function TodoFilters(){
    const setTodoFilter = useSetRecoilState(todoFilter);
    
    return(
        <div>
        <button onClick={()=> setTodoFilter("Completed")}>Completed</button>
        <button onClick={()=> setTodoFilter("Incompleted")}>Pendding</button>
        <button onClick={()=> setTodoFilter("All")}>All</button>
        </div>
    )
}

function TodoList() {
    const filteredTodosList = useRecoilValue(fileterdTodos);
    const setTodo = useSetRecoilState(todoAtom);
    const filter = useRecoilValue(todoFilter);


    function toogleTodo(index) {
        setTodo((todos) =>
            todos.map((todo,  todoIndex) =>
                todoIndex === index ? { ...todo, isCompeleted: !todo.isCompeleted } : todo
            ));

            console.log(todos);

    }

    return (
        <div>
            {
                filteredTodosList.map((todo, index) => {
                    return (
                        <div key={index}>
                            {(filter === "All")?<input type="checkbox" checked={todo.isCompeleted} onChange={() => { toogleTodo(index) }} />: null}
                            <span>{index} {todo.title} - {todo.description}</span>
                        </div>
                    );
                })
            }
        </div>
    )
}