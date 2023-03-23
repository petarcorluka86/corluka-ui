import Box, { BoxProps } from "@components/Box";
import { ZIndex } from "@utils/spacing";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { useTheme } from "styled-components";

interface Props {
  isOpen?: boolean;
  onClose?(): void;
  boxProps?: BoxProps;
}

const Modal: React.FC<Props & { children: React.ReactNode }> = ({
  children,
  isOpen,
  onClose,
  boxProps,
}) => {
  const theme = useTheme();

  if (typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          animate={{
            backgroundColor: theme.colors.overlay,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            backgroundColor: "transparent",
          }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            inset: 0,
            overflow: "hidden",
            zIndex: ZIndex.Modal,
            willChange: "background-color, backdrop-filter",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2 } }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box bg="surface1" p="lg" br="lg" {...boxProps}>
              {children}
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
