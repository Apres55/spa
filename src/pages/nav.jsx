import {
    NavLink } from  "react-router-dom"
const NavComponent = () => {
    return (
    <nav>
        <NavLink to='/home' activeClassName={'selected'}>Home</NavLink>
        <NavLink to='/post' activeClassName={'selected'}>Post</NavLink>
        <NavLink to='/contacts' activeClassName={'selected'}>Contacts</NavLink>
        <NavLink to='/insta' activeClassName={'selected'}>IG</NavLink>
    </nav>
    )
}

export default NavComponent