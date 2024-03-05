import '../styles/SignContent.css'
import image from '../assets/SignInImage.jpg'
import emailIcon from '../assets/email.svg'
import googleIcon from '../assets/iconGoogle.png'
import ButtonIcon from './ButtonIcon';
import '../styles/SignContent.css'

function SignContent(){

    return(
        <>
        <div style={{ display: 'flex' }}>
            <div className='leftDiv'>
                <h2 className='title'>Encuentra los mejores profesionales</h2>
                <div>
                    <p className='white'>✓ Más de 600 profesionales</p>
                    <p className='white'>✓ Encuentra la categoría que quieras</p>
                    <p className='white'>✓ Observar, pregunta, orientate</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
                    <img className='imgLeft' src={image} alt='Dos personas hablando'></img>
                </div>
            </div>

            <div className='rightDiv'>
                <h2 className='blackTitle'>Crea una cuenta nueva</h2>
                <div style={{display: 'flex'}}>
                    <p className='black'>¿Ya tienes una cuenta? </p>
                    <a className='blackunder' href=''> Iniciar sesión</a>
                </div>
                <div>
                    <ButtonIcon className='buttonimg' icon={googleIcon} alt='Icono de Google' title='Continuar con Google'></ButtonIcon>
                    <ButtonIcon className='buttonimg' icon={emailIcon} alt='Icono de correo electronico' title='Continuar con el correo electrónico'></ButtonIcon>
                </div>
                <footer>
                <p className='gray'>Al unirte, aceptas los Términos de servicio de OrientaT, así como recibir correos electrónicos ocasionales de nuestra parte. Lee nuestra Política de privacidad para saber cómo utilizamos tus datos personales</p>
                </footer>
            </div>
        </div>
        </>
    );
}

export default SignContent;