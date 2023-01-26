import React from 'react';
import waoCol from '../Assets/waoWord.png'

const WaoColumn = () => {
    return (
        <div className='flex-col justify-between items-center space-y-16 mx-2 w-2/3 xl:mt-20'>
            <div>
                <img
                    src={waoCol}
                    alt='waoWord'
                    className='invisible'
                />
            </div>
            <div>
                <img
                    src={waoCol}
                    alt='waoWord'
                />
            </div>
            <div>
                <img
                    src={waoCol}
                    alt='waoWord'
                />
            </div>
            <div>
                <img
                    src={waoCol}
                    alt='waoWord'
                />
            </div>
            <div>
                <img
                    src={waoCol}
                    alt='waoWord'
                    className=''
                />
            </div>
        </div>
    );
};

export default WaoColumn;