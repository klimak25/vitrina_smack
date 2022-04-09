import {useState} from 'react'

 function Serch({cb = Function.prototype} ) {
     const [value, setValue] = useState('')

    const hanleKey = (e) => {
        if(e.key === 'Enter') {
          handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

  return <div className='row'>
      <div className='input-field col s12'>
          <input type='search'
               id ='search'
               placeholder='search'
               onKeyDown={hanleKey}
               onChange={(e) => setValue(e.target.value)}
               value={value}
          />
          <button className='btn' style={{
              position:'absollute',
              top:0,
              right:0
           }}
           onClick={handleSubmit}
           >
               search
           </button>
      </div>
    </div>
  
}

export {Serch}
