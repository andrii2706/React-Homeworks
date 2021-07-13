import {Link, Router, Switch, Route} from "react-router-dom";

export default function Header() {
    return (

        <div className="wrap-header">
            <div className="logo-header width25"><img src="../logo/завантаження.png" alt="logo"/></div>
            <div className="navigation width25">
                <Router>
                    <Link><a>Home </a></Link>
                    <Link><a>Serias </a></Link>
                    <Link><a>Movies </a></Link>
                    <Link><a>Kids </a></Link>
                    </Router>
            </div>
            <div className="flex width25">
                <div>
                    <button className="btn"><i className="fas fa-search white"></i></button>
                </div>
                <div className="bell">
                    <button className="btn"><i className="far fa-bell white"></i></button>
                </div>
            </div>

            <div className=" block width25 center">
                <div className="user flex ">
                    <button>Chose your user</button>
                    <h2>Users name </h2>
                    <button className="btn white width "><i className="fas fa-angle-down"></i></button>
                </div>
                <div className="users-info">
                    <ul>
                        <li>Film news</li>
                        <li>Your favourite series</li>
                        <li>Your favourite films</li>
                        <li>About us</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route/>
            </Switch>
        </div>

    )
}