import react from "react";
import "./index.css";
import Modelwindow from './modelwindow';

const User_feedback = function(props){
    // function to open model window
    const openmodelwindow = function(){
        const modelwindow = document.querySelector(".modelwindow")
        modelwindow.style.display = "block";
    }
    return(
        <>
            <main className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openmodelwindow}><span>&#10011;</span>Add feedback</p>
                    </div>
                </section>
            </main>


            {/* Model window */}
            <Modelwindow/>
        </>
    )
}

export default User_feedback