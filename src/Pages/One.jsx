import React from 'react';
import ONE from '../Assets/ONE.png'
import Stroka from "../Components/Stroka";

const One = () => {
    return (
            <div className='min-h-screen max-h-full flex flex-col'>
                <h1 className='text-2xl font-extrabold mb-4'>ONE</h1>
                <div className='flex flex-row justify-around h-1/2'>
                    <div className='w-1/4 2xl:w-1/3'>
                    <img
                    src={ONE}
                    alt='ONE'
                    className='m-5 rounded-3xl'
                    />
                    </div>

                    <div className='bg-zinc-800 h-fit w-1/4 xl:w-5/12 rounded-2xl m-5'>
                        <p className='text-xl 2xl:text-2xl 2xl:leading-10 font-bold text-start p-5'>
                            ONE - the collection that starts the future.<br/>
                            It is with her that the history of backpack for everyone begins.
                            Everyone will be able to participate in this.
                            You just need to become part of the community,
                            install the browser extension and use it. <br />
                            On this site you could see the mysterious inscription WAO.
                            Well, what does that mean? Few people know, but WAO stands for We Are One.
                            We are one, not just an interpretation of wow, it is something more.
                        </p>
                    </div>
                </div>
                <Stroka />
            </div>
    );
};

export default One;