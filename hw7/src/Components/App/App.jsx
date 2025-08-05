
import './App.css'
import Text from '../Text/Text'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import LanguageProvide from '../../LanguageContext/LanguageContext'

import './App.css'

function App() {

  return (
    <>
      <div className="container" >
        <LanguageProvide>
          <Text/>
          <LanguageSwitcher/>
        </LanguageProvide>
      </div>

    </>
  )
}

export default App
