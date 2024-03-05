import '../styles/Button.css'

function Button(props) {
  return (
    <>
    <button className={props.className}>
      {props.title}
    </button>
    </>
  );
}

export default Button;

//<button className={props.className}>
//{props.title}
//</button>