        function ProductCard({ product, addToCart }) {
            return (
                <div className="product-card bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                    <div className="h-56 overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                            <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-1 rounded">
                                {product.category}
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <i 
                                    key={i} 
                                    className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                ></i>
                            ))}
                            <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
                        </div>
                        <div className="mt-auto flex justify-between items-center">
                            <span className="font-bold text-pink-600">${product.price.toFixed(2)}</span>
                            <button 
                                onClick={() => addToCart(product)}
                                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-lg text-sm transition flex items-center"
                            >
                                <i className="fas fa-shopping-cart mr-2"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
