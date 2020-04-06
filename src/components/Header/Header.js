import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Header.scss';

class Header extends Component {
    render() {
        const {onServiceChange} = this.props;

        return (
            <div className="header d-flex">
                <h3>
                    <Link to="/">
                        StarDB
                    </Link>
                </h3>
                <div className="justify-elements">
                    <ul className="d-flex">
                        <li>
                            <Link to="/people/">People</Link>
                        </li>
                        <li>
                            <Link to="/planets/">Planets</Link>
                        </li>
                        <li>
                            <Link to="/starships/">Starships</Link>
                        </li>

                    </ul>
                    <button className="btn btn-primary btn-sm" onClick={onServiceChange}> Change service</button>
                    <ul className="d-flex">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/secret">Secret</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;