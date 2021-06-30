import Post from "../posts/Post";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import {useState} from "react";


export default function User({item}){
    let [toggle, setToggle] =useState(false)
    const onToggle = () =>setToggle(!toggle)
    let [toggle2, setToggle2] =useState(false)
    const onToggle2 = () =>setToggle2(!toggle2)
    let [toggle3, setToggle3] =useState(false)
    const onToggle3 = () =>setToggle3(!toggle3)


const Openinfo = ({email}) =>{
        return(<div>
            {email}
        </div>)
}

return(
<div>
    {item.id} --- {item.name}
    <button onClick={onToggle}>
        open
    </button>
    {
        toggle&&<div>
            <Openinfo email={item.email}/>
            <button onClick={onToggle2}>open</button>
            {
                toggle2 && <div>
                    <Posts id={item.id}/>
                    <button onClick={onToggle3}>open</button>
                    {
                        toggle3 && <div>
                            <Comments id={item.id}/>

                        </div>
                    }
                </div>
            }
        </div>





    }
</div>

)}