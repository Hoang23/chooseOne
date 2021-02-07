import React, {useState} from 'react'

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
        <div>
             <form onSubmit={onSubmit}>
                <label >Item: </label> 

                <input 
                    type="text" 
                    placeholder="example item"
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                /> <br/> <br/>

                <input type='submit' value='add item' />
                
                
            </form>

            <form onSubmit={ Delete }>
                <input type='submit' value='reset' />
            </form>
        </div>
    )
}

export default AddItem