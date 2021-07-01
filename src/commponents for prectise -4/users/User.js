import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Posts from "../posts/Posts";
import {getPostOfUser} from "../api/API";
import {useState} from "react";

export default function User({item}) {


    return (
        <div>
            {item.id} - {item.name}

                <Link to={'/users/' + item.id + '/posts'}>your info</Link>

                <Switch>
                    <Route  path={'/users/' + item.id + '/posts'} render={(props => {
                        return <Posts id={item.id}/>
                    })}/>
                </Switch>

        </div>
    )
}