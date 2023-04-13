import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: "Select",
    component: Select

}

export const WithValue = () =>
    <div>
        <Select
            onChange={action("value changed")}
            value={"2"}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Prague"},
                {value: "3", title: "Berlin"},
            ]}
        />
    </div>

export const WithoutValue = () =>
    <div>
        <Select
            onChange={action("value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Prague"},
                {value: "3", title: "Berlin"},
            ]}
        />
    </div>






