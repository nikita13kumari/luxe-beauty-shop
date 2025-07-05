function Cart({ isOpen, cartItems, closeCart, removeFromCart, updateQuantity }) {
            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            
            return (
                <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart}></div>
                    <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
                                <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            
                            {cartItems.length === 0 ? (
                                <div className="text-center py-10">
                                    <i className="fas fa-shopping-cart text-5xl text-gray-300 mb-4"></i>
                                    <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
                                    <button 
                                        onClick={closeCart}
                                        className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-700 transition"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="cart-item flex items-center border-b pb-4">
                                                <div className="w-16 h-16 rounded mr-4 overflow-hidden">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.name} 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="text-pink-600 font-semibold">${item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex items-center border rounded">
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <i className="fas fa-minus text-xs"></i>
                                                        </button>
                                                        <span className="px-2">{item.quantity}</span>
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                                        >
                                                            <i className="fas fa-plus text-xs"></i>
                                                        </button>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="ml-4 text-red-500 hover:text-red-700"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 border-t pt-4">
                                        <div className="flex justify-between mb-2">
                                            <span>Subtotal:</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span>Shipping:</span>
                                            <span>{total > 50 ? 'FREE' : '$5.99'}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
                                            <span>Total:</span>
                                            <span>${(total > 50 ? total : total + 5.99).toFixed(2)}</span>
                                        </div>
                                        <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
