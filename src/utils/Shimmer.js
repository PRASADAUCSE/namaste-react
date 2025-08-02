const Shimmer = () => {
    return (
        // The main container for the shimmer effect
        <div className="flex flex-wrap justify-center p-4">
            {/* Array.from is a simple way to create multiple shimmer cards */}
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="m-4 p-4 w-64 h-80 rounded-lg shadow-md bg-gray-200 animate-pulse">
                    {/* Placeholder for the image */}
                    <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
                    {/* Placeholder for the title */}
                    <div className="h-6 w-3/4 bg-gray-300 rounded-lg mb-2"></div>
                    {/* Placeholder for other text lines */}
                    <div className="h-4 w-1/2 bg-gray-300 rounded-lg mb-2"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded-lg"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
