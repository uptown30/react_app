mport './App.css'
import Navbar from "./components/navbar.tsx";
import AsideBar from "./components/main/asideBar.tsx";
import ProductGrid from "./components/main/ProductGrid.tsx";
import ButtonNav from "./components/ButtonNav.tsx";
import Footer from "./components/footer.tsx";
import DecoSection from "./components/DecoSection.tsx";
import CartButton from "./components/main/CartButton.tsx";
import CountButton from "./components/main/CountButton.tsx";

function App() {


    return (
        <>
            <div className="flex h-16 items-center justify-between">

                <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path
                  d="m7.5 4.27 9 5.15"/><path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path
                  d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </span>
                    <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                </a>
                <Navbar />
            </div>

            <div className="flex items-center gap-2">

                <div
                    className="mr-4  items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                </div>


                <div className="relative  sm:block">
                    <input id="search-input" type="text" placeholder="Search products..."
                           className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                         className="absolute left-3.5 top-3 text-blue-200">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                    </svg>
                </div>

                <CartButton />
                <CountButton />

                <button type="button"
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                        aria-label="Menu" title="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </button>
            </div>



            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                    <AsideBar />

                    <ProductGrid />

                    <ButtonNav />
                    <DecoSection />

                </div>
            </main>

            <Footer />




        </>
    )
}