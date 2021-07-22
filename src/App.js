import './App.css'
import Pushing from "./components/Books";
import './UI.css'

function App () {
    return (
       <div>
           <div className={'wrapper'}>
               <h1>BookList App</h1>
               <p>Add and view your favourite book</p></div>
       <div className={'main'}>
           <Pushing/>
       </div>
       </div>

    );
};

export default App;