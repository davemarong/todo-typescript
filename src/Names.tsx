import React from 'react'

interface Dave {
    name: string,
}
export default function Names({name }: Dave) {
    return (
        <div>
            {name}
        </div>
    )
}
