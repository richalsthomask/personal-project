import { motion } from "framer-motion";

export default function GameWonScreen({ onReply }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-500/20 text-white z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center p-8 border border-white/20 rounded-lg bg-black shadow-[0_0_10px_rgba(255,255,255,0.1)] max-w-md font-mono"
      >
        <h1 className="text-4xl font-bold tracking-widest mb-4">YOU WON</h1>
        <p className="text-gray-300 mb-6 text-sm">
          Victory achieved. Press the button to restart.
        </p>

        <button
          onClick={onReply}
          className="px-5 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 text-sm tracking-wide uppercase cursor-pointer"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
}
