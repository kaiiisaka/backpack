import React from 'react';
import SF from '../Assets/SFLogo.png'
import Stroka from "../Components/Stroka";
import Strochka from "../Components/Stroka2";

const Snakefish = () => {
    return (
            <div className='min-h-screen max-h-full flex flex-col'>
                <h1 className='text-2xl font-extrabold mb-4'>snakefish#9259</h1>
                <div className='flex flex-row justify-around m-7'>
                    <div className='bg-zinc-800 h-fit w-1/4 xl:w-5/12 rounded-2xl m-5'>
                        <p className='text-xl 2xl:text-2xl 2xl:leading-10 font-bold text-start p-5'>
                            My name is Alex, but you probably know me as snakefish.
                            I am a big fan of NFT art, a programmer and I am very
                            interested in everything related to the concept of web3.
                            I have been studying blockchain and cryptocurrencies
                            for a long time. I want to connect my life with it.
                            Even on my discord avatar, you see a picture that
                            was drawn by NTF artist Joiceeloo. Since I use both
                            Solana and Ether and many other networks, I really
                            want to use a backpack, I just can’t imagine how
                            convenient a crypto wallet should be. <br/>
                            WAO!
                        </p>
                    </div>
                    <img
                    src={SF}
                    alt='snakefish'
                    className='rounded-full'
                    />
                </div>
                <Stroka />
                <br/>
                <Strochka />
            </div>
    );
};

export default Snakefish;