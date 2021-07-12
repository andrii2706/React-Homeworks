
import SelectSearch from 'react-select-search';
import {useState} from "react";
import {BrowserRouter, Router, Link, Route, Switch} from "react-router-dom";
export default function Header(){
    // const CustomSelector ({option,value, name, title}) =>{
    //     const [snapshot, valueProps, optionProps] = useState({
    //         option,value, name, title
    //     })
    // }





return(
<div>

        <div className="wrap-header">
            <div className="logo-header width25"><img src="../logo/завантаження.png" alt="logo"/></div>
            <div className="navigation width25">
                <a>Home todo link</a>
                <a>Serias todo link</a>
                <a>Movies todo link</a>
                <a>Kids todo link</a>
            </div>
            <div className="flex width25">
                <div><SelectSearch  className="select-search" placeholder="Name of film"/>
                </div>
                <div>
                    <button className="btn"><i className="fas fa-search white">todo style</i></button>
                </div>
                <div className="bell">
                    <button className="btn"><i className="far fa-bell"> todo style</i></button>
                </div>
            </div>
            <div className=" block width25">
                <div className="user"><h2>Users name todo btn</h2>
                </div>
                <div className="users-info">
                    <ul>
                        <li>Film news</li>
                        <br/>
                        <li>Your favourite series</li>
                        <br/>
                        <li>Your favourite films</li>
                        <br/>
                        <li>About us</li>
                        <br/>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
        </div>


</div>
)}