import { useSound } from "./SoundContext"

const BackButton = ({onBack}) => {
    const sound = useSound()
  return (
     <button 
        onClick={() => {
          sound.playSFX("buttonClick");
          onBack()
        }}
        className="text-xl xl:text-2xl text-white font-bold border-2 rounded p-1 bg-green-700 hover:bg-green-800 cursor-pointer transition-colors"
      >
        Go Back
      </button>
  )
}

export default BackButton
