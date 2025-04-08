import './App.css';
import User from "./comments"
import "./index.css"
// import images
import man3d from "./images/3dfaceman.png"
import drawman from "./images/blackandwhiteman.png"
import manhp from "./images/manheadphones.png"

function App() {
  return (
   <>
      <h1>User Comments</h1>
      <main className="maincontainer">
        <User image={man3d} username="Mr. Man" date="04/08/25" usercomment="Great Job!"/>
        <User image={drawman} username="Mr. Drawing" date="04/08/25" usercomment="Great Job!"/>
        <User image={manhp} username="Mr. Heaphone" date="04/08/25" usercomment="Great Job!"/>
      </main>
      
    
   </>
  );
}

export default App;
