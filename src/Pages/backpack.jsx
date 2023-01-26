import React from 'react';
import BPLogo from '../Assets/bigPackLogo.png'

const Backpack = () => {
    return (
            <div className='min-h-screen max-h-full flex flex-col'>
                <h1 className='text-2xl font-extrabold mb-3'>A home for your xNFTS</h1>
                <div className='flex flex-row justify-between h-1/2 mx-10'>
                    <div className='flex flex-col w-3/4'>
                        <div className='bg-zinc-800 h-fit rounded-2xl m-5'>
                            <p className='text-xl 2xl:text-2xl 2xl:leading-10 font-bold text-start p-5'>
                                Backpack is brought to you by Coral; <br />
                                the team behind the Anchor Framework and xNFTs.
                            </p>
                        </div>
                        <div className='bg-zinc-800 h-fit rounded-2xl m-5'>
                            <p className='text-xl 2xl:text-2xl 2xl:leading-10 font-bold text-start p-5'>
                                But... WTF are xNFTS?
                            </p>
                        </div>
                        <div className='bg-zinc-800 h-fit rounded-2xl m-5'>
                            <p className='text-xl 2xl:text-2xl 2xl:leading-10 font-bold text-start p-5'>
                                xNFTS stands for "extended non-fungible tokens."
                                This is a type of non-fungible token (NFT) that
                                includes additional data or functionality beyond
                                what is included in a standard NFT. This can
                                include things like smart contract functionality,
                                the ability to earn rewards or dividends, or
                                the ability to vote on governance decisions.
                                They are built on the Ethereum blockchain and
                                can be used for digital art, collectibles, gaming, and more.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center w-3/4'>
                        <img
                        src={BPLogo}
                        alt='BP logo'
                        className='rounded-3xl w-5/6 2xl:w-fit'
                        />
                    </div>
                </div>
            </div>
    );
};

export default Backpack;