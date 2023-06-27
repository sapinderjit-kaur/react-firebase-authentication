import React from "react";

const Hero=({handleLogout})=>
{
    return(
    
    <section className="hero">
        <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        <body>
            <center><h1>Welcome to the Home Page</h1></center>
        </body>
    </section>
    )
};

export default Hero;