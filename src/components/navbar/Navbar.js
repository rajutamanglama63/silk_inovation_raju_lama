import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                    <div className="navbar_left">
                        <h2 className="dashboard">Dashboard</h2>
                    </div>
                    <div className="navbar_center">
                        <h2 className="logo">Sajilo pay</h2>
                    </div>
                    <div className="navbar_right">
                        <div className="authorized_info">
                            <div className="balance">
                                <span style={{fontWeight : "400", fontSize : "small"}}>Avialiable balance</span>
                                <span style={{fontWeight : "400", fontSize : "small"}}>Rs.5000</span>
                            </div>
                            <p style={{fontWeight : "400", fontSize : "small", margin : "0 15px"}}>Raju Lama</p>
                        </div>
                        <img className="user_pic" src="https://images.pexels.com/photos/10601299/pexels-photo-10601299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="userPic" />
                    </div>
            </div>
        </div>
    )
}

export default Navbar
