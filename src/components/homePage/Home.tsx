import React, { useState } from "react";

function App() {

    const [showPhotosView, setShowPhotosView] = useState(true);
    const [showMapsView, setShowMapsView] = useState(false);
    const [showCalenderView, setShowCalenderView] = useState(false);

    const changeView = (chosenView: boolean) => {
        if (!chosenView) {
         setShowPhotosView(!showPhotosView);
         setShowMapsView(!showMapsView);
         setShowCalenderView(!showCalenderView)
        }
       
     }

    const handleScroll = (): void => {
        const mainSectRect: DOMRect = document.querySelector("main")!.getBoundingClientRect();
        if (mainSectRect.top !== 0) {
            document.querySelector("header")!.classList.add("shadow-lg"); 
        } else {
            document.querySelector("header")!.classList.remove("shadow-lg");
        }
    }
      
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div className="bg-primary text-white font-display">
            <header className="flex flex-row justify-between fixed  py-3 px-4 bg-primary text-white w-full">
                <div className="flex flex-row justify-center">

                    <a href="/">
                        <img className="w-30" src="https://journey.cloud/_nuxt/img/journey-logo-raw.294b3a6.svg" alt="logo"/>
                    </a>

                        <sup className="relative top-0 text-sm">®</sup>

                </div>
                <a href="/app" className="text-gray-800 border-solid border border-gray-800 px-4 py-1 rounded     min-w-64"><i className="fas fa-sign-in-alt w-6 hidden sm:inline-block"></i><strong className="font-sans font-medium leading-6">Go To Web App</strong></a>
            </header>

            <main className="pt-16">
                <div className="p-4 text-center">
                    <h2 className="font-extrabold text-2xl">Sanctuary for Your Mind & Soul</h2>
                    
                    <a href="/app" className="block text-gray-800 font-extrabold tracking-widest px-6 pt-3 mx-auto my-2 h-12 w-max hover:bg-black hover:bg-opacity-10 focus:bg-opacity-60 rounded-full">
                        <span>GET STARTED<i className="fas fa-chevron-right text-sm pl-3"></i></span>
                        </a>
                    <div className="max-w-700 mt-8 mx-auto">
                    <img className="" src="https://journey.cloud/home/devices.jpg" alt="devices"/>
                    </div>
                </div>

                <div className="mx-auto my-14 max-w-800">
                    <h3 className="text-center font-bold text-xl px-3">Meet Journey®, Your Self-Care Journal</h3>
                    
                    <div>
                        <div className="flex flex-row flex-wrap mt-6">
                            <div className="lg:flex-1 lg:w-1/2 p-4">
                                <p>
                                Join millions of Journey users and create a healthier, happier mind. A sanctuary for your mind and soul, Journey will help increase your positive energy, be more grateful and a calmer mind by building healthy thinkings through journaling. 
                                </p>
                                <br/>
                                <p> 
                                We're more than just a journal, or a diary; we're your own motivational coach and happiness trainer. Let's                  embark on a fabulous journey of self-improvement today.
                                </p>
                            </div>
                            <div className="lg:flex-1 p-4 w-full lg:w-1/2 tracking-wide">
                                <ul>
                                    <li> <div className="py-4 pl-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <img className="w-4 pb-2 mr-5 inline" src="https://journey.cloud/_nuxt/img/homepage-award-play-store.d946d48.svg" alt="play store icon"/> 
                                        <span className="">Google Editors' Choice 2016 - 2021</span>
                                    </div> </li>

                                    <li> <div className="py-4 pl-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <img className="w-5 pb-2 mr-4 inline" src="data:image/svg+xml;base64,                      PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4w                   LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBp                   ZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv               MTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii00MzQgMTM2IDMwIDMwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91                   bmQ6bmV3IC00MzQgMTM2IDMwIDMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI            +DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7b3BhY2l0eTowLjU7fQ0KCS5zdDF7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU            +DQo8ZyBjbGFzcz0ic3QwIj4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTQxMi43LDE1MS42YzAtMi45LDIuNC00LjQsMi41LTQuNGM             tMS40LTItMy41LTIuMy00LjItMi4zYy0xLjgtMC4yLTMuNSwxLjEtNC40LDEuMWMtMC45LDAtMi4zLTEtMy44LTENCgkJYy0yLDAtMy4                4LDEuMS00LjgsMi45Yy0yLjEsMy41LTAuNiw4LjcsMS40LDExLjZjMSwxLjQsMi4xLDMsMy43LDIuOWMxLjUtMC4xLDItMSwzLjgtMXM               yLjMsMSwzLjgsMC45YzEuNiwwLDIuNi0xLjQsMy41LTIuOQ0KCQljMS4xLTEuNiwxLjYtMy4yLDEuNi0zLjNDLTQwOS42LDE1Ni4zLTQ             xMi42LDE1NS4xLTQxMi43LDE1MS42eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tNDE1LjYsMTQzYzAuOC0xLDEuNC0yLjMsMS4              yLTMuN2MtMS4xLDAtMi42LDAuNy0zLjQsMS43Yy0wLjgsMC45LTEuNCwyLjMtMS4yLDMuNg0KCQlDLTQxNy43LDE0NC43LTQxNi40LDE               0My45LTQxNS42LDE0M3oiLz4NCjwvZz4NCjwvc3ZnPg0K" alt="apple icon"/> 
                                        <span className="">iOS App Store - App of the Day 2019</span>
                                    </div></li>

                                    <li><div className="py-4 pl-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <img className="w-4 pb-2 mr-5 inline" src="https://journey.cloud/_nuxt/img/homepage-award-google-play-best-of-2017.1266794.png" alt="award"/> 
                                        <span>Best of 2017 Apps</span>
                                    </div></li>

                                    <li><div className="py-4 pl-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <img className="w-4 pb-2 mr-5 inline" src="https://journey.cloud/_nuxt/img/homepage-award-android-excellence.788728a.png" alt="award"/> 
                                        <span>Excellence Award 2018</span>
                                    </div></li>

                                    <li><div className="py-4 pl-6 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <img className="w-4 pb-2 mr-5 inline" src="https://journey.cloud/_nuxt/img/homepage-award-app-store.d6f8e31.svg" alt="award"/> 
                                        <span>iOS App Store Best New Update</span>
                                    </div></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row mt-3">
                            <div className="flex-1 p-3"><a href="https://play.google.com/store/apps/details?id=com.journey.app">
                                <img className="h-badge mx-auto" src="https://journey.cloud/home/badge/badge-android.svg" alt="google play badge"/>
                            </a></div>
                            <div className="flex-1 p-3"><a href="https://itunes.apple.com/us/app/journey-diary-journal/id1300202543">
                                <img className="h-badge mx-auto" src="https://journey.cloud/home/badge/badge-ios.svg" alt="App store badge"/>
                            </a></div>
                            <div className="flex-1 p-3"><a href="https://apps.apple.com/us/app/journey-diary-journal/id1300202543">
                                <img className="h-badge mx-auto" src="https://journey.cloud/home/badge/badge-mac.svg" alt="mac app store badge"/>
                            </a></div>
                        </div>

                        <div className="flex flex-col sm:flex-row mt-3">
                            <div className="flex-1 p-3"><a href="https://snapcraft.io/journey/">
                                <img className="h-badge mx-auto" src="https://journey.cloud/home/badge/badge-snap.svg" alt="snap store badge"/>
                            </a></div>
                            <div className="flex-1 p-3"><a href="https://chrome.google.com/webstore/detail/journey/cpdnilooeakjhhmlbliacfdimhblkmnc">
                                <img className="h-badge mx-auto" src="https://journey.cloud/home/badge/badge-chrome-webstore.svg" alt="chrome web store badge"/>
                            </a></div>
                        </div>
                    </div>
                    
                 </div>

                <div className="mx-auto my-14 max-w-900">
                    <h3 className="text-center font-extrabold text-xl px-3">Your Happiness At A Glance</h3>
                    <div className="flex justify-center">
                        <button className="p-4 border-b-2 border-solid border-white border-opacity-10 hover:bg-white hover:bg-opacity-5" onClick={() => changeView(showPhotosView)}>Photos</button >
                        <button className="p-4 border-b-2 border-solid border-white border-opacity-10 hover:bg-white hover:bg-opacity-5" onClick={() => changeView(showMapsView)}>Maps</button >
                        <button className="p-4 border-b-2 border-solid border-white border-opacity-10 hover:bg-white hover:bg-opacity-5" onClick={() => changeView(showCalenderView)}>Calender</button >
                    </div>
                    <div className="mt-6">
                        <div className="flex flex-row items-center flex-wrap">
                            <div className="lg:flex-1">
                                <img className="h-phone mx-auto" src="https://journey.cloud/home/phone/journey-views-photos-min.png" alt="device"/>
                            </div>
                            <div className="lg:flex-1">
                                <h3 className="">Photos</h3>
                                <p className="mt-4">A wealth of memory can be stored within a single image. Look back on your fondest memories and experiences. Upload pictures, videos, gifs, and music into your journal entries with ease.</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center flex-wrap">
                            <div className="lg:flex-1">
                                <img className="h-phone mx-auto" src="https://journey.cloud/home/phone/journey-views-map-min.png" alt="device"/>
                            </div>
                            <div className="lg:flex-1 ">
                                <h3 className="">Maps</h3>
                                <p className="mt-4">Keep track of where you’ve been by tagging your locations in your entries to make a travelogue or travel journal. Google Places and Apple Maps helps you automatically tag your locations in your entries. See the media you have uploaded at specific locations in your Atlas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
            

    )
}

export default App;