import React, { useState } from 'react'
import '../../styles/Sell.css'
import bg from '../../images/BG.jpg'
import Data from '../../helpers/Data';
import StingrayInfo from '../StingrayInfo';

function Sell() {

    const [query, setQuery] = useState('');

    return (
        <div className='sellBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div className='sell'>
                    <h1 className='sellTitle'>
                        <br />
                        Kraben sell
                        <br /><br />
                    </h1>
                    <div className='col-4'>
                        <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /><br />
                    </div>
                    <div className='krabenList'>
                        {Data.krabenList.filter(n => n.name.toLowerCase().includes(query)).map((stingray, key) => {
                            return (
                                <StingrayInfo
                                    key={key}
                                    image={stingray.image}
                                    name={stingray.name}
                                    price={'Price(Baht) : ' + stingray.price}
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