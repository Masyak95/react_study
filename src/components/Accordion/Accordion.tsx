import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick: (value: any)=> void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    const [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <h3 onClick={ ()=>{props.onChange()}}>-- {props.title} --</h3>
    )
}


type AccordionBodyType = {
    items: ItemType[],
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map( (i, index) =>
            <li onClick={()=>{ props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}


