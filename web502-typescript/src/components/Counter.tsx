
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-4">
                Counter
            </h1>

            <h2 className="text-2xl mb-4">
                {count}
            </h2>

            <button
                onClick={() => setCount(count - 1)}
                className="border px-4 py-2 mx-2"
            >
                -
            </button>

            <button
                onClick={() => setCount(count + 1)}
                className="border px-4 py-2 mx-2"
            >
                +
            </button>

            <button
                onClick={() => setCount(0)}
                className="border px-4 py-2 mx-2"
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;