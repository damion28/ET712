import react from "react";
import "./index.css"

const Modelwindow = function(){
    // function to close model window
    const closemodelwindow = function(){
        const Modelwindow = document.querySelector(".modelwindow")
        Modelwindow.style.display = "none"
    }
    return(
        <>
            {/* Model window */}
            <section className="modelwindow">
                <div className="modelcontent">
                    <header className="modelheader">
                        <p>Add feedback</p>
                        <p className="closemodel" onClick={closemodelwindow}>&#x58;</p>
                    </header>
                    <main className="modelbody">
                        <input className="commentarea" type="text" placeholder="Type your comments"/>
                        <p className="description_comment">Max 200 characters</p>
                        <button className="btnpostfeedback">Post feedback</button>
                    </main>
                </div>
            </section>
        </>
    )
    
}

export default Modelwindow