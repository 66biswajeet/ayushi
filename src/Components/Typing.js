import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Typing() {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'TOPPER',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'PROGRAMMER',
                    1000,
                    'GATE RANKER',
                    1000,
                    'BEAUTYFULL',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2.5em', display: 'inline-block' , fontWeight:'1000' , color:'#7a2e57'}}
                
                repeat={Infinity}
            />
        </div>
    )
}

export default Typing
