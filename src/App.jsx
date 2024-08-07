import './App.css'
import { useContext, useEffect } from "react";
import { useCallback } from "react";
import { useState, useRef } from "react";
import { ThemeProvider } from './ThemeProvider';
import Test from './Test';


function App() {
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(6);
  const [pass, setPass] = useState("");


  const handlePass = () => {
    let password = "";
    let str = "qwertyuiopasdfghjklzzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (num) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*()";
    }

    for (let i = 1; i <= len; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      password += str[index];
    }
    // setPass(password.slice(0, len));
    setPass(password);
  };

  useEffect((handlePass), [char, num, len]);

  const passRef = useRef(null);

  const handleLen = () => {
    setLen(document.getElementById("length").value);
  }
  const handleChar = () => {
    setChar((prev) => !prev);
  }
  const handleNum = () => {
    setNum((prev) => !prev);
  }

  // console.log(len);
  // console.log(char);
  // console.log(num);

  return (
    <>
      <ThemeProvider>





        <h1 className='mt-10 text-2xl md:text-6xl text-center text-[crimson]'>Password Generator Revised</h1>

        {/* Pass Gen */}
        <section className='m-10'>
          <div className='flex justify-center bg-purple-500 p-4 mx-auto w-fit rounded-3xl gap-3'>
            <input ref={passRef} type="text" placeholder='Password' className='border-2 rounded-3xl p-3 w-[17rem] ' value={pass} />
            <button
              onClick={useCallback(() => {

                navigator.clipboard.writeText(pass);
                // alert("Copied to Clipboard!");
                passRef.current?.select();

              }, [pass])}
              className='border-2 rounded-xl p-3 text-white hover:bg-purple-200 hover:text-black'
            >
              Copy
            </button>
          </div>
        </section>

        {/* implementation */}
        <section className='m-10'>
          <div className='flex justify-center bg-slate-300 text-black p-4 mx-auto w-fit rounded-3xl gap-3 flex-col'>

            <section className='flex items-center gap-3 justify-center'>
              <label htmlFor="number" className=' text-lg font-bold'>Number</label>
              <input
                onChange={handleNum}
                type="checkbox"
                className='w-5 h-5'
                id='number'
              />
            </section>
            {/* <div className='bg-black w-1'></div> */}

            <section className='flex items-center gap-3 justify-center'>
              <label htmlFor="character" className=' text-lg font-bold'>Character</label>
              <input
                onChange={handleChar}
                type="checkbox"
                className='w-5 h-5'
                id='character'
              />
            </section>
            {/* <div className='bg-black w-1'></div> */}
            <section className='flex items-center gap-3 justify-center'>
              <label htmlFor="character" className=' text-lg font-bold'>Length - {len}</label>
              <input
                onChange={handleLen}
                type="range"
                min={6} max={16}
                className=''
                id='length'
              />
            </section>


          </div>
        </section>
        <Test/>
      </ThemeProvider>

    </>
  )
}

export default App
