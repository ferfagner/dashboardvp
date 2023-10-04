import './box.css'
import { FiThumbsUp } from "react-icons/fi";

interface velueProps{
    valor: String
    title: String
}

export default function Box(value: velueProps){
    
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
        <h2 className="principal__velue">{value.valor}</h2>
       </div>
        <div className="info__p">
       <p>{value.title}</p>
       </div>
        </div>
       
       

    </div>
    )

}