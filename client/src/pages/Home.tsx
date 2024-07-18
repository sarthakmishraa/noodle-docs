import { generateDocId } from "../utils/generateDocId";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    let docPath = "";
    const goToNewDoc = async() => {
        const docId = await generateDocId();
        docPath = "doc/" + docId;
        navigate(docPath);
    }
    return(
        <div className="home">
            <h2>Noodle Docs</h2>
            <button className="homeBtn" onClick={goToNewDoc} >Create a new Noodle Doc</button>
        </div>
    )
}