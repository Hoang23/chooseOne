import {useState} from 'react'
import styled from 'styled-components';

const GenerateRandom = ({ Items }) => {

    // no need to be in global state because the random item is displayed here
    const [itemRandom, setItemRandom] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() // so that it doesnt commit to page
        setItemRandom(Items[Math.floor(Math.random() * Items.length)])
    }

    return (

        <div>
            <Form>
                { 
                    Items.length > 1 ? 
                        <form onSubmit={onSubmit}>
                            <input 
                                type="Submit" 
                                value="Generate Random"
                                onChange={(e) => setItemRandom(e.target.value)}
                            /> 
                        </form>  
                    : ""
                }  
            </Form>
            
            <Output>
                {
                    itemRandom !== '' ? <p> Result:<span> {itemRandom} </span> </p> : ''
                }
            </Output>
        </div>
    )
}

export default GenerateRandom

const Form = styled.div`

    margin-top: 5%;

    input {
        border: 2px solid green;
        background: white;
        border-radius: 50px;
        width: 10rem;
        height: 2rem;
        color: green;
        
        cursor: pointer;
    }
`;

const Output = styled.div`
    span {
        font-size: 2rem;
        font-weight: 700;
        color: green;
        
    }
`;