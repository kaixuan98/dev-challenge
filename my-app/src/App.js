import React from 'react';
import './App.scss';
import StaffForm from './components/StaffForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {


 
render(){
  return (
    <div className="App">
      <StaffForm />
    </div>
  );
}
}

export default App;
