import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);


  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="bg-gray-200 h-48 rounded-lg mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Marketplace</h1>
            <p className="text-slate-500">Curated products just for you</p>
          </div>
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {products.length} Items Found
          </span>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              
              {/* Image Section */}
              <div className="relative h-64 bg-white p-8 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
                {item.rating.rate > 4 && (
                  <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-amber-200 text-amber-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase shadow-sm">
                    ✨ Top Rated
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold text-indigo-500 uppercase mb-2 tracking-widest">{item.category}</span>
                <h4 className="text-slate-800 font-bold text-md line-clamp-2 mb-4 leading-snug h-12">
                  {item.title}
                </h4>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Price</span>
                    <span className="text-xl font-black text-slate-900">${item.price}</span>
                  </div>
                  <button className="bg-slate-900 hover:bg-indigo-600 text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}