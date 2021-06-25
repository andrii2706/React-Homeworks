
import Post2 from "./Post";
export default function Posts (props){
let {items,selectPost} =props
    // console.log(items)
    return(
        <div>
            {

                items.map(post => <Post2 key={post.id} item={post} selectPost={selectPost}/> )
            }
        </div>
    )
}