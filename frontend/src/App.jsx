import { useState } from "react";
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          className={clsx(
            'rounded py-2 px-4 text-sm text-white',
            !hover && !active && 'bg-sky-600',
            hover && !active && 'bg-sky-500',
            active && 'bg-sky-700'
          )}
        >
          Save changes
        </button>
      )}
    </Button>
    </>
  );
}

export default App;
