import React, {useState} from 'react'
import styled from 'styled-components';

// addItem is a function that appends 
const AddItem = ({ addItem }) => {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() // so that it doesnt commit to page
        addItem(text)
        
        setText('')
    }

    const Delete = () => {
        setText('')
    }

    return (
        <>
            <AddItemContainer>
            
                <FormAdd onSubmit={onSubmit}>
                    {/* <label >Enter the item: </label>  */}
                     
                    <TextInput
                        type="text" 
                        placeholder="Enter item"
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    /> 

                    <ButtonAdd type='submit' value='Add item'/>
                </FormAdd>
  
                <FormDelete onSubmit={ Delete }>
                    <ButtonReset type='submit' value='Reset items'/> 
                </FormDelete> 
                {/* <input type='submit' value='add item' /> */}
                   
            </AddItemContainer>

        </>
    )
}

export default AddItem

const AddItemContainer = styled.div`
    display: flex;
    margin-top: 3rem;
`;

const TextInput = styled.input`
    border: solid 2px green;
    width: 8rem;
    height: 1.3rem;
    margin-right: 1rem;

`;

const ButtonAdd = styled.input`
    border: solid 2px; 
    background: green;
    width: 6rem;
    height: 1.7rem;
    cursor: pointer;
    
`;

const FormAdd = styled.form`
    margin-right: .3rem;
`;

const FormDelete = styled.form`
    
`;

const ButtonReset = styled.input`
    border: solid 2px green; 
    background: white;
    width: 6rem;
    height: 1.7rem;
    cursor: pointer;
    color: green;
    
`;



