import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {store} from "./redux";
import {addTodos, del_Todo, pushTodo, serLoadingTrue, setLoadingFalse} from "./redux/createActions/acrionCreators";
import {Fragment} from "react";

// const CreateTodoForm = ({onSubmit}) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!title || !description || isLoading) return;
//         try {
//             setIsLoading(true)
//             await onSubmit(title, description);
//             setTitle('');
//             setDescription('');
//         } catch (e) {
//             console.log(e)
//         } finally {
//             setIsLoading(false)
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
//                    placeholder="todo title"/>
//             <br/>
//             <br/>
//             <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
//                    placeholder="todo description"/>
//             <br/>
//             <br/>
//             <button type="submit" disabled={!title|| !description || isLoading}>
//                 creat block
//             </button>
//         </form>
//     )
// }
// const Todos =({todos, isLoading})=>{
//     if (isLoading) return <img src="logo.svg" alt="logo"/>
//
//     return (
//         <div>
//             {todos.map(todo => (
//                 <Fragment key={todo.id}>
//                     <div>{todo.title}</div>
//                     <div>{todo.description}</div>
//                     <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
//                     <div>Status {todo.completed.toString()}</div>
//                     <hr/>
//                 </Fragment>
//             ))}
//         </div>
//     )
// }
//
//
// function App() {
//     const {todos, todosLoading} = useSelector(store => store.todosReducer);
//     const dispatch = useDispatch();
//
//     const fetchTodos = async () => {
//         try {
//             dispatch(serLoadingTrue())
//             const resp = await fetch('http://localhost:8888/get-todos');
//             const data = await resp.json();
//             dispatch(addTodos(data))
//         } catch (e) {
//             console.log(e)
//         } finally {
//             dispatch(setLoadingFalse())
//         }
//     }
//     useEffect(() => {
//         fetchTodos();
//     }, [])
//     const onTodoCreate = async (title, description) => {
//         if (!title || !description) return;
//
//         console.log(JSON.stringify({title, description}))
//
//         const resp = await fetch('http://localhost:8888/create-todo', {
//             method: 'POST',
//             body: JSON.stringify({title, description}),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const data = await resp.json();
//
//         dispatch(pushTodo(data))
//     }
//
//     return (
//         <div className="App">
//             <CreateTodoForm onSubmit={onTodoCreate}/>
//             <Todos todos={todos} isLoading={todosLoading}/>
//         </div>
//     )
//
// }
//
//
// export default App;




const CreateTodoForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description || isLoading) return;

        try {
            setIsLoading(true)
            await onSubmit(title, description);
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)} placeholder="todo title" />
            <br/>
            <br/>
            <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)} placeholder="todo description" />
            <br/>
            <br/>
            <button type="submit" disabled={!title || !description || isLoading}>create to do</button>
        </form>
    )
}

const Todos = ({todos, isLoading, deleteTodo}) => {
    if(isLoading) return <h1>LOADING...</h1>

    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button type="deleted" onClick={() => deleteTodo(todo.id)}>asd</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

function App() {
    const { todos, todosLoading } = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        try {
            dispatch(serLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();

            dispatch(addTodos(data))
        } catch(e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())
        }
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    const onTodoCreate = async (title, description) => {
        if(!title || !description) return;

        console.log(JSON.stringify({title, description}))

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();

        dispatch(pushTodo(data))
    }
    const deleteTodo = async (id) => {
        console.log(id);
        await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE',
        })

        // const data = await del.json();

        dispatch(del_Todo(id))

    }

    return (
        <div className="App">
            <div className="App-header">
                <CreateTodoForm onSubmit={onTodoCreate}/>
                <Todos todos={todos} isLoading={todosLoading} deleteTodo={deleteTodo}/></div>
        </div>
    );
}

export default App;