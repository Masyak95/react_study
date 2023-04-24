import React, {useEffect, useState} from "react";


type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(intervalID)
        }

    }, [])

    const get2digitsString = (num: number ) => num < 10
        ? "0" + num
        : num

    const secondsString = get2digitsString(date.getSeconds() )


    const minutesString = get2digitsString(date.getMinutes())


    const hoursString = get2digitsString(date.getHours())


    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>

}