import '../styles/Button.css'

function ButtonIcon(props){
    return(
    <button className={props.className}>
    <img className='imgButton' src={props.icon} alt={props.alt}/>
    <span style={{ flex: 1, textAlign: 'left' }}>{props.title}</span>
    </button>

    );
}

export default ButtonIcon;

