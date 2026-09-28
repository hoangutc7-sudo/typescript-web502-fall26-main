
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
    todos: Todo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoList(props: Props) {
    return (
        <div className="max-w-xl mx-auto mt-6">

            {props.todos.length === 0 ? (
                <p className="text-center text-gray-500">
                    Chưa có công việc nào
                </p>
            ) : (
                props.todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                    />
                ))
            )}

        </div>
    );
}

export default TodoList;