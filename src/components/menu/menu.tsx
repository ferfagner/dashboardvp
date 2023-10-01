import imgUser from './../../assets/logo.png'
import './menu.css'
export default function Menu(){

    return(
        <div className="container__menu">
            <img 
            src={imgUser}
            className='imgUser'
            />
            <h3 className='nomeUser'>André Vieira Porto</h3>
            
        </div>
    )

}