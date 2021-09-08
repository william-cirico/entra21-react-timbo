import "./styles.css";
import ReactLoading from "react-loading";

export function Loading() {
    return (
        <div className="modal">
            <ReactLoading type="spin" color="#fff" height={'20%'} width={'20%'} />
        </div>
    );
}