import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Father/Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Matir Ring');
export const MoneyContext = createContext('Money');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const ring = 'Diamond Ring';
    return (
        <RingContext.Provider value={[house,setHouse]}> 
            <MoneyContext.Provider value={[money,setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <div className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Anty house={house}></Anty>
                    </div>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;