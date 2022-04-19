import React from 'react'
import '../styles/Home.css'
import bg from '../images/BG.jpg'
import { StringrayList } from '../helpers/StringrayList';
import StringrayInfo from '../components/StringrayInfo';

function Home() {
    return (
        <div className='homeBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div className='headerContainer'>
                    <h1 className='kraben'>
                        Kraben<br />
                        Sell<br /><br />
                    </h1>
                    <div className='KrabenList'>
                        {StringrayList.map((stringray, key) => {
                            return (
                                <StringrayInfo
                                    key={key}
                                    image={stringray.image}
                                    name={stringray.name}
                                    price={stringray.price}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home