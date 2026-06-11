import { useState, useCallback, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let password = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbersAllowed) {
      string += "0123456789";
    }

    if (symbolsAllowed) {
      string += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 0; i < length; i++) {
      password += string[Math.floor(Math.random() * string.length)];
    }

    setPassword(password);
  }, [length, numbersAllowed, symbolsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-3xl font-bold">Password Generator</h1>
        <input
          className="border p-2 rounded w-24 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="range"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="1"
          max="100"
        />
        <p className="text-lg font-semibold">Password Length: {length}</p>
        <label>
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={(e) => setNumbersAllowed(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={symbolsAllowed}
            onChange={(e) => setSymbolsAllowed(e.target.checked)}
          />
          Include Symbols
        </label>
        {password && (
          <div className="mt-4 p-4 border rounded bg-gray-500">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Your Generated Password:
              </h2>
              <p>{password}</p>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              onClick={() => navigator.clipboard.writeText(password)}
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
