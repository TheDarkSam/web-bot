export const Time = () => {
    const data = new Date();
    const dynamicDateString = data.toString();

    return (
    <div>
        <div>Time</div>
        <div>{dynamicDateString} (Dinamico)</div>    
    </div>
)
}