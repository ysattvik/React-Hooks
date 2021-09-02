import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`)//here is tick operator ``
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
