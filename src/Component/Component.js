import './Component.css';
import image from './record.jpg';
function Component(props){
    return(
        
        <div className='cmp'>
        <img src={image} className="img"/> 
        <p className='para'>{props.lecture}</p>
        </div>
    );
}
export default Component;