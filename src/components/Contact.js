const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-4xl">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600 mb-4">
                    Get in Touch!
                </h1>
                <h2 className="text-xl text-gray-700 mb-8">
                    "This is an over-engineered solution for a simple contact page."
                </h2>
                
                <div className="mt-8 space-y-6">
                    <div className="bg-teal-50 p-6 rounded-lg shadow-md border border-teal-200">
                        <h3 className="text-2xl font-bold text-teal-700 mb-2">My Socials:</h3>
                        
                        <p className="text-gray-600 mt-4">
                            You can find me everywhere as @Prasad.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
                        <h3 className="text-2xl font-bold text-green-700 mb-2">My Email:</h3>
                        <h3 className="text-2xl font-style: italic text-blue-700 mb-2">jakkaprasad456@gmail.com</h3>
                        <p className="text-gray-600 mt-4">
                            Please don't spam me with emails.
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-sm text-gray-500">
                    Built with React, Tailwind CSS, and a whole lot of coffee. Special thanks to the Namaste React community for the mental model.
                </p>
            </div>
        </div>
    );
};

export default Contact;
