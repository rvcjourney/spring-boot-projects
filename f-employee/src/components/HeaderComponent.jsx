import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar bg-light ">
                    <span className="navbar-brand m-2 font-bold" > 📒 Employee Management System</span>
                    <div >
                        <a style={{marginRight:'20px'}} href="#">Home</a>
                        <a style={{marginRight:'20px'}} href="#">About</a>
                        <a style={{marginRight:'20px'}} href="#">Features</a>
                    </div>
                    
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent