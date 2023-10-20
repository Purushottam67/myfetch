import React from "react";
import Logo from "./Logo";
const Header = ()=>{
    return(
<div className="main"> 

<Logo/>
<div className="nav">
    <ul>
        <li>Home</li>
        <li>about</li>
        <li>cart</li>
        
    </ul>
</div>


</div>
    )
}
export default Header