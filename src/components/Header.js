import { Link } from 'react-router-dom';

import React from "react";

const Header = () => {
    return (
        <div className="ui fixed menu" style={{height: "55px"}}>
            <div className="ui container center">
                <h1><Link exact to="/">Redux-Ecom</Link></h1>
            </div>
        </div>
    )
}

export  default Header;