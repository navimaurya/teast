import React from 'react'

function Navbar() {
    return (
        <div style={{padding: '50px 20px'}}>
            {
                [...Array(10).keys()].map(()=>(
                    <div style={{width : "200px", margin: '7px', height:'45px', borderRadius: '20px', background : '#000'}}></div>
                ))
            }
        </div>
    )
}

export default Navbar
