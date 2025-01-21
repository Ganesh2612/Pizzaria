import React from 'react';
import Img1 from './Img1.png';
import Img2 from './Img2.png';
import Img3 from './Img3.png';
 
 
function Home(props) {
    return (
        <div style={{paddingLeft:"75px",paddingRight:"75px"}}>
          <h1>Our Story</h1>
          <p style={{textAlign:"left"}}>We believe in good. We launched Fresh Pan
           Pizza Best Excuse Awards on our Facebook fan page. Fans were given 
           situations where they had to come up with wacky and fun excuses.
            The person with the best excuse won the Best Excuse Badge and 
            won Pizzeria's vouchers. Their enthusiastic response proved that 
            Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!</p>

          <p style={{textAlign:"left"}}>Ever since we launched the Tastiest Pan 
          Pizza, ever, people have not been able to resist the softest, cheesiest,
           crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving
            the stage in the middle of a performance and even finding excuses to
             be disqualified in a football match.</p>

          <p style={{textAlign:"left"}}>We launched Fresh Pan Pizza Best Excuse
           Awards on our Facebook fan page. Fans were given situations where they 
           had to come up with wacky and fun excuses. The person with the best excuse
            won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic
             response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza,
              Ever!</p>
          <img src={Img1} style={{marginRight:"55px",float:"left"}}alt='home1' /> <br/><br/>
          <h4 style={{float:"left"}}>Ingredients</h4><br/><br/>

          <p style={{textAlign:"left"}} >We're ruthless about goodness.
           We have no qualms about tearing up a day-old lettuce leaf
            (straight from the farm), or steaming a baby (carrot). Cut. Cut. 
            Chop. Chop. Steam. Steam. Stir Stir. While they're still young and
             fresh - that's our motto. It makes the kitchen a better
              place</p><br/><br/><br/><br/>
          <img src={Img2} style={{marginLeft:"55px",float:"right",height:"250px",width:"300px"}} alt='home2' /><br/>
          <h4 style={{float:"left"}}>Our Chefs</h4><br/><br/>

          <p style={{textAlign:"left"}}>They make sauces sing and salads dance.
           They create magic with ski knowledge, passion, and stirring spoons 
           (among other things). They make goodness so good, it doesn't know what
            to do with itself. We do though. We send it to you.</p><br/><br/><br/>

          <img src={Img3} style={{marginRight:"55px",float:"left"}} alt='home3' /><br/><br/>
          <p style={{textAlign:"left", fontSize:"20px"}}>45 Minutes Delivery</p>
          </div> 
    );
}
 
export default Home;