import "../style/slideHeader.css";
function SlideHeader(props) {
    return( 
        <>
        <div className="slide-header">
            <div className="title">{props.header}</div>
            <div className="extension">Home | {props.extension}</div>
        </div>
        </>
    )
}
export default SlideHeader