import "../../Styles/success.css"
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const SuccessPops = () => {

  const { success, successText, fail } = useContext(AppContext)


  return (
    <div class={`popup ${success ? "show" : ""} ${fail? "fail": ""}`} id="successPopup">✔ {successText}!</div>
  )
}

export default SuccessPops
