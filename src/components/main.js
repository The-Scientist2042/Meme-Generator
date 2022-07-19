import React from "react";
import date from '../memeData'
import useState from "react";
import useEffect from "react";




export default function Main(){
    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randImg:'https://i.imgflip.com/1bij.jpg'
    })

    const [data,setData] = React.useState(date)

     function handleClick(){
        const memeArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevData =>{
            return{
                ...prevData,
                randImg:url
            }
        })
     }



     function handleChange(event){
        const {name, value} = event.target
        setMeme(
            prev =>{
                return{
                    ...prev,
                    [name]:value
                }
            }
        )
     }
    //  const [fetchData,setFetchData] = React.useState({})

    //  React.useEffect(()=>{
    //     fetch('https://swapi.dev/api/people/1')
    //     .then(res => res.json())
    //     .then(data => setFetchData(data))
    //  }, )




    return(
        <div className="row" id="mainrow">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" id="maincol1">
            First Text:<input 
            type="text" 
            placeholder=" First Text"
            name = 'topText'
            value={meme.topText}
            onChange={handleChange}
            />
            </div>
            <div className="col" id="maincol2">
            Second Text:<input 
            type="text" 
            placeholder=" Second Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            </div>
            <div className="col-12" id="maincol3">
            <button onClick={handleClick}>
               Get A New Meme Image <i class="fa-solid fa-image"></i>
            </button>
            </div>
            <div className="col-12" id="sut">
            <img src={meme.randImg} alt="" />
            <h2 id="first--text">
                {meme.topText}
            </h2>
            <h2  id="second--text">
                {meme.bottomText}
            </h2>
            </div>
            {/* <div id="h2">
                {JSON.stringify(fetchData)}
            </div> */}
        </div>
    )
}