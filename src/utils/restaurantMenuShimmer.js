const RestaurantMenuShimmer = () => {
    return(
        <div className="shimmer-menu-container animate-pulse p-4">
            <div className="bg-gray-200 h-10 w-2/3 mx-auto mt-8 rounded-lg mb-4"></div>
            <div className="bg-gray-200 h-6 w-1/2 mx-auto rounded-lg mb-8"></div>
            
           
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="w-10/12 m-auto p-4 my-6 bg-gray-200 rounded-lg shadow-md">
                    <div className="bg-gray-300 h-8 w-1/4 rounded-lg mb-4"></div>
                    
                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-4 border-b border-gray-300">
                            <div className="w-9/12">
                                <div className="bg-gray-300 h-5 w-3/4 rounded-lg mb-2"></div>
                                <div className="bg-gray-300 h-4 w-1/2 rounded-lg"></div>
                            </div>
                            <div className="w-3/12 ml-4 bg-gray-300 h-20 rounded-xl"></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};


export default RestaurantMenuShimmer;
