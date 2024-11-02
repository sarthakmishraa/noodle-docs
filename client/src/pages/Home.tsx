import { useState } from "react";
import { generateDocId } from "../utils/generateDocId";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [existingDocId, setExistingDocId] = useState<string | undefined>();
    const navigate = useNavigate();

    let docPath = "";
    const goToNewDoc = async() => {
        const docId = await generateDocId();
        docPath = "doc/" + docId;
        navigate(docPath);
    };
    const goToExistingDoc = () => {
        docPath = "doc/" + existingDocId;
        navigate(docPath)
    }
    return(
        <div className="home">
            <div className="homeHeadingContainer">
                <h2 className="homeHeading">Noodle Docs</h2>
                <p className="homeHeadingText">Create stunning documents with our intuitive editor & Share your documents with colleagues, clients, or friends with just a few clicks.</p>
            </div>
            <button className="homeBtn" onClick={goToNewDoc} >Create a new Noodle Doc</button>
            <p>OR</p>
            <div className="homeForm">
                <label>Enter Doc ID to go to a doc</label>
                <input type="text" onChange={(event) => setExistingDocId(event.target.value)} />
                <button className="homeBtn" onClick={goToExistingDoc}>Go</button>
            </div>
        </div>
    )
}