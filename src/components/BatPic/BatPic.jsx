import React,{useEffect, useState} from 'react';
import './BatPic.css'

function BatPic(){
    const [isLoading, setIsLoading] = useState(true);
    const [batUrl, setBatUrl] = useState('')
    useEffect(()=>{
        if(isLoading){
            setTimeout(()=>{
                const randInt = Math.floor(Math.random() * 6);
                setBatUrl(`./src/images/bat${randInt}.JPG`)
                setIsLoading(false)
            },2000)
        }
        
    },[])

    return(
        
        <div id="batpic-component">
            {!isLoading && <p>tada 🎉</p>}
            {!isLoading && <img src={batUrl}/>}
        </div>
    )
}

export default BatPic;