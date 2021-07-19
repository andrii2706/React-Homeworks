import React, {useState} from "react";
import './App.css'

function App () {
    // main array of objects state || books states || books arrat of objects
const [books, setBooks]=useState([]);


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



    return (
       <div>
           <div className={'wrapper'}>
               <h1>BookList App</h1>
               <p>Add and view your books using local storage</p></div>
       <div className={'main'}>

       </div>
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

               </div>
           </div>

       </div>

    );
};

export default App;