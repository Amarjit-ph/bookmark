import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Home = (props)=>{
    return (
        <div className='flex flex-col bg-gray-200 h-screen p-8 sm:pt-4 sm:px-24 md:px-36'>
            <img className="h-14 w-14 self-center" src={logo}/>
            <h2 className='text-black text-4xl font-bold'>BOOKMARK</h2>
            <h2 className='text-black text-lg pt-4'>Your self-hosted bookmark archive.<br/>Free and open source.</h2>
            <p className='text-black mt-8 font-light'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
        </div>
    );
}

export default Home;