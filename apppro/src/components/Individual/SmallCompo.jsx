import { useDispatch } from "react-redux";
import "../../Styles/SmallCompo.css"
import { MdExpandMore } from "react-icons/md";
import { nextPage } from "../../App/functions/variable.slice";
export const ShowMoreButton = () =>{
    
    const dispatch = useDispatch()
    async function getMore() {
        dispatch(nextPage())
    }

    return(
        <section className="show-more-section">
            <div className="show-more-btn" onClick={getMore}><MdExpandMore size={30} /></div>
        </section>
    )
}