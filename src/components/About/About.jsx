import "./About.css";

const About = ({setPlayState}) => {

 
  return (
    <div className="about">
        <div className="about-left">
            <img src='/images/about.png' alt='' className='about-img'></img>
            <img src='/images/playbtn.png' alt='playbtn' onClick={()=>{setPlayState(true)}} className='play-icon'></img>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro itaque nemo voluptate non vero! Iste doloribus placeat eligendi consectetur amet in excepturi unde facilis laboriosam eum accusamus, vero beatae? Cum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero repudiandae eos vero quam molestias, fugiat in ad debitis quod.</p>
            
           
            </div>
        </div>
    </div>
  )
}

export default About;