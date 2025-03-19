import profilePic from "./assets/download.jpeg"

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I am groot. I am groot. I am groot</p>
        </div>
    );
}

export default Card