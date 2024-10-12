
import { useState } from 'react'
import './App.css'
import Block from './components/block'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks'

function App() {
  const [bookmarks, setBooksmarks]=useState([])
  const bookHandle= (it)=>{
    
    const newBooksmarks=[...bookmarks,it]
    setBooksmarks(newBooksmarks)
  }
  
   
  


  return (
    <div className='max-w-7xl m-auto '>
       <Header></Header>
       <hr />
     <div className='flex justify-between'>
     <div className='max-w-4xl'>
      <Block bookHandle={bookHandle} bookmarks={bookmarks} ></Block>
      </div>
      <div className='pl-36 max-w-96'>
                <Bookmarks bookmarks={bookmarks}  ></Bookmarks>
       </div>
     </div>
     
    </div>
  )
}

export default App
