import React, { useState, useRef, useEffect } from 'react';
import MediaItem from './MediaItem';
import './Feed.css';

function Feed({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Minimum swipe distance (in px) to trigger a swipe
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > minSwipeDistance;
    const isSwipeDown = distance < -minSwipeDistance;

    if (isSwipeUp && currentIndex < media.length - 1 && !transitioning) {
      // Swipe up - next video
      setTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setTransitioning(false), 300);
    }

    if (isSwipeDown && currentIndex > 0 && !transitioning) {
      // Swipe down - previous video
      setTransitioning(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setTransitioning(false), 300);
    }
  };

  // Preload next and previous videos
  useEffect(() => {
    const preloadIndices = [currentIndex - 1, currentIndex + 1];
    preloadIndices.forEach(index => {
      if (index >= 0 && index < media.length && media[index].type === 'video') {
        const video = document.createElement('video');
        video.src = media[index].url;
        video.preload = 'metadata';
      }
    });
  }, [currentIndex, media]);

  return (
    <div
      className="feed-container"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="feed-wrapper">
        {/* Only render current item */}
        <MediaItem
          key={media[currentIndex].id}
          item={media[currentIndex]}
          isActive={true}
        />
      </div>

      {/* Optional: Progress indicator */}
      <div className="progress-indicator">
        {currentIndex + 1} / {media.length}
      </div>
    </div>
  );
}

export default Feed;
