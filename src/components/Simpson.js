import './Simpson.css';

function Simpson(props) {
    const {name, pic, styleClass} = props;

    return (
        <div className={styleClass}>
            <h2>{name}</h2>
            <img src={pic} alt={name}/>
        </div>
    );
}

export default Simpson;
