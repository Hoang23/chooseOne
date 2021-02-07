import './App.css';
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import GenerateRandom from './components/GenerateRandom';
import AllItems from './components/AllItems';

function App() {

  const [Items, setItems] = useState(
    [
      // {
      //   id: 1,
      //   text: "hello"
      // },
      // {
      //   id: 2,
      //   text: "test"
      // },
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


  return (
    <div className="App">
      <br/> <br/> <br/> <br/> 
      <h2>Choose One App</h2>
      <p> Enter entries and randomly get chosen an item on the list </p>
   
      <AddItem addItem={addItem}/>
      <AllItems Items={Items} deleteItem={deleteItem}/>
      <GenerateRandom Items={Items.map(item => item.text)} /> 

    </div>
  );
}

export default App;
