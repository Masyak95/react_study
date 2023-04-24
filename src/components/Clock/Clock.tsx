import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }

    }, [])

    const get2digitsString = (num: number) => num < 10
        ? "0" + num
        : num

    const secondsString = get2digitsString(date.getSeconds())


    const minutesString = get2digitsString(date.getMinutes())


    const hoursString = get2digitsString(date.getHours())

    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>{view}</div>
    )
}

export type DigitalType = {
    date: Date
}

export type AnalogType = {

}


