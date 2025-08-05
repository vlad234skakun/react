import { useContext } from "react";
import styles from "./Text.module.css"

import { LanguageContext } from "../../LanguageContext/LanguageContext";

import textlanguage from "./Textcontainer";


const Text = () => {

    const { language } = useContext(LanguageContext)

    return (
        <>
            <div>
                <h1 className={styles.text} >{textlanguage[language]}</h1>
            </div>
        </>
    )
}
export default Text;