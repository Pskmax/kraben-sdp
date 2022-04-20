import React from 'react'
import '../styles/Home.css'
import bg from '../images/BG.jpg'
import { StringrayList } from '../helpers/StringrayList';
import StringrayInfo from '../components/StringrayInfo';

function Home() {
    return (
        <div className='homeBg' style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <div className='home'>
                    <h1 className='homeTitle'>
                        Kraben Sell<br /><br />
                    </h1>
                    <div className='krabenList'>
                        {StringrayList.map((stringray, key) => {
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

export default Home