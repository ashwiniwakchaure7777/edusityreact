import { useRef } from "react";
import "./Testimonial.css"

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

function slideForward(){
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

function slideBackward(){
    if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
}



  return (
    <div className="testimonials">
        <img onCLick={slideForward} src="/images/next-icon.png" alt="" className="next-btn"></img>
        <img onClick={slideBackward} src="/images/back-icon.png" alt="" className="back-btn"></img>

        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user1.png" alt=""></img>
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations..</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user2.png" alt=""></img>
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user3.png" alt=""></img>
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="/images/user4.png" alt=""></img>
                            <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials;
