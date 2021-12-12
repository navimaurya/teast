import React from 'react'

const Header = ()=> {
    return (
        <div className='mb-3' style={{
            display : 'flex',
            justifyContent : "space-between",
            padding : "14px 2px",
            background : '#712626'
        }}>
            <div style={{width : "40px", height:'40px', borderRadius: '50%', background : '#000'}}>

            </div>
            <div style={{width : "300px", height:'40px', borderRadius: '20px', background : '#000'}}>

            </div>
            
        </div>
    )
}
export default Header
