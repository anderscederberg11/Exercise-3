import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { useState, useEffect } from "react"




export default function exampleFive() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [count])

    

    return(
        <>
        <Header/>
            <div>
                <h1>Number Counter</h1>
                <h3>Example using Interval</h3>
                <div>{count}</div>
            </div>

        
        </>
    
    )
}
//Chapter 5. no vs code. pencil and paper. chapter 5 (all) chapter 9 (all) chapter 10 (all) chapter 11 (all)