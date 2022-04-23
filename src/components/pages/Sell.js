import React from 'react'
import '../../styles/Sell.css'
import bg from '../../images/BG.jpg'
import Data from '../../helpers/Data';
import StingrayInfo from '../StingrayInfo';
import SearchBootstrap from '../../styles/SearchBarBootstrap';

function Sell() {
    return (
        <div className='sellBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div className='sell'>
                    <h1 className='sellTitle'>
                        <br/>
                        Kraben sell
                        <br /><br />
                    </h1>
                    <SearchBootstrap/><br />
                    <div className='krabenList'>
                        {Data.krabenList.map((stingray, key) => {
                            return (    
                                <StingrayInfo
                                    key={key}
                                    image={stingray.image}
                                    name={stingray.name}
                                    price={'Price(Baht) : '+ stingray.price}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sell