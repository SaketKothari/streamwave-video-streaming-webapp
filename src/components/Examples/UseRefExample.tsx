import { useMemo, useState, ChangeEvent } from "react";
import { findNthPrime } from "../../utils/constants";

const UseRefExample: React.FC = () => {
  const [text, setText] = useState<number>(0);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  // heavy operation
  const prime = useMemo(() => findNthPrime(text), [text]);

  // if not memoized
  // const prime1 = findNthPrime(text);
  return (
    <>
      <div
        className={
          "m-4 p-2 w-96 h-96 border border-black rounded-3xl " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <div className="flex justify-center">
          <button
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mb-8"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle
          </button>
        </div>

        <input
          className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="number"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(Number(e.target.value))
          }
        />

        <div className="mt-4 font-bold text-xl">nth Prime: {prime}</div>
      </div>
    </>
  );
};

export default UseRefExample;
