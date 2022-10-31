import preloader from '../../assets/B.svg';
import './preloader.css';

export const PreLoader = () => {
    return (
        <div className='preloader'>
            <div className='logo-fade'>
                <img src={preloader} alt="logo" className="logo-animate" />
            </div>
        </div>
    )
}