import { useState } from "react";
import { SignIn } from "@clerk/clerk-react";
import {
  FaPlay,
  FaUsers,
  FaVideo,
  FaBroadcastTower,
  FaStar,
  FaGlobe,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
              <FaPlay className="text-white text-lg ml-0.5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Streamwave
            </span>
          </div>
          <button
            onClick={toggleModal}
            className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Sign In
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10">
            <HiSparkles className="text-yellow-400" />
            <span className="text-sm font-medium">
              The Future of Video Streaming
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 max-w-5xl leading-[1.1] tracking-tight">
            Watch.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-500">
              {" "}
              Stream.{" "}
            </span>
            Connect.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Discover millions of videos, connect with creators, and join live
            streams. Your ultimate entertainment destination awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={toggleModal}
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-500/30 flex items-center justify-center gap-2"
            >
              <FaPlay className="text-sm group-hover:translate-x-0.5 transition-transform" />
              Start Watching Free
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full text-lg transition-all backdrop-blur-sm border border-white/10 hover:border-white/20">
              Explore Content
            </button>
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">10M+</p>
              <p className="text-sm text-gray-500 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500K+</p>
              <p className="text-sm text-gray-500 mt-1">Creators</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">1B+</p>
              <p className="text-sm text-gray-500 mt-1">Videos Watched</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">150+</p>
              <p className="text-sm text-gray-500 mt-1">Countries</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 italic">
            * These numbers are totally made up. We're manifesting here 🚀
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-500">Streamwave</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience streaming like never before with features built for the
              modern viewer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FaVideo className="text-2xl" />}
              title="4K Ultra HD"
              description="Crystal-clear streaming with adaptive quality that adjusts to your connection speed."
              color="red"
            />
            <FeatureCard
              icon={<FaUsers className="text-2xl" />}
              title="Creator Hub"
              description="Connect with millions of creators and discover trending content from around the globe."
              color="purple"
            />
            <FeatureCard
              icon={<FaBroadcastTower className="text-2xl" />}
              title="Live Streams"
              description="Join real-time broadcasts with interactive chat and live reactions."
              color="blue"
            />
            <FeatureCard
              icon={<FaStar className="text-2xl" />}
              title="Personalized"
              description="AI-powered recommendations that learn your preferences and serve content you'll love."
              color="yellow"
            />
            <FeatureCard
              icon={<FaGlobe className="text-2xl" />}
              title="Global Content"
              description="Access content from 150+ countries with subtitles in multiple languages."
              color="green"
            />
            <FeatureCard
              icon={<HiSparkles className="text-2xl" />}
              title="No Ads"
              description="Enjoy uninterrupted viewing with our premium ad-free experience."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
              Join millions of viewers and creators on the fastest-growing video
              platform.
            </p>
            <button
              onClick={toggleModal}
              className="px-10 py-4 bg-white text-red-600 font-bold rounded-full text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 md:px-12 lg:px-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <FaPlay className="text-white text-sm ml-0.5" />
            </div>
            <span className="font-bold text-lg">Streamwave</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Streamwave. Built by Saket Kothari.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Modal for Clerk Sign-In */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className="bg-[#1a1a1a] rounded-3xl shadow-2xl w-full max-w-md p-8 relative border border-white/10"
            style={{ animation: "fadeInScale 0.2s ease-out" }}
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <IoClose className="text-2xl" />
            </button>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                <FaPlay className="text-white text-base ml-0.5" />
              </div>
              <span className="text-2xl font-bold">Streamwave</span>
            </div>
            <SignIn />
          </div>
        </div>
      )}

      <style>{`
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `}</style>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "red" | "purple" | "blue" | "yellow" | "green" | "pink";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  const colorClasses: Record<string, string> = {
    red: "bg-red-500/10 text-red-500 group-hover:bg-red-500/20",
    purple: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20",
    blue: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20",
    yellow: "bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20",
    green: "bg-green-500/10 text-green-500 group-hover:bg-green-500/20",
    pink: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500/20",
  };

  return (
    <div className="group bg-[#1a1a1a] p-7 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-[#1f1f1f] cursor-pointer">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${colorClasses[color]}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default LandingPage;
