
import { useState } from "react";
import styles from "./DynamicForm.module.css"
import { useForm } from "react-hook-form";

const DynamicForm = ()=>{

    const {register , handleSubmit, reset , watch,  formState: { errors } } = useForm()
    const [date , setdate] = useState(null)
    
    const onSubmit = event => {
        console.log("Данные тут", event);
        setdate(event)
        reset()
        
    }

    console.log(date);
    

    const isNameFill = watch("firstField", "")

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.inputBlock} >
                <label htmlFor="">First Field</label>
                <input 
                 {...register("firstField", {required: "Ошибка"})} 
                 type="text" />
                 {errors.firstField && <p className={styles.error}>{errors.firstField.message}</p> }
            </div>
            <div className={styles.inputBlock} >
            {isNameFill.length >= 3 && (<><label htmlFor="">Second Field</label>
                <input
                //  value={firstValue} 
                 {...register("secondField", {required: "Ошибка"})} 
                 type="text" />
                 </>)}
                
            </div>
            <button>Submit</button>
        </form>


        <div>
            <p>{date && date.firstField}</p>
            <p>{date && date.secondField}</p>
        </div>
        </>
    )
}
export default DynamicForm;