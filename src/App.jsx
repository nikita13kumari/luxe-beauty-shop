        function App() {
            const [cartOpen, setCartOpen] = React.useState(false);
            const [cartItems, setCartItems] = React.useState([]);
            const [activeCategory, setActiveCategory] = React.useState('all');
            const [searchQuery, setSearchQuery] = React.useState('');
            
            // Get unique categories
            const categories = [...new Set(products.map(p => p.category))];
            
            // Filter products
            const filteredProducts = products.filter(product => {
                const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
                const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    product.description.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });
            
            const toggleCart = () => setCartOpen(!cartOpen);
            const closeCart = () => setCartOpen(false);
            
            const addToCart = (product) => {
                setCartItems(prevItems => {
                    const existingItem = prevItems.find(item => item.id === product.id);
                    if (existingItem) {
                        return prevItems.map(item => 
                            item.id === product.id 
                                ? {...item, quantity: item.quantity + 1} 
                                : item
                        );
                    } else {
                        return [...prevItems, {...product, quantity: 1}];
                    }
                });
            };
            
            const removeFromCart = (productId) => {
                setCartItems(prevItems => 
                    prevItems.filter(item => item.id !== productId)
                );
            };
            
            const updateQuantity = (productId, newQuantity) => {
                if (newQuantity < 1) return;
                
                setCartItems(prevItems => 
                    prevItems.map(item => 
                        item.id === productId 
                            ? {...item, quantity: newQuantity} 
                            : item
                    )
                );
            };
            
            const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
            
            return (
                <div className="min-h-screen flex flex-col">
                    <Navbar 
                        cartCount={cartCount} 
                        toggleCart={toggleCart}
                        setSearchQuery={setSearchQuery}
                    />
                    
                    <main className="container mx-auto px-4 py-8 flex-grow">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Beauty Collection</h1>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Discover our carefully curated selection of premium beauty products designed to enhance your natural radiance.
                            </p>
                        </div>
                        
                        <CategoryFilter 
                            categories={categories} 
                            activeCategory={activeCategory} 
                            setActiveCategory={setActiveCategory} 
                        />
                        
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        addToCart={addToCart} 
                                    />
                                ))}
                            </div>
                        )}
                    </main>
                    
                    <Cart 
                        isOpen={cartOpen} 
                        cartItems={cartItems} 
                        closeCart={closeCart} 
                        removeFromCart={removeFromCart}
                        updateQuantity={updateQuantity}
                    />
                    
                    <footer className="bg-gray-800 text-white py-12">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-spa text-2xl mr-3"></i>
                                        <h2 className="text-2xl font-bold">Luxe Beauty</h2>
                                    </div>
                                    <p className="text-gray-400">
                                        Premium beauty products curated for your self-care journey.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Shop</h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li><a href="#" className="hover:text-white">Skincare</a></li>
                                        <li><a href="#" className="hover:text-white">Makeup</a></li>
                                        <li><a href="#" className="hover:text-white">Haircare</a></li>
                                        <li><a href="#" className="hover:text-white">Body</a></li>
                                        <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li><a href="#" className="hover:text-white">Customer Service</a></li>
                                        <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                                        <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
                                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                                    <p className="text-gray-400 mb-4">
                                        Subscribe for exclusive offers and beauty tips
                                    </p>
                                    <div className="flex">
                                        <input 
                                            type="email" 
                                            placeholder="Your email" 
                                            className="px-4 py-2 rounded-l w-full text-gray-700"
                                        />
                                        <button className="bg-pink-600 hover:bg-pink-700 px-4 rounded-r">
                                            <i className="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                                <p className="text-gray-400">© 2023 Luxe Beauty. All rights reserved.</p>
                                <div className="flex space-x-6 mt-4 md:mt-0">
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
