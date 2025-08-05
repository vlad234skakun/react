import { useContext, } from "react";
import styles from "./LanguageSwitcher.module.css"
import { LanguageContext } from "../../LanguageContext/LanguageContext";



const LanguageSwitcher = () => {

    const { language, toggleLanguage } = useContext(LanguageContext)


    return (
        <>
            <div className={styles.block} >
                <button className={styles.btn} onClick={toggleLanguage}> {language === "ru" ? "Поменять язык" : "Switch language"}</button>
            </div>
        </>
    )
}
export default LanguageSwitcher;