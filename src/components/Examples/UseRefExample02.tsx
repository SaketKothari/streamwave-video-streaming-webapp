import { useRef, useState } from "react";

const UseRefExample02: React.FC = () => {
  let x = 0;
  const [y, setY] = useState<number>(0);
  const ref = useRef<number>(0);

  console.log("Rendering...");

  return (
    <>
      <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96 rounded-3xl">
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3 mb-16"
            onClick={() => {
              x = x + 1;
              console.log("x = " + x);
            }}
          >
            Increase x
          </button>
          <span className="text-xl">Let = {x}</span>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3 mb-16"
            onClick={() => {
              console.log("Clicked");
              setY(y + 1);
            }}
          >
            Increase y
          </button>
          <span className="text-xl">State = {y}</span>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3 mb-8"
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref = " + ref.current);
            }}
          >
            Increase ref
          </button>
          <span className="text-xl">Ref = {ref.current}</span>
        </div>
      </div>
    </>
  );
};

export default UseRefExample02;
