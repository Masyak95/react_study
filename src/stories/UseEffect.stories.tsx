import React, {useEffect, useState} from "react"

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("Simple example")

    useEffect(() => {
        debugger
        console.log("useEffect every render  ")
        document.title = counter.toString()
        //api.getUsers().then(")
        //setInterval
        //indexedDB
        //document.getElementID
        //document.title = "User
    })

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount) ")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change ")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>

}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeOutExample")

    useEffect(() => {

        setTimeout(() => {
            debugger
            document.title = counter.toString()
        }, 1000)

    }, [counter])

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    })


    return <>
        Hello,counter: {counter}, fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}
    </>

}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        console.log("Effect occurred")

        return () => {
            console.log("reset effect" + counter)
        }
    }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>

}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("component rendered" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.document.addEventListener("keypress", handler)
        return () => {
            window.document.removeEventListener("keypress", handler)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>

}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    console.log("component rendered" + text)

    // useEffect(() => {
    //
    //     const timeoutID = (setTimeout(()=>{
    //         setText("three seconds past")
    //     },3000)
    //     rurn () => {
    //
    //     }
    //
    // }, [text])

    return <>
        Typed text: {text}
    </>

}































