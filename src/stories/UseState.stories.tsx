import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useState demo"
}

function generateData(){
    //difficult counting
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example")

   // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData ) //[1, function(newValue){}]

    const changer = (state: number) => state + 1

    return<>
        <button onClick={()=> setCounter(changer)}>+</button>
        {counter}
    </>

}