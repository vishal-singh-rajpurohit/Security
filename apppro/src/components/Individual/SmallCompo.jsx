import "../../Styles/SmallCompo.css"
import { MdExpandMore } from "react-icons/md";
export const ShowMoreButton = () =>{
    async function getMore() {
        
    }

    return(
        <section className="show-more-section">
            <div className="show-more-btn" onClick={getMore}><MdExpandMore size={30} /></div>
        </section>
    )
}