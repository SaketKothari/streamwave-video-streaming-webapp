import React, { useState } from 'react';
import { SignIn } from '@clerk/clerk-react';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-red-500">
          Welcome to Streamwave
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          Discover, stream, and engage with the content you love, all in one
          place.
        </p>
      </header>

      <section className="flex flex-col items-center text-center space-y-8 md:space-y-10">
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="🎥"
            title="Stream Content"
            description="Enjoy videos tailored to your preferences."
          />
          <FeatureCard
            icon="🔎"
            title="Discover Creators"
            description="Find creators and trending videos effortlessly."
          />
          <FeatureCard
            icon="📡"
            title="Join Live"
            description="Engage with live sessions and interact in real time."
          />
        </div>

        {/* Sign-In Button */}
        <button
          onClick={toggleModal}
          className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all"
        >
          Sign In to Get Started
        </button>
      </section>

      {/* Modal for Clerk Sign-In */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-red-500">
              Sign In to Streamwave
            </h2>
            <SignIn />
          </div>
        </div>
      )}

      <footer className="mt-16 text-sm text-gray-500">
        <p>
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-red-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-red-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-500">
      {title}
    </h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

export default LandingPage;
