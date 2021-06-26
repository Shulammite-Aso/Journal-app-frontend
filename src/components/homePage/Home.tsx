import React from 'react';

function App() {

    const heroImgStyle = {
        backgroundImage: 'url("https://journey.cloud/home/devices.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        height: '21rem'
}
    

    
    return (
        <div className="bg-primary w-screen text-white">
            <header className="flex flex-row justify-between py-5 px-4 bg-primary w-screen text-white">
                <div className="flex flex-row justify-center">

                    <a href="/">
                        <img className="w-30" src="https://journey.cloud/_nuxt/img/journey-logo-raw.294b3a6.svg" alt="logo"/>
                    </a>

                        <sup className="relative top-0 text-sm">®</sup>

                </div>
                <a href="/app" className="text-gray-800 border-solid border border-gray-800 px-4 py-1 rounded     min-w-64"><i className="fas fa-sign-in-alt w-6 hidden sm:inline-block"></i><strong className="font-sans font-medium leading-6">Go To Web App</strong></a>
            </header>

            <main>
                <div className="p-4 text-center">
                    <h2 className="font-extrabold text-2xl">Sanctuary for Your Mind & Soul</h2>
                    
                    <a href="/app" className="block text-gray-800 font-extrabold tracking-widest px-6 pt-3 mx-auto my-2 h-12 w-max hover:bg-black hover:bg-opacity-10 rounded-full">
                        <span>GET STARTED<i className="fas fa-chevron-right text-sm pl-3"></i></span>
                        </a>
                    <div className="w-full mt-8">
                        <div className="w-full bg-contain bg-no-repeat" style={heroImgStyle} ></div>
                    </div>
                </div>

                <div className="mt-14 p-4">
                    <h3 className="text-center font-bold text-xl">Meet Journey®, Your Self-Care Journal</h3>
                    
                </div>
            </main>
        </div>
            

    )
}

export default App;