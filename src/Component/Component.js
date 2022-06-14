import './Component.css';
import image from './record.jpg';
function Component(){
    return(
        
        <div className='cmp'>
        <img src={image} className="img"/>  
            <p>hellow students</p>
        </div>
    );
}
export default Component;