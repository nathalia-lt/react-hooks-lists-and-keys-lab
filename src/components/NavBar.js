import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
   { links.map(link  =>
    <a key={link} href={`#${link}`}>{link}</a> 
    //# because I need # 
    )}
  </nav>);
}

export default NavBar;
