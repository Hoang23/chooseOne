import React from 'react'

const AllItems = ({ Items, deleteItem }) => {
    return (
        <div>
            { Items.length > 0 ? <h4>Items</h4>  : ""}
            { Items.map( (item) => <>  <div key={item.id}>{item.text}  <button onClick={() => deleteItem(item.id) }>-</button> </div> </>)} 
        </div>
    )
}

export default AllItems
