import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: "input"
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState("")
    const onchange = (event: ChangeEvent<HTMLInputElement>)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onchange}/> = {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)//когда компонента только отрисосываеться нет ссылки поэтому null
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return <><input ref={inputRef}/> <button onClick={save}>save</button> = actual value :{value}</>
}

//_______________________________________________________________________________________________

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}
    return <input value={parentValue} onChange={onChange}/>

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.checked)}
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    // const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.checked)}
    return <select value={parentValue}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Praha</option>
        <option value={"3"}>Berlin</option>
    </select>

}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator"}/>
