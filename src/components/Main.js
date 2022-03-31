import React from "react";

export default function Main () {
    const colors=[<h3>red</h3>, <h3>blue</h3>, <h3>orange</h3>]

    const jokesStuff =  [ { setup: 'pun1', punchline: 'answer1' }, { setup: 'pun2', punchline: 'answer2' },  { setup: 'pun3', punchline: 'answer3' } ]

    const jokesdate = jokesStuff.map(function(joke){ 
        const pun = joke.setup
        const setup = joke.punchline 
    })
    return (
        <div>
      
        
        </div>
    )
}