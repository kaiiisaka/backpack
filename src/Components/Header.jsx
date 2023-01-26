import React, {useEffect, useState} from 'react';
import logo from '../Assets/logo.png'
import waoLogo from '../Assets/wao.png'
import  {Link, NavLink} from "react-router-dom";

const Header = () => {

    const [wao, setWao] = useState(false)


    const isOne = ({isActive}) => isActive ? "bg-blue-700 rounded-full px-1 " : "hover:bg-blue-700 rounded-full px-1"
    const isBack =  ({isActive}) => isActive ? "bg-rose-700 rounded-full px-1 " : "hover:bg-rose-700 rounded-full px-1"
    const isSnakefish =  ({isActive}) => isActive ? "bg-purple-700 rounded-full px-1 " : "hover:bg-purple-700 rounded-full px-1"

    const waofunc = () => {
    setWao(prevState => !prevState)
    }

    const waoanim = () => wao ? "h-8 w-8 mr-4 animate-spin" : "h-8 w-8 mr-4"

    return (
        <div className='HeaderContent flex justify-between items-center pt-3 mb-6 font-mono'>
           <div className='ml-10 font-semibold '>
               <Link to='/' className={'flex flex-row text-lg'}>
                   <img
                       className='h-8 w-8'
                       src={logo}
                       alt="backapck logo"
                   />
                   <a className='text-2xl'>backpack</a>

               </Link>
           </div>
            <div className='flex justify-center space-x-5 font-semibold mr-20'>
                <NavLink to='/one' className={isOne}>ONE</NavLink>
                <NavLink to='/backpack' className={isBack}>backpack</NavLink>
                <NavLink to='/snakefish' className={isSnakefish}>Made by</NavLink>
            </div>
            <div className='mr-2 flex flex-row'>
                <img
                    className={waoanim()}
                    src={waoLogo}
                    alt="wao logo"
                />
                <button onClick={waofunc} className='border border-2 ring ring-0 border-cyan-500 rounded-full px-4 py-1 hover:bg-blue-700'>
                    WAO
                </button>
            </div>
        </div>
    );
};

export default Header;