import React from 'react'
import memesData from './memesData.js'


function Meme(){

const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <div>
            <div className='form-group'>
                <div className='form'>
                    <input type="text" className='form-input' placeholder="Shut up"/>
                    <input type="text" className='form-input' placeholder="and take my money" />
                    <button className='form-button'
                    onClick={getMemeImage}
                    >Get a new meme image</button>
                </div>
            </div>
           
                <img src={setMemeImage} className='meme-image' />
            
        </div>
    )
}

export default Meme
