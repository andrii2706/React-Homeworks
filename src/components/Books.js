import React, {useEffect, useState} from "react";
import Api from "./api/Api";
import Views from "./Views";
export default function Pushing(){
    // main array of objects state || books states || books arrat of objects
    const [books, setBooks]=useState('');

    // getDatainformation()
    // input field states
    const[title, setTitle]  =useState('')
    const[author, setAuthor]  =useState('')
    const[category, setCategory]  =useState('')
    const[isbn, setISBN]  =useState('')

    // form submit event
    const handleAddBookSubmit = (e)=>{
        e.preventDefault()
        // creat object
        let book ={
            title,
            author,
            category,
            isbn
        }
        setBooks([...books,book])
        // console log for object value
        console.log([...books,book]);
        setTitle('')
        setCategory('')
        setISBN('')
        setAuthor('')
    }
    //respons
   const RetriveBooks = () =>{
        const response = Api.get("/posts")
       return response.data;
   };
    useEffect(()=>{
        const getAllBooks = async ()=>{
            const allBooks = await RetriveBooks();
            if (allBooks) setBooks(allBooks)
        };
        getAllBooks();
    },[])

    return(
<div>
    <div className="flex">
        <div className="form-container">
            <form autoComplete={'off'} className="form-group" onSubmit={handleAddBookSubmit}>
                <label>Book title</label>
                <input type="text" className="form-control" required
                       onChange={(e)=>setTitle(e.target.value)} value={title}
                />
                <br/>
                <label>Author name</label>
                <input type="text" className="form-control" required
                       onChange={(e)=> setAuthor(e.target.value)} value={author}
                />
                <br/>
                <label>Category</label>
                <input type="text" className='form-control' required
                       onChange={(e)=>setCategory(e.target.value)} value={category}
                />
                <br/>
                <label>ISBN</label>
                <input type="text" className='form-control' required
                       onChange={(e)=>setISBN(e.target.value)} value={isbn}
                />
                <br/>
                <button type={'submit'} className='btn btn-success btn-custom'>Add your book </button>
            </form>
        </div>
        <div className="view-container">
            {books.length>0 && <></>}
            { <div>
                <table>
                    <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Book Title</th>
                        <th>Author name</th>
                        <th>Category</th>
                        <th>Deleted</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map(books => <Views books={books}/> )
                    }
                    </tbody>
                </table>
            </div>
            }
            {books.length < 1 && <div>No books please write your book</div>}
        </div>
</div>
    </div>
)}













