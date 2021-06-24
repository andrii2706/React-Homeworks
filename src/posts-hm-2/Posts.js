import Post from '../posts/Post'
export default function Posts (props){
let {items} =props
    console.log(items)
    return(
        <div>
            {
                items.map(post => <Post item= {post}/> )
            }
        </div>
    )
}