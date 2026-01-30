import React, { useEffect, useState } from "react";
import "./Toast.css";

export type ToastType = "success" | "error" | "info";

type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div
      className={`
        toast-wrapper
        toast-${type}
        ${visible ? "toast-visible" : "toast-hidden"}
    `}
    >
      {message}
      {showCloseButton && (
        <button onClick={handleClose} className="toast-closeButton">
          ❌
        </button>
      )}
    </div>
  );
};
