import { useState, useEffect, useRef } from 'react';

export const useTyper = (strings = [], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const [currentText, setCurrentText] = useState(prefersReducedMotion ? (strings[0] || '') : '');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Show full text without animation
      return;
    }

    const type = () => {
      const currentString = strings[currentIndex];

      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
          timeoutRef.current = setTimeout(type, typingSpeed);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
          timeoutRef.current = setTimeout(type, deletingSpeed);
        } else {
          // Move to next string
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      }
    };

    timeoutRef.current = setTimeout(type, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentIndex, isDeleting, strings, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  return currentText;
};
