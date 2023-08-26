import { useState } from 'react'
import './App.css'

function App() {
  const [stringInput, setStringInput] = useState('');
  const changeString = (e) => {
    setStringInput(e.target.value);
  }

  const checkString = () => {
    let stringData = reverseString(stringInput);
    let resp = ' bukan';
    if(stringInput == stringData) {
      resp = '';
    }

    alert(`Ini${resp} termasuk kata palindrom !`);
  }

  const reverseString = (stringData) => {
    let arString = stringData.split("");
    let nString =[];
    for(let i=arString.length-1; i>=0; i--) {
      nString.push(arString[i]);
    }

    return nString.toString().replaceAll(',', '');
  }

  return (
    <>
      <h1>Tes Palindrom</h1>
      <div className="mt-10">
        <div className="">
          <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900 text-left">String </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
              <input type="text" name="string_palindrom" id="string_palindrom" autoComplete="string_palindrom" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Masukan String" onChange={changeString} value={stringInput} />
            </div>
          </div>
          <div className='flex mt-2'>
            <button
              type="button"
              className="ml-auto rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={checkString}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App