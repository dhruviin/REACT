import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#eb3f3f");
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-6 bg-white p-10 rounded-3xl"
          style={{ maxWidth: "720px", width: "90vw", margin: "0 auto" }}
        >
          <button
            className="w-full max-w-[320px] px-8 py-5 text-5xl font-semibold bg-blue-500 text-white rounded-2xl"
            onClick={() => setBgColor("#eb3f3f")}
          >
            Red
          </button>
          <button
            className="w-full max-w-[320px] px-8 py-5 text-5xl font-semibold bg-green-500 text-white rounded-2xl"
            onClick={() => setBgColor("#3feb3f")}
          >
            Green
          </button>
          <button
            className="w-full max-w-[320px] px-8 py-5 text-5xl font-semibold bg-yellow-500 text-white rounded-2xl"
            onClick={() => setBgColor("#ebeb3f")}
          >
            Yellow
          </button>
          <button
            className="w-full max-w-[320px] px-8 py-5 text-5xl font-semibold bg-purple-500 text-white rounded-2xl"
            onClick={() => setBgColor("#eb3feb")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
