import { useState } from "react"
import { useForm } from "react-hook-form"

import { setUserInfo } from "../../redux/actions"
import { useDispatch } from "react-redux"

import styles from "./UserForm.module.css"


const UserForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [status, setStatus] = useState("")


    const onSubmit = values => {
        console.log(values);
        const action = setUserInfo(values)
        dispatch(action)
        setName(values.name)
        setStatus(values.status)
        reset()
    }
    console.log("name" , name);
    console.log("status" , status);

    

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)} >
            <input {...register("name", { required: "У заметки должно быть название" })} type="text" placeholder="name" />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            <input {...register("status", { required: "У заметки должен быть статус" })} type="text" placeholder="status" />
            {errors.status && <p className={styles.error}>{errors.status.message}</p>}
            <div><button type="submit">Add</button></div>
        </form>
    )
}
export default UserForm