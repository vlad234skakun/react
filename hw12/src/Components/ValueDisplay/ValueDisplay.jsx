import { useEffect, useRef } from "react";


const ValueDisplay = ({value}) => {

    const prevValueRef = useRef("");

    useEffect(() => {
        prevValueRef.current = value;
    })


    return (
        <>
        <p>Current Value: {value}</p>
        <p>Previous Value: {prevValueRef.current}</p>
        </>
    )
}
export default ValueDisplay;