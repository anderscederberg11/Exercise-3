import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState , useEffect } from "react"

export default function exampleFour() {

    const [number, setNumber] = useState(0);
    // number is a variable used on the left to grab value from useState 
    //setNumber is used on the right to update the useState
    const [color, setColor] = useState("gray"); //defaults as string of gray

    const [trigger, setTrigger] = useState(false); //defaults as boolean false

    const HandleChange = (() => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    })

    useEffect(() => {
    var interval;

    if(trigger) {
        interval = setInterval(() => {
            HandleChange();
            setTrigger(false);
        }, 3000)
    }
    
    console.log(number)
    console.log(trigger)

    return () => clearInterval(interval);
}, [trigger])
    return(
        <>
            <main>
                <button onClick={() => {
                    setNumber(number + 1)
                    setTrigger(true)
                }}>Add Number</button>
                <h1 style={{color: color}}>Changing the text color</h1>

                {
                    number > 1 && <div style={{
                        backgroundColor: `${color}`,
                        lineHeight: 10,
                        padding: 20
                    }}>
                        Box
                    </div>
                }

            </main>
            <Footer/>
        
        </>
    )
}