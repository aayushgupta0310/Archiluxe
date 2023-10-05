import FooterCustom from "../Footer";
import HeaderCustom from "../Header";
import React from "react";

const MainContainer = ({children}) => {
    return(
        <div className="bg-[#FFFAF3]">
           <HeaderCustom/>
           <div>
                {children}
           </div>
           <FooterCustom/>
        </div>
    )
}

export default MainContainer;