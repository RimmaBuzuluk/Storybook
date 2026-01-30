import React, { useEffect, useState } from "react";
import "./Feedback.css";

export type FeedbackType = "success" | "error" | "info";

type FeedbackProps = {
  message: string;
  type?: FeedbackType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
};

export const Feedback: React.FC<FeedbackProps> = ({
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
        feedback-wrapper
        feedback-${type}
        ${visible ? "feedback-visible" : "feedback-hidden"}
    `}
    >
      {message}
      {showCloseButton && (
        <button onClick={handleClose} className="feedback-closeButton">
          ❌
        </button>
      )}
    </div>
  );
};
