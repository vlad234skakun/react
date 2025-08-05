import styles from './UserProfile.module.css'

import ProfilList from '../ProfilList/ProfilList'

import { useState, useEffect } from 'react'
import axios from 'axios'

const UserProfile = ()=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    useEffect(()=>{
        fetchUser()
    }, [])

    const fetchUser = async ()=>{
        try {
            setLoading(true)
            const response = await axios.get("https://randomuser.me/api")
            setUser(response.data.results[0])
            setLoading(true)
        } catch (error) {
            setErrors(error.message)
            setLoading(true)
        }
    }

    const changeUser = ()=>{
        fetchUser()
    }


    return (     
        <div  className={styles.message} >
            <div>{errors && <p>Ошибка:</p> }</div>
            <div>{loading && <p>Loading...</p>}</div>
            <div>{errors || loading || !user || <ProfilList changeUser={changeUser} user={user} />}</div>
        </div>
    )
}

export default UserProfile