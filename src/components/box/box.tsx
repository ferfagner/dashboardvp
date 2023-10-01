import './box.css'
import { FiThumbsUp } from "react-icons/fi";

export default function Box(){
    return(
    <div className="container__box">
        <div className="icon__box">
        < FiThumbsUp 
        size={50}
        color="green"
        />
        </div>

        <div className="info__box">
            <div className="info__velue">
        <h2 className="principal__velue">100</h2>
       <h4 className='second__velue'>,00</h4>
       </div>
        <div className="info__p">
       <p>Valor Vendido</p>
       </div>
        </div>
       
       

    </div>
    )

}