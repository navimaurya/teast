import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='mb-3' style={{
            display: 'flex',
            justifyContent: "space-between",
            padding: "14px 2px",
            background: '#712626'
        }}>
            <div style={{ width: "40px", height: '40px', borderRadius: '50%', background: '#000' }}>

            </div>
            <div style={{ display: 'flex', aliginItem: 'center' }}>
                <div style={{ width: "40px", height: '40px', borderRadius: '50%', fontSize: '25px' }}>
                    <Link to='/cart'>
                        🛒
                    </Link>
                </div>
                <div style={{ width: "300px", height: '40px', borderRadius: '20px', background: '#000' }}></div>
            </div>

        </div>
    )
}
export default Header
