import React from 'react'

export default class NavBar extends React.Component{
    constructor(porps){
        super(porps)
    }
    render(){
        return(
            <div className='bg-blue-500 w-full h-12 flex place-content-between px-8 text-xl '>
                <div className='flex items-center'>
                    <h1 className=" text-white font-bold ">Boilerplate Next</h1>
                </div>
                <div className="flex space-x-4 items-center  ">
                    <a href="/" className="flex items-center text-white font-bold hover:bg-gray-400 px-4 h-full ">CSR</a>
                    <a href="/ssr" className="flex items-center text-white font-bold hover:bg-gray-400 px-4 h-full">SSR</a>
                    <a href="/ssg" className="flex items-center text-white font-bold hover:bg-gray-400 px-4 h-full">SSG</a>
                </div>
            </div>
        )
    }
}