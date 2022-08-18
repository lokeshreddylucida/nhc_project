import infoIcon from '../images/info.png';

function Note(props) {
    return (
        <div className="noteClass"><img src={infoIcon} className="infoLogoClass" />
            <p className="noteParaClass">{props.text}</p>
        </div>
    )
}

export default Note;