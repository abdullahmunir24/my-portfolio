import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    const onMouseMove = (e) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorBorder.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorBorder.style.opacity = '1';
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorBorder.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorBorderRef} className="custom-cursor-border" />
    </>
  );
};

export default CustomCursor;