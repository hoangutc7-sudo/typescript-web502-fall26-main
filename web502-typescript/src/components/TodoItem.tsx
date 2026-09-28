
interface Props {
    id: number;
    title: string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoItem(props: Props) {
    return (
        <div className="flex items-center justify-between border p-3 rounded mb-2">

            <span
                className={
                    props.completed
                        ? "line-through text-gray-400"
                        : ""
                }
            >
                {props.title}
            </span>

            <div className="flex gap-2">
                <button
                    onClick={() => props.onToggle(props.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    {props.completed ? "Bỏ hoàn thành" : "Hoàn thành"}
                </button>

                <button
                    onClick={() => props.onDelete(props.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Xóa
                </button>
            </div>

        </div>
    );
}

export default TodoItem; 