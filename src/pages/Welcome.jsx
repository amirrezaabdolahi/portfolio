// AnimatedTextPage.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "AMIRREZA ABDOLLAHI";

// Each letter will bounce up into view
const letterAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 500,
      damping: 25,
      bounce: 0.5,
    },
  }),
};

const AnimatedTextPage = () => {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(false);
    }, 3000); // Disappear whole page after 4s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPage && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 5 }} // Increased zoom to 5x
          transition={{ duration: 1 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -50 }}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "clamp(1.3rem, 5vw, 4rem)",
                  borderBottom : '1px solid yellow',
                  userSelect : 'none'
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedTextPage;
