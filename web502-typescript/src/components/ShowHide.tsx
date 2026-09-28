 
import { useState } from "react";

function ShowHide() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-4">
                Show/Hide
            </h1>

            <button
                onClick={() => setIsShow(!isShow)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Hiển thị thông tin
            </button>

            {isShow ? (
                <div className="mt-4">
                    <p>Tên: Nguyễn Văn A</p>
                    <p>Email: example@gmail.com</p>
                </div>
            ) : (
                <p className="mt-4">Thông tin được ẩn</p>
            )}
        </div>
    );
}

export default ShowHide;    