import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const SomeNestedChildComponennt =()=>{
    const counter = useSelector(({counterValue})=> counterValue);
    const posts = useSelector((state)=> state.posts);
return(
    <header>
        <h1>{counter}</h1>
        {posts.map(post=>(
            <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
            )
        )}
    </header>
)
}

const SomeChildComponent =()=> {
    return(
        <SomeChildComponent/>
    )
}




function App() {
    const dispatch =useDispatch();
    const fetchPosts =async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()

        dispatch({
            type:'SET POSTS',
            payload: data,
        })
    }

useEffect(()=>{
    fetchPosts()
},[])

  return (
      <div>
          <button onClick={()=>{
          dispatch({type: 'INC', payload:123})
          }}>

          </button>
            <SomeChildComponent/>
      </div>
  )


}



export default App;
