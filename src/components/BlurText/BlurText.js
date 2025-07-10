import { useEffect, useRef, useState } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  startDelay = 0,
  className = '',
  animateBy = 'words',
  direction = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start animation after startDelay
          const timer = setTimeout(() => {
            setShouldAnimate(true);
          }, startDelay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [startDelay]);

  const splitText = () => {
    if (animateBy === 'words') {
      const words = text.split(' ');
      return words.map((word, index) => (
        <span
          key={index}
          className="blur-word"
          style={{
            display: 'inline-block',
            opacity: shouldAnimate ? 1 : 0,
            filter: shouldAnimate ? 'blur(0px)' : 'blur(10px)',
            transform: shouldAnimate 
              ? 'translateY(0px)' 
              : direction === 'top' 
                ? 'translateY(-20px)' 
                : 'translateY(20px)',
            transition: `all 0.6s ease-out ${index * (delay / 1000)}s`,
            marginRight: index < words.length - 1 ? '0.25em' : '0'
          }}
        >
          {word}
        </span>
      ));
    } else {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="blur-char"
          style={{
            display: 'inline-block',
            opacity: shouldAnimate ? 1 : 0,
            filter: shouldAnimate ? 'blur(0px)' : 'blur(10px)',
            transform: shouldAnimate 
              ? 'translateY(0px)' 
              : direction === 'top' 
                ? 'translateY(-20px)' 
                : 'translateY(20px)',
            transition: `all 0.6s ease-out ${index * (delay / 1000)}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
  };

  return (
    <p ref={textRef} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {splitText()}
    </p>
  );
};

export default BlurText;