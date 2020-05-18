import React from 'react';
import './App.scss';
import StaffForm from './components/StaffForm.js';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'; 


class App extends React.Component {
  
render(){
  return (
      <Router>
        <div className="App">
          <Route path='/sales/form'>
            <StaffForm />
          </Route>
          <Route path='/sales/report'>
           
          </Route>
        
        </div>
      </Router>
     
    
   
  );
}
}

export default App;
