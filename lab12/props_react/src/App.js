// imported files
import './App.css';
import User from "./comments"
import "./index.css"
import User_feedback from "./feedback"

// import images
import man3d from "./images/3dfaceman.png"
import drawman from "./images/blackandwhiteman.png"
import manhp from "./images/manheadphones.png"

function App() {
  return (
   <>
      <h1>User Comments</h1>
      <main className="maincontainer">
        <User_feedback><User image={man3d} username="Mr. Man" date="04/08/25" usercomment="Great Job!"/></User_feedback>
        <User_feedback><User image={drawman} username="Mr. Drawing" date="04/08/25" usercomment="Great Job!"/></User_feedback>
        <User_feedback><User image={manhp} username="Mr. Heaphone" date="04/08/25" usercomment="Great Job!"/></User_feedback>
      </main>
      
      


   </>
  );
}

export default App;
