'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export interface PingPongVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * PingPongVideo
 * Seamlessly loops video forward to end, then reverses smoothly back to the beginning.
 * Eliminates harsh cut seams and creates hypnotic ambient motion.
 */
export const PingPongVideo = forwardRef<HTMLVideoElement, PingPongVideoProps>(
  function PingPongVideo({ src, poster, className = '', ...props }, ref) {
    const innerRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLVideoElement);

    useEffect(() => {
      const v = innerRef.current;
      if (!v) return;

      let forward = true;
      let animId: number;
      let active = true;

      const stepReverse = () => {
        if (!active || !v) return;
        if (v.currentTime <= 0.08) {
          v.currentTime = 0;
          forward = true;
          v.play().catch(() => {});
        } else {
          v.currentTime = Math.max(0, v.currentTime - 0.04);
          animId = requestAnimationFrame(stepReverse);
        }
      };

      const onTimeUpdate = () => {
        if (forward && v.duration && v.currentTime >= v.duration - 0.08) {
          v.pause();
          forward = false;
          stepReverse();
        }
      };

      const onEnded = () => {
        if (forward) {
          v.pause();
          forward = false;
          stepReverse();
        }
      };

      v.addEventListener('timeupdate', onTimeUpdate);
      v.addEventListener('ended', onEnded);

      return () => {
        active = false;
        cancelAnimationFrame(animId);
        v.removeEventListener('timeupdate', onTimeUpdate);
        v.removeEventListener('ended', onEnded);
      };
    }, [src]);

    return (
      <video
        ref={innerRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={className}
        {...props}
      />
    );
  }
);

export default PingPongVideo;

