import { TipTap } from "../components/TipTap";
import { useLocation } from "react-router-dom";

export const Doc = () => {
    const currLoc = useLocation();
    const docId = currLoc.pathname.split("/")[2];

    return(
        <div className="main">
            <h2>Noodle Docs</h2>
            <h4>Doc Id: { docId }</h4>
            <TipTap docId={docId} />
        </div>
    )
}