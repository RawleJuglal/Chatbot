import React from 'react';
import './BatPic.css'

function BatPic(){

    setTimeout(function(){ 
        const batImages = document.getElementById("bat-img")
        
        const randInt = Math.floor(Math.random() * 6);
        document.getElementById('bat-text').textContent = 'tada 🎉';
        const img = document.createElement('img')
        img.src = `./src/images/bat${randInt}.JPG`
        img.alt = 'bat pic'
        batImages.appendChild(img)
    }, 200);

    return(
        <div id="batpic-component">
            <h1 className='--batpic-title'>Bat Pics</h1>
            <div id="bat-img">
                <p id="bat-text"></p>
            </div>
        </div>
    )
}

export default BatPic;