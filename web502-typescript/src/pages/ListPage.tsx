import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function ListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");

  function getTodos() {
    axios
      .get("http://localhost:3000/todos?title_like=" + search)
      .then((res) => {
        setTodos(res.data);
      });
  }

  function deleteTodo(id: string) {
    if (confirm("Bạn có chắc muốn xóa không?")) {
      axios.delete("http://localhost:3000/todos/" + id).then(() => {
        getTodos();
      });
    }
  }

  useEffect(() => {
    getTodos();
  }, [search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-lg mb-4"
      />

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">
                ID
              </th>

              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>

              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>

              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {todos.map((item: Todo) => {
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {item.id}
                  </td>

                  <td className="px-4 py-2 border border-gray-300">
                    {item.title}
                  </td>

                  <td className="px-4 py-2 border border-gray-300">
                    {item.completed
                      ? "Hoan thanh"
                      : "Chua hoan thanh"}
                  </td>

                  <td className="px-4 py-2 border border-gray-300">
                    Edit

                    <button
                      onClick={() => deleteTodo(item.id)}
                      className="ml-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;