import React, {useState} from "react";
import {Select} from "./Select";



export default {
    title: "Select",
    component: Select

}

export const WithValue = () =>{

    const [value, setValue] = useState("2")

    return (
        <div>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Prague"},
                    {value: "3", title: "Berlin"},
                ]}
            />
        </div>
    )
}


export const WithoutValue = () =>{

    const [value, setValue] = useState(null)

    return(

            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Prague"},
                    {value: "3", title: "Berlin"},
                ]}
            />


    )
}






