import React from 'react'
import styled from 'styled-components';

const AllItems = ({ Items, deleteItem }) => {
    return (
        <>
            <PageContainer>
                
                { Items.length > 0 ? <h4>Items</h4>  : ""}
                <Container >
                    { Items.map( (item) => <>  <button onClick={() => deleteItem(item.id) }>-</button>  <> {item.text}   </>  <br/> </>)} 
                </Container>
            </PageContainer>
            
        </>
    )
}

export default AllItems

const PageContainer = styled.div`
`;

const Container = styled.div`
    button {
    }
`;



