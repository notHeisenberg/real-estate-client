import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({ src, inView, initialMuted = true, autoPlay = false }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = React.useState(initialMuted);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  // Initial setup
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        setHasInteracted(true);
        if (!initialMuted) {
          videoRef.current.muted = false;
          setIsMuted(false);
        }
      }
    };

    // Add listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [hasInteracted, initialMuted]);

  // Autoplay setup
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay failed:", error);
      });
    }
  }, [autoPlay]);

  // Handle in-view behavior
  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    } else if (!inView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [inView]);

  const handleFullScreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (videoRef.current) {
      videoRef.current.muted = newMutedState;
    }
  };

  // Add an unmute prompt if the video should be unmuted but hasn't had user interaction
  const showUnmutePrompt = !hasInteracted && !initialMuted;

  return (
    <div className="relative w-full aspect-video">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        loop
        muted={isMuted}
        onClick={handlePlayPause}
        autoPlay={autoPlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Unmute prompt */}
      {showUnmutePrompt && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                videoRef.current.muted = false;
                setIsMuted(false);
                setHasInteracted(true);
              }
            }}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Click to Unmute
          </button>
        </div>
      )}
      
      {/* Fullscreen button */}
      <button 
        onClick={handleFullScreen}
        className="absolute bottom-4 right-4 z-10 bg-transparent hover:bg-black/50 bg-opacity-50 p-2 rounded-3xl hover:bg-opacity-75 transition-all duration-300"
        aria-label="View fullscreen"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="white" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" 
          />
        </svg>
      </button>

      {/* Mute/Unmute button */}
      <button 
        onClick={handleMuteToggle}
        className="absolute bottom-4 right-16 z-10 bg-transparent hover:bg-black/50 p-2 rounded-3xl transition-all duration-300"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="white" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="white" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>

      {/* Play/Pause overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
        onClick={handlePlayPause}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="white" 
          viewBox="0 0 24 24" 
          className="w-16 h-16"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* Title and Description */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-libre-baskerville my-6 font-medium">
              {t('experience.title', 'ENJOY A UNIQUE EXPERIENCE')}
            </h2>
            <p className="text-lg font-didot text-gray-700 font-bold">
              {t('experience.description', '"We are passionate about providing luxury services and meeting all your demands with excellent and dedicated services".')}
            </p>
          </div>

          {/* Video Players Container */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mt-8">
            <VideoPlayer 
              src="/videos/experience_1.mp4" 
              inView={inView} 
              initialMuted={true} 
              autoPlay={true} 
            />
            <VideoPlayer 
              src="/videos/experience_2.mp4" 
              inView={inView} 
              initialMuted={false} 
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 