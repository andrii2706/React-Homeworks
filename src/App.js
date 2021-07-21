import './App.css'
import Pushing from "./components/Books";


function App () {
    return (
       <div>
           <div className={'wrapper'}>
               <h1>BookList App</h1>
               <p>Add and view your books using local storage</p></div>
       <div className={'main'}>
           <Pushing/>
       </div>
       </div>

    );
};

export default App;