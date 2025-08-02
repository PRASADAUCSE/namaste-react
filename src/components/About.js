import User from "./User";
// Removed the import for UserClass as we are no longer using it.

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-4xl">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                    About this Epic App!
                </h1>
                <h2 className="text-xl text-gray-700 mb-8">
                    Hey, I'm Prasad, and this is my recent React project. A clone of Swiggy. Because, you know, "JavaScript is NOT a rocket science."
                </h2>
                
                <div className="mt-8 space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg shadow-md border border-indigo-200">
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">My "React" Journey:</h3>
                        <p className="text-gray-600 mt-4">
                            Started from the bottom, now we're here. Learning React with the legendary Namaste React series. The best part? No boring slides. Just pure code and "Namaste, friends!"
                        </p>
                        <p className="text-gray-600 mt-4">
                            My progress is like that one meme with the brain expanding.
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

export default About;
