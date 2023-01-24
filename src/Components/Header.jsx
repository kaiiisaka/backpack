import React from 'react';
import ReactDOM from "react-dom";
import logo from '../Assets/logo.png'
import wao from '../Assets/wao.png'

const Header = () => {
    return (
        <div className='HeaderContent flex justify-between items-center mt-2'>
           <div className='ml-2'>
               <a href='/'>
                   <img
                       className='h-8 w-8'
                       src={logo}
                       alt="backapck logo"
                   />
                   {/*<img*/}
                   {/*    className='h-8 w-8 animate-spin'*/}
                   {/*    src={wao}*/}
                   {/*    alt="wao logo"*/}
                   {/*/>*/}
               </a>
           </div>
            <div className='flex justify-center space-x-5'>
                <a href=''>ONE</a>
                <a>backpack</a>
                <a>Made by</a>
            </div>
            <div className='mr-2'>
                <button className=' border border-2 ring ring-0 border-cyan-500 rounded-full'>
                    WAO
                </button>
            </div>
        </div>
    );
};

export default Header;