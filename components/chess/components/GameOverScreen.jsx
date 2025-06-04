import { motion } from "framer-motion";

export default function GameOverScreen({ winner, onRestart }) {
  const winnerText = winner === "white" ? "White Wins" : "Black Wins";

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-black shadow-lg max-w-sm w-full"
      >
        <h1 className="text-3xl font-semibold mb-2">{winnerText}</h1>
        <p className="text-gray-400 text-sm mb-6">
          Checkmate. The game is over.
        </p>

        <button
          onClick={onRestart}
          className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium cursor-pointer"
        >
          Restart Game
        </button>
      </motion.div>
    </div>
  );
}
