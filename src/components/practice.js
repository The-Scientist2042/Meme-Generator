import React from "react";
import Count from "./count";
import Star from "./Star";
// import useState from "react";


export default function Practice(){
    const [isGoingOut,setIsGoingOut] = React.useState(true)

    const [count, setCount] = React.useState(0)

    function add(){
        setCount(prevCount => prevCount + 1)
    }

    function sub(){
        setCount(prevCount => prevCount - 1)
    }

    function flip(){
        setIsGoingOut(isGoingOut === true ? false : true)
    }
    const [item,setItem] = React.useState(['Thing 1 ','Thing 2 '])

    function additem(){
        setItem([ ...item ,`Thing ${item.length + 1} `])
    }


    const [prac, setPrac] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    const one = <i class="fa-solid fa-star"></i>
    const two = <i class="fa-solid fa-star-half-stroke"></i>

    function get(){
        setPrac(prev => {
            return{
                ...prev, 
                isFavorite: !prev.isFavorite
        }
        })
    }
    

    return(
        <div className="row" id="practice">
        <Count
        number = {count}
        />
       <h1 className="col-6" onClick={sub}>
        -
       </h1>
       <h1 className="col-6" onClick={add}>
        +
       </h1>
       <h1 className="col-12">
            Do you feel like going out
        </h1>
        <h1 onClick={flip}>
            {isGoingOut === true ? 'Yes' : 'No'}
        </h1>
        <h1 onClick={additem}>
            Add Item
        </h1>
        <h1>
            {item}
        </h1>
        <div className="col-12" id="has">
            <Star
            isFilled = {prac.isFavorite === true ? one : two}
            ha = {get}
            />
            <h1>
                {prac.firstName} {prac.lastName}
            </h1>
            <h1>
                {prac.phone} 
            </h1>
            <h1>{prac.email}</h1>
            
        </div>
        </div>
    )
}