
import { useState } from "react";
import Counter from "./components/Counter";
import { Toaster } from "react-hot-toast";
import MyButton from "./components/Button";
import MyInput from "./components/Input";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import ShowHide from "./components/ShowHide";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const name = "hoadv";

    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(title: string) {
        const newTodo: Todo = {
            id: Date.now(),
            title: title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }

    return (
        <>
            <Header
                logo="WEB502 App Typescript"
                text="Xin chào"
            />

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Chào mừng đến với WEB502
                </h1>

                <p>ten toi la : {name}</p>

                <UserCard name="nam" />

                <UserCard
                    name="hoadv"
                    avatar="https://i.pravatar.cc/150?img=3"
                />

                <MyInput />

                <MyButton
                    label="ButtonApp"
                    onClick={() => alert("Truyen Onlick")}
                />

                <MyButton
                    label="ButtonSecond"
                    text="Second"
                />
            </div>

            {/* COUNTER */}
            <Counter />

            {/* SHOW HIDE */}
            <ShowHide />

            {/* TODO APP */}
            <div className="max-w-6xl mx-auto mt-10 px-4">
                <h1 className="text-3xl font-bold text-center">
                    Todo App
                </h1>

                <TodoForm onAdd={addTodo} />

                <TodoList
                    todos={todos}
                    onDelete={deleteTodo}
                    onToggle={toggleTodo}
                />
            </div>

            <Toaster />
        </>
    );
}

export default App;