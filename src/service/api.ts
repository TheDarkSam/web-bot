import axios from 'axios'

const apiSecret = import.meta.env.VITE_BOT_TELEGRAM_TOKEN;
console.log(apiSecret)
export const api =  axios.create({ 
    baseURL: `https://api.telegram.org/bot${apiSecret}/`
})