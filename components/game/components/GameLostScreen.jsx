import { motion } from "framer-motion";

export default function GameLostScreen({ onRetry }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-500/20 text-white z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center p-8 border border-white/20 rounded-lg bg-black shadow-[0_0_10px_rgba(255,255,255,0.1)] max-w-md font-mono"
      >
        <h1 className="text-4xl font-bold tracking-widest mb-4 text-red-500">
          YOU LOST
        </h1>
        <p className="text-gray-300 mb-6 text-sm">
          Game over. Want to try again?
        </p>

        <button
          onClick={onRetry}
          className="px-5 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 text-sm tracking-wide uppercase cursor-pointer"
        >
          Retry
        </button>
      </motion.div>
    </div>
  );
}
