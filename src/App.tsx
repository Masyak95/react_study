import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOf";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";

//function declaration
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className={"App"}>
          <OnOff />
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

function AppTitle() {
    return (
        <div>"This is App component"</div>
    )
}


export default App;
