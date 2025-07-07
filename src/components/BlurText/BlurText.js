import { useEffect, useRef, useState } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const splitText = () => {
    if (animateBy === 'words') {
      return text.split(' ').map((word, index) => (
        <span
          key={index}
          className="blur-word"
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transform: isVisible 
              ? 'translateY(0px)' 
              : direction === 'top' 
                ? 'translateY(-20px)' 
                : 'translateY(20px)',
            transition: `all 0.6s ease-out ${index * (delay / 1000)}s`
          }}
        >
          {word}{index < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ));
    } else {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="blur-char"
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transform: isVisible 
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