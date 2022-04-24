import Data from './Data';
import StingrayInfo from '../components/StingrayInfo';
import { useEffect, useState } from 'react';
import '../components/styles/Stingray.css'

const Stingray = () => {
    const [query, setQuery] = useState('');
    const [cart, setCart] = useState([])
    const handleClick = (item) => {
        if(cart.indexOf(item) !== -1 ) return;
        setCart([...cart, item])
        console.log(cart)
    }

    const countNumber = (cart) => {
        return cart
    }

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item)
        const arr = cart
        arr[ind].amount += d

        if (arr[ind].amount === 0) arr[ind].amount = 1
        setCart([...arr])
    }

    useEffect(() => {
        console.log('cart change')
    }, [])

    return (
        <div className='stingray'>
            <div className='col-15'>
                <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /><br />
            </div>
            
            <div className='krabenList'>

                {Data.krabenList.filter(n => n.name.toLowerCase().includes(query)).map((stingray, key) => {
                    return (
                        <StingrayInfo
                            key={key}
                            image={stingray.image}
                            name={stingray.name}
                            price={'Price(Baht) : ' + stingray.price}
                            id={stingray.id}
                            handleClick={handleClick}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default Stingray