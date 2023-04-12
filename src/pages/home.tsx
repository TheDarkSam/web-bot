import { useEffect, useState } from 'react'
import Img from '../../public/img.jpg'
import { CardComment } from '../components/CardComment'
import { api } from '../service/api'

interface messageProps {
    message_id: number;
    from: {
        id: number;
        is_bot: boolean;
        first_name: string;
        username: string;
        language_code: string;
    };
    chat: {
        id: number;
        first_name: string;
        username: string;
        type: string;
    };
    date: number;
    text: string;
    entities?: Array<{
        offset: number;
        length: number;
        type: string;
    }>;
}

interface Update {
    update_id: number;
    message: messageProps;
}

interface TelegramResponse {
    ok: boolean;
    result: Update[];
}

export const Home = () => {

    const [message, setMessage] = useState<TelegramResponse>({
        ok: false,
        result: [],
    })
    const fetchMessage = async () => {
        const response = await api.get('getUpdates')
        setMessage(response.data)

    }

    useEffect(() => {
        fetchMessage()
    }, [])
    
    console.log(message);

    return (
        <main className="flex flex-col items-center justify-center max-w-[1000px] w-full mx-auto mt-10 px-5 gap-36">
        <section>
            <img className='rounded-full w-64 border-purple-400 border-8' src={Img} alt="" />
        </section>
        <section className='flex flex-col items-center justify-center gap-2 my-5 w-full' >
            {message.result.map(item => (
                <CardComment 
                  key={item.message.message_id} 
                  text={item.message.text}
                  username={item.message.chat.username}  
                />

            ))}    
        </section>

    </main>
)
}