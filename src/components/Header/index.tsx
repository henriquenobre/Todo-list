import Logo from '../../assets/logo.svg'
import './style.css'

export function Header(){
    return(
        <div className="content">
            <img src={Logo} />
        </div>
    )
}