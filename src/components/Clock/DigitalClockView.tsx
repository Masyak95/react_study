import React from "react";
import { DigitalType } from "./Clock";

export const DigitalClockView: React.FC<DigitalType> = ({date}) => {
    return <><span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </>
}