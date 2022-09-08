import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating";
import OnOff from "./components/OnOff/OnOf";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

//function declaration
function App() {

    return (
        <div className={"App"}>
          <OnOff />
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledRating />
        </div>
    );
}

function AppTitle() {
    return (
        <div>"This is App component"</div>
    )
}


export default App;
