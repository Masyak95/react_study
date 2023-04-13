import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: "Accordion",
    component: Accordion
}

const callBack = action("acordion mode change event fired")
const onClickcallBack = action("some item was clicked")

export const MenuCollabsedMode = () =>
    <Accordion titleValue={"Menu"}
               collapsed={true}
               onChange={callBack}
               items={[]}
               onClick={onClickcallBack}
    />
export const UsersUnCollabsedMode = () =>
    <Accordion titleValue={"Users"}
               collapsed={false}
               onChange={callBack}
               items={[{title: "Maryia", value: 1},
                   {title:"Artak", value: 2},
                   {title:"Ruben", value: 3},
                   {title:"Albert", value: 4}]}
               onClick={onClickcallBack}
    />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={()=>setValue(!value)}
                      items={[{title: "Maryia", value: 1},
                          {title:"Artak", value: 2},
                          {title:"Ruben", value: 3},
                          {title:"Albert", value: 4}]}
                      onClick={(value)=>{alert(`users with this id ${value} should be happy`)}}
    />
}
