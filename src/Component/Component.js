import './Component.css';
import image from './record.jpg';
function Component(){
    return(
        
        <div className='cmp'>
        <img src={image} className="img"/> 
        {/* <button><img src={image}/></button>  */}
            <p className='para'>hellow students</p>
        </div>
    );
}
export default Component;