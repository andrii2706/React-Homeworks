import Post from "../posts/Post";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import {useState} from "react";
import {getUsersOf} from "../api/API";



export default function User({item}) {
    // let [toggle, setToggle] =useState(false)
    // const onToggle = () =>setToggle(!toggle)
    // let [toggle2, setToggle2] =useState(false)
    // const onToggle2 = () =>setToggle2(!toggle2)
    // let [toggle3, setToggle3] =useState(false)

    let [postOfUser, setPostOfUser] = useState([])

function click(){
    return getUsersOf(item.id).then(value => setPostOfUser(value.data))
}

// const Openinfo = ({email}) =>{
//         return(<div>
//             {email}
//         </div>)
// }
    }

    return (
        <div>
            {item.id} --- {item.name}
            <button onClick={click}>
                open
            </button>

            <Posts postOfUser={postOfUser}/>

            {/*{*/}
            {/*    toggle&&<div>*/}
            {/*        <Openinfo email={item.email}/>*/}
            {/*        <button onClick={onToggle2}>open dedaol user</button>*/}
            {/*        {*/}
            {/*            toggle2 && <div>*/}
            {/*                <Posts postOfUser={postOfUser} />*/}
            {/*                <button onClick={onToggle3}>open posts of user</button>*/}
            {/*                {*/}
            {/*                    toggle3 && <div>*/}
            {/*                        <Comments id={item.id}/>*/}

            {/*                    </div>*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*    </div>*/}


            }
        </div>

    )
}