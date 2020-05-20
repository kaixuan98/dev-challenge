import React from 'react';
import './App.scss';
import StaffForm from './components/StaffForm.js';
import { BrowserRouter as Router , Route} from 'react-router-dom'; 
import Report from './components/report';


class App extends React.Component {
  
render(){
  return (
      <Router>
        <div className="App">
          <Route path='/sales/form'>
            <StaffForm />
          </Route>
          <Route path='/sales/report'>
            <Report />
          </Route>
        
        </div>
      </Router>
     
    
   
  );
}
}

export default App;
