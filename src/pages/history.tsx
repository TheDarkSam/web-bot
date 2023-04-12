import { useState } from "react"
import { api } from "../service/api"

export const History = () => {
    const [message, setMessage] = useState<any>()

    async function apiparams() {
        const response = await api.get("getUpdates")
        const result = response.data
        console.log(result)
        setMessage(result)
    }
    //apiparams() 
    return (
        
    <div>
        <h1>History</h1>
        <a href="/time">time</a>
        <p>{message?.result.map(item=>(
            <p>{item.message.text}</p>
        ))}</p>
    </div>
)
}