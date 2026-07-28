import { useState, useEffect, useRef } from 'react';

export const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const currentRef = useRef(null);

    useEffect(() => {
        const element = currentRef.current
        if (!element) return;
    
        const handleEnter = () => {
  setIsHovered(true);
}

const handleLeave = () => {
  setIsHovered(false)
}

       element.addEventListener("mouseenter", handleEnter)
       element.addEventListener("mouseleave", handleLeave)

        return () => {
            element.removeEventListener("mouseenter", handleEnter)
            element.removeEventListener("mouseleave", handleLeave)
        }
    }, [])

    return [currentRef, isHovered];
}