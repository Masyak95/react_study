import React, {useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(item => item.value === props.value)

    return (
        <div>
                <select>
                    <option value="">Minsk</option>
                    <option value="">Prague</option>
                    <option value="">Berlin</option>
                </select>
            <div className={s.select + " " + (active ? s.active : "")}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={s.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
            </div>
        </div>
    )
}


