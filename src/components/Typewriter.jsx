import React , {useState,useEffect} from "react";
export const TypeWriter = ({text,delay,className})=>{
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        if(currentIndex<text.length){
            const timeOut = setTimeout(()=>{
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex((index)=>{
                     return index+1
                })
            },delay)
            return ()=>clearTimeout(timeOut)
        }
    },[currentIndex,delay,text])

    return <div className={`text-white text-2xl md:text-3xl font-mono ${className}`}>
        {currentText}
        <span className="animate-blink">|</span>
    </div>
}