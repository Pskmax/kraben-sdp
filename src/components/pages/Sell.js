import React from 'react'
import '../../styles/Sell.css'
import bg from '../../images/BG.jpg'
import Data from '../../helpers/Data';
import StringrayInfo from '../StringrayInfo';
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
                        {Data.krabenList.map((stringray, key) => {
                            return (    
                                <StringrayInfo
                                    key={key}
                                    image={stringray.image}
                                    name={stringray.name}
                                    price={'Price(Baht) : '+stringray.price}
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