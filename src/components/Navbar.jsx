        function Navbar({ cartCount, toggleCart, setSearchQuery }) {
            return (
                <nav className="bg-pink-600 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center shadow-md sticky top-0 z-50">
                    <div className="flex items-center mb-4 md:mb-0">
                        <i className="fas fa-spa text-2xl mr-3"></i>
                        <h1 className="text-2xl font-bold">Luxe Beauty</h1>
                    </div>
                    
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full py-2 px-4 pr-10 rounded-full text-gray-700 focus:outline-none"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <ul className="hidden md:flex space-x-8 mr-10">
                            <li className="hover:text-pink-200 cursor-pointer">Home</li>
                            <li className="hover:text-pink-200 cursor-pointer">Skincare</li>
                            <li className="hover:text-pink-200 cursor-pointer">Makeup</li>
                            <li className="hover:text-pink-200 cursor-pointer">Hair</li>
                            <li className="hover:text-pink-200 cursor-pointer">Body</li>
                        </ul>
                        <div 
                            className="relative cursor-pointer"
                            onClick={toggleCart}
                        >
                            <i className="fas fa-shopping-cart text-xl"></i>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                </nav>
            );
        }

