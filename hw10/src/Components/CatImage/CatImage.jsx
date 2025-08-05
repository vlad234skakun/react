import { useEffect, useState } from "react";

import { getImage } from "../../api/image";

import styles from "./CatImage.module.css"



const CatImage = ()=>{

    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imgUrl , setImgUrl] = useState("")

    const fetchCatImage = async ()=>{
        try {
            setLoading(true)
            const data = await getImage()
            setImgUrl(data[0].url)
            
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCatImage()
        
    }, [])

    console.log("Загрузка",  loading);
    console.log("Ошибка",  error);
    console.log("Картинка",  imgUrl);
    

    return (
        <>
        <div className={styles.block} >
            <h1>Random Cat Image</h1>
            <div className={styles.CardBlock} >
            {loading && <p>Loading...</p>}
            {error && <p>Ошибка: {error}</p>}
            
                {!loading && imgUrl && <img src={imgUrl} alt="Random Cat Image" />}    
            </div>
            <button onClick={fetchCatImage} >Load New Image</button>
        </div>
        </>
    )
}

export default CatImage;