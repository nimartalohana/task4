
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';
function App() {
  const [displayresult, setdisplayresult] = useState('')
  const eventhandle = (event) => {
    setdisplayresult(displayresult.concat(event.target.value))
    console.log(displayresult.concat(event.target.value))
  }
  const clearhandle = () => {
    setdisplayresult('')
  }
  const calculate = () => {
    setdisplayresult(eval(displayresult).toString())
  }
  const numbers = [
    {
      id: 12,
      no: 9
    },
    {
      id: 11,
      no: 8
    },

    {
      id: 10,
      no: 7
    },
    {
      id: 9,
      no: '/'
    },
    {
      id: 8,
      no: 6
    },

    {
      id: 7,
      no: 5
    },

    {
      id: 6,
      no: 4
    },
    {
      id: 5,
      no: '*'
    },


    {
      id: 4,
      no: 3
    },
    {
      id: 3,
      no: 2
    },

    {
      id: 2,
      no: 1
    },
    {
      id: 1,
      no: '+'
    },
    {
      id: 0,
      no: 0
    },
    {
      id: 14,
      no: '.'
    },

    {
      id: 16,
      no: '%'
    },
    {
      id: 15,
      no: '-'
    },

  ]
  return (
    <>
      <div id='main_div' >
        <div style={{ margin: "auto", marginTop: "-15px" }}><h3 style={{ textAlign: "center", color: "white" }}>CALCULATOR</h3></div>
        <div className='display_div' ><input type="text" placeholder='0' value={displayresult} className='screen' /></div>
        <div id='cal_div' >

          {
            numbers.map((val, index) => (
              <div key={index} className='number_div'>
                <Button className='numbers' onClick={eventhandle}
                  value={val.no}>{val.no}</Button>

              </div>
            ))
          }


          <div className='number_div  div_clear'><Button className='numbers clear ' onClick={clearhandle}
          >Clear</Button></div>


          <div className='number_div div_ans ' ><Button className='numbers ' onClick={calculate}
          >=</Button></div>



        </div>
      </div>
    </>
  );
}

export default App;
