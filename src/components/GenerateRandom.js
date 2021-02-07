import {useState} from 'react'

const GenerateRandom = ({ Items }) => {

    // no need to be in global state because the random item is displayed here
    const [itemRandom, setItemRandom] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() // so that it doesnt commit to page
        setItemRandom(Items[Math.floor(Math.random() * Items.length)])
    }

    return (

        <div>

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
            
            {
                itemRandom !== '' ? <p> Random item is: {itemRandom} </p> : ''
            }
            
        </div>
    )
}

export default GenerateRandom
