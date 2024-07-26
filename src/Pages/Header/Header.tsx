import DeveloperName from "./components/DeveloperName"
import Globe from "./components/Globe"

const Header = () => {
  return (
    
    <div className="flex max-sm:justify-center pt-24 flex-col-reverse sm:flex-row w-4/5 mx-auto max-sm:pt-16 max-sm:w-full">
        <DeveloperName/>
        <Globe/>
      
    </div>
    
  )
}

export default Header
