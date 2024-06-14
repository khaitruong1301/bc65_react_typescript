import { RootState } from '../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setDataJsonStorage, setDataTextStorage } from '../util/utilMethod'
import { ACCESS_TOKEN, USER_LOGIN } from '../util/util'

type Props = {}

const HeaderHome = (props: Props) => {
    const {userLogin} = useSelector((state:RootState) => state.userReducer);

    const renderLogin = () => {
        if(userLogin){
            return <>
             <li className="nav-item">
                        <NavLink className="nav-link " to="/profile" aria-current="page">Hello {userLogin.email} </NavLink>
                    </li>
                    <li className="nav-item">
                       <button className='nav-link' onClick={()=>{
                        localStorage.removeItem(ACCESS_TOKEN);
                        localStorage.removeItem(USER_LOGIN);
                        window.location.reload();
                       }}>Logout</button>
                    </li>
            </>
        }else {
            return  <li className="nav-item">
            <NavLink className="nav-link " to="/login" aria-current="page">Login </NavLink>
        </li>
        }
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Shoes Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/home" aria-current="page">Home </NavLink>
                    </li>
                   {renderLogin()}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li> */}
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default HeaderHome