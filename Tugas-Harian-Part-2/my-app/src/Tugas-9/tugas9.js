import logo from './../logo.png';
import './css/style.css' ;
import Add from './../props';

const Ap = () => {
    return (
      <div className="App">
        <img src={logo} alt="logo"></img>
        <p className="one">THINGS TO DO</p>
        <p className="two">During Bootcamp in Jabarcodingcamp</p>
        <hr className="garis"></hr>
        <Add label="Git & CLI" type="checkbox"></Add>
        <hr className="garis2"/>
        <Add label="HTML & CSS" type="checkbox"></Add>
        <hr className="garis2"/>
        <Add label="Javascript" type="checkbox"></Add>
        <hr className="garis2"/>
        <Add label="ReactJS Dasar" type="checkbox"></Add> 
        <hr className="garis2"/>
        <Add label="ReactJS Advance" type="checkbox"></Add>
        <hr className="garis2"/>
        <Add label="Send" type="Send"></Add>
      </div>
    );
  }
  export default Ap;
