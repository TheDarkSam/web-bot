
interface CardProps {
    text: string
    username: string
}

export const CardComment = ({ text, username }: CardProps) => {
    return (
        <div  className="bg-gray-400 flex flex-col items-start justify-center text-purple-200 w-full p-5 rounded gap-2">
             <span className="font-semibold text-purple-300">{username}</span>
             <p>{text}</p>   
        </div>
)
}