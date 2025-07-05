        function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
            return (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
                    <div className="flex flex-wrap gap-2">
                        <button 
                            className={`category-btn px-4 py-2 rounded-full ${activeCategory === 'all' ? 'active bg-pink-600 text-white' : 'bg-white'}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All Products
                        </button>
                        {categories.map(category => (
                            <button 
                                key={category}
                                className={`category-btn px-4 py-2 rounded-full capitalize ${activeCategory === category ? 'active bg-pink-600 text-white' : 'bg-white'}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
