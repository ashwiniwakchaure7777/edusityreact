import "./Campus.css";

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src="/images/campus1.png"></img>
            <img src="/images/campus2.png"></img>
            <img src="/images/campus3.png"></img>
            <img src="/images/campus4.png"></img>
        </div>
        <button className="btn dark-btn">See more here<img src="/images/right_ar.png" alt=""></img></button>
    </div>
  )
}

export default Campus;