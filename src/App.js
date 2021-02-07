import React, { useState } from 'react';
import AddItem from './components/AddItem';
import GenerateRandom from './components/GenerateRandom';
import AllItems from './components/AllItems';
import styled from 'styled-components';


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
    <>
      <Container>
        <ContentContainer>
            <Intro>
              <h1>Choose One Randomizor</h1>
              <p> Enter entries and randomly get chosen an item on the list </p>
            </Intro>
            <AddItem addItem={addItem}/>
            <AllItems Items={Items} deleteItem={deleteItem}/>
            <GenerateRandom Items={Items.map(item => item.text)} /> 
        </ContentContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background: lightslategray;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin-top: 7%;

`;


const Intro = styled.div`

`;