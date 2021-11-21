import React from 'react';
import "./Landing.scss";
import { LandingOptions } from '../../../utils/seed';

const Landing = () => {

    return (
        <main>
        
            {/* TODO: Style the divs, Routing transitions */}

            <section className="landing-section">
                
                {LandingOptions.map(landingImage => {
                    return (
                        <div id={landingImage.id} key={landingImage.id} className="landing-CardBox">
                            <a href={landingImage.path} >
                            <div className="landing-imgWrapper">
                                <img src={landingImage.img} alt="" />
                            </div>
                    
                            {/* <div className="landing-detailsBox">  */}
                                <div className="landing-contentBox">
                                    <p className="landing-cardText">{landingImage.title}</p>        
                                </div>

                            {/* </div> */}

                            </a>
            
                        </div>
                    )
                })}

            </section>

           


        </main>
    );
};

export default Landing;