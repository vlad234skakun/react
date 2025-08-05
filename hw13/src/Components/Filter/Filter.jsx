import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/action";

import styles from './Filter.module.css'


const Filter = () => {

    const filter = useSelector((store) => store.filter)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div className={styles.filterContainer}>
            <input 
                className={styles.inputBlock}
                value={filter}
                onChange={handleChange}
                type="text"
                placeholder="Search users..." />
        </div>
    )
}
export default Filter;