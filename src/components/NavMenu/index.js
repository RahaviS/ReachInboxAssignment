import './index.css'

const NavMenu =(props)=>{
    const {navDetails,setMenu,activeMenu}=props
    const {icon,id}=navDetails
    const handleClick=()=>{
        setMenu(id)
    }
    const className=activeMenu?'nav-menu-item active':'nav-menu-item'
    return(
        <li className={className} onClick={handleClick}><button className='nav-btn' type="button">{icon}</button></li>
    )
}
export default NavMenu