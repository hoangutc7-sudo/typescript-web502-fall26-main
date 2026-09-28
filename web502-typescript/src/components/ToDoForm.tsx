
import { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

function TodoForm(props: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit() {
        if (title.trim() === "") {
            alert("Vui lòng nhập công việc");
            return;
        }

        props.onAdd(title);
        setTitle("");
    }

    return (
        <div className="flex justify-center gap-2 mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập công việc..."
                className="border p-2 rounded"
            />

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Thêm
            </button>
        </div>
    );
}

export default TodoForm;