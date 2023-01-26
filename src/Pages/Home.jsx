import React, {useState} from 'react';
import videoBackpack from '../Assets/videoBackpack.mp4'
import WaoColumn from "../Components/waoColumn";
import guy from '../Assets/guy.png'

const Home = () => {

    const [jumper, setJumper] = useState(false)

    const jump = () => {
        setJumper(prevState => !prevState)
    }

    const isJump = jumper
        ?
        'animate-bounce'
        :
        'invisible'

    return (
            <div className='h-full flex flex-col items-center'>
                <h2 className='text-3xl font-bold'>New level of crypto wallets</h2>
                <div className='flex flex-row justify-between mt-10'>
                    <div className={isJump}><WaoColumn /></div>
                    <div className='flex flex-col w-1/3'>
                <div className='flex flex-col text-start w-3/4 mt-10 bg-zinc-800 h-fit rounded-2xl'>
                    <p className='p-3'>
                        Hello, cryptobros! You are on my fan page of the <a className='underline decoration-2 decoration-rose-700'>backpack</a> project, and there is also a section on the <a className='underline decoration-2 decoration-wavy decoration-blue-700'>ONE</a> project here! I am a big fan of the people who developed this.
                        I hope that this page will help to contribute to the development of these projects!
                    </p>
                    <div className='flex justify-center mb-3'>
                        <button onClick={jump} className='w-1/6 border border-2 ring ring-0 border-cyan-500 rounded-full py-1 hover:bg-blue-700' >
                            WAO
                        </button>
                    </div>
                </div>
                        <div className='flex justify-center items-center text-center h-1/6 w-3/4 mt-7 bg-zinc-800 h-fit rounded-2xl'>
                            <p className='text-2xl font-bold'>
                                Wait.. Who is that down there??
                            </p>
                        </div>
                </div>
                    <video
                        className='w-1/4 h-fit'
                        src={videoBackpack}
                        typeof='video/mp4'
                        autoPlay loop muted
                    />
                    <div className={isJump}><WaoColumn /></div>
                </div>

                <h2 className='text-2xl my-2 xl:my-10'>Oh, it's me! I'm going with my backpack :)</h2>

                <div className='flex justify-center my-7 -mt-80 lg:mt-0'>
                    <img
                        src={guy}
                        alt='Guy with backpack'
                        className='w-2/3 h-1/4 rounded-2xl'
                    />
                </div>
            </div>
    );
};

export default Home;