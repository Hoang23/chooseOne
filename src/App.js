import './App.css';
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import GenerateRandom from './components/GenerateRandom';

function App() {

  const [Items, setItems] = useState(
    [
      {
        id: 1,
        text: "hello"
      },
      {
        id: 2,
        text: "test"
      },
     

    ]);

  const addItem = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1 // make random id
    const newItem = { id, text } // match the text input with id
    setItems([...Items, newItem]); // append new item to Items
  }

  console.log(Items);

  const deleteItem = (id) => {
    setItems(
      Items.filter((item) => item.id !== id) // filter items in which the id !== item.id
      )
  }

  // const deleteItem = (del) => {
  //   setItems(
  //     Items.filter( (item) => item !== del) 
  //   ) 
  // }
 
  // const stringFormatItems = (itemsList) => {
  //   // return itemsList.toString();
  //   return itemsList.join(' ');
  // }

  return (
    <div className="App">
   
      <AddItem addItem={addItem}/>

      <h5>Items</h5>
      
      { Items.map( (item) => <>  <div key={item.id}>{item.text}  <button onClick={deleteItem}>-</button> </div> </>)} 
      
      <GenerateRandom Items={Items.map(item => item.text)} /> 

    </div>
  );
}

export default App;
