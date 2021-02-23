import React from 'react'
import styled from 'styled-components';

const AllItems = ({ Items, deleteItem }) => {
    return (
        <>
            <PageContainer>
                { Items.length > 0 ? <h4>Items</h4>  : ""}
                <Container >
                    { Items.map( (item) => <>  <button onClick={() => deleteItem(item.id) }> x </button>  <> {item.text}   </>  <br/> </>)} 
                </Container>
            </PageContainer>
            
        </>
    )
}

export default AllItems

const PageContainer = styled.div`
    h4 {
        
    }
`;

const Container = styled.div`
    
    button {
        background: white;
        cursor: pointer;
        margin-bottom: .2rem;
        border: solid 1px black;
        border-radius: 50px;
        color: red;
    }
`;



