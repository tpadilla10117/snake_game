import React, { useState } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Developer, AboutMe, Landing, Ux, Contact, Resume, Navbar, Header} from './utils';
import './App.css';

function App() {


/* State for Modals: */
  const [modalVisibility, setModalVisibility] = useState(false);

  const [activeProject, setActiveProject] = useState(null);



  return (
    <div className="app-container">

      <CSSTransition 
      timeout={300}>
        <Header/>
      </CSSTransition>


      <div className="route-container">

        {/* TODO: Need to make Navbar vertical */}
        {/* <Navbar /> */}

        {/* TODO: Landing Section */}
          <Route exact path='/'>
            <CSSTransition>
              <Landing />
            </CSSTransition>
          </Route>

          {/* TODO: About Section */}
          <Route exact path='/about'>
            <AboutMe />
          </Route>

        {/* TODO: Developer Section - styling */}
          <Route exact path="/developer">
          
            <Developer 
              modalVisibility={modalVisibility}
              setModalVisibility={setModalVisibility}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />

          </Route>


        {/* TODO: UX Design Section */}
          <Route exact path='/ux'>
            <Ux />
          </Route>

        {/* TODO: Contact Section */}
          <Route exact path='/contact'>
            <Contact />
          </Route>


        {/* TODO: Resume Section */}
         <Route exact path='/resume'>
            <Resume />
          </Route>

      </div>



    </div>
  );
}

export default App;
