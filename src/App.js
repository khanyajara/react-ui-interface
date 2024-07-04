import './App.css';
import Nav from './components/navigation.js'
import Collections from './components/collections'; 
import './css/navigation.css'
import './css/collections.css'


function App() {
  return (
    <div className="App">

       <div>
       <Nav/>
       <Collections/>
       </div>
      
    </div>
  );
}

export default App;
