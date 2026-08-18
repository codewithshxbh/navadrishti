'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ABOUT_VIDEOS = [
  '/videos/1.mp4',
  '/videos/2.mp4',
  '/videos/3.mp4',
  '/videos/4.mp4',
  '/videos/5.mp4',
] as const;

const FADE_MS = 500;
const PRE_END_SECONDS = 0.45;

function videoMatches(video: HTMLVideoElement, src: string) {
  return video.currentSrc.endsWith(src) || video.getAttribute('src') === src;
}

function waitUntilPlayable(video: HTMLVideoElement) {
  if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const done = () => {
      video.removeEventListener('canplay', done);
      video.removeEventListener('canplaythrough', done);
      resolve();
    };
    video.addEventListener('canplay', done);
    video.addEventListener('canplaythrough', done);
  });
}

export default function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  const layerARef = useRef<HTMLVideoElement>(null);
  const layerBRef = useRef<HTMLVideoElement>(null);
  const activeIndexRef = useRef(0);
  const activeLayerRef = useRef(0);
  const switchingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);

  const getLayer = useCallback((layer: number) => {
    return layer === 0 ? layerARef.current : layerBRef.current;
  }, []);

  const preload = useCallback(
    (layer: number, src: string) => {
      const video = getLayer(layer);
      if (!video || videoMatches(video, src)) return;
      video.src = src;
      video.load();
    },
    [getLayer]
  );

  useEffect(() => {
    const front = layerARef.current;
    const back = layerBRef.current;
    if (front) {
      front.src = ABOUT_VIDEOS[0];
      const playPromise = front.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay may be blocked until user interaction; muted should usually allow it.
        });
      }
    }
    if (back) {
      back.src = ABOUT_VIDEOS[1];
      back.load();
    }
  }, []);

  const swapToNext = useCallback(async () => {
    if (switchingRef.current) return;
    switchingRef.current = true;

    const currentIndex = activeIndexRef.current;
    const currentLayer = activeLayerRef.current;
    const nextIndex = (currentIndex + 1) % ABOUT_VIDEOS.length;
    const nextLayer = currentLayer === 0 ? 1 : 0;
    const currentVideo = getLayer(currentLayer);
    const nextVideo = getLayer(nextLayer);
    const nextSrc = ABOUT_VIDEOS[nextIndex];
    const followingSrc = ABOUT_VIDEOS[(nextIndex + 1) % ABOUT_VIDEOS.length];

    if (!nextVideo || !nextSrc || !followingSrc) {
      switchingRef.current = false;
      return;
    }

    if (!videoMatches(nextVideo, nextSrc)) {
      nextVideo.src = nextSrc;
      nextVideo.load();
    }

    await waitUntilPlayable(nextVideo);
    nextVideo.currentTime = 0;

    try {
      await nextVideo.play();
    } catch {
      switchingRef.current = false;
      return;
    }

    activeIndexRef.current = nextIndex;
    activeLayerRef.current = nextLayer;
    setActiveIndex(nextIndex);
    setActiveLayer(nextLayer);

    window.setTimeout(() => {
      currentVideo?.pause();
      preload(currentLayer, followingSrc);
      switchingRef.current = false;
    }, FADE_MS);
  }, [getLayer, preload]);

  const handleNearEnd = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (switchingRef.current) return;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    if (video.duration - video.currentTime <= PRE_END_SECONDS) {
      void swapToNext();
    }
  };

  return (
    <section
      id="about"
      className="about"
      ref={sectionRef}
      role="region"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-split">
          <motion.div
            className="about-split-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.55 }}
          >
            <h2 id="about-title" className="section-title about-split-title">
              About Navadrishti LLP
            </h2>
            <p>
              Established in 2025, Navadrishti LLP is a technology and
              consulting company focused on building practical solutions for
              complex real-world challenges. We combine technology, domain
              expertise and on-ground understanding to help organizations
              improve how they plan, coordinate, execute and measure their work.
              Through our products and consulting engagements, we work with
              organizations to turn operational challenges into structured,
              scalable and workable solutions.
            </p>
            <p>
              Our journey begins with the social-impact ecosystem, where our
              first product connects NGOs, companies, individuals and other
              stakeholders through a technology platform designed to improve
              coordination and access to trusted information. As Navadrishti
              grows, we aim to extend our technology foundation and consulting
              expertise into other domains where better coordination, reliable
              information and effective execution can create meaningful impact.
            </p>
            <div className="about-doc-row">
              <a
                className="about-doc-btn about-doc-btn--logo"
                href="/docs/DPIIT_NAVADRISHTI_LLP.pdf"
                download="Navadrishti-LLP-DPIIT-Certificate.pdf"
                type="application/pdf"
                aria-label="Download DPIIT Certificate PDF"
              >
                <img
                  src="/photos/dpiit.png"
                  alt=""
                  className="about-doc-logo about-doc-logo--dpiit"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <span>DPIIT Certificate</span>
              </a>
              <a
                className="about-doc-btn about-doc-btn--logo"
                href="/docs/startinup-certificate.pdf"
                download="Navadrishti-LLP-StartinUP-Certificate.pdf"
                type="application/pdf"
                aria-label="Download StartinUP Certificate PDF"
              >
                <img
                  src="/photos/startinup.png"
                  alt=""
                  className="about-doc-logo about-doc-logo--startinup"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <span>StartinUP Certificate</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-split-media"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div
              className="about-video-box"
              aria-label="Navadrishti field and impact footage"
            >
              <video
                ref={layerARef}
                className={`about-video${activeLayer === 0 ? ' is-active' : ''}`}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={activeLayer === 0 ? handleNearEnd : undefined}
                onEnded={
                  activeLayer === 0 ? () => void swapToNext() : undefined
                }
                aria-hidden={activeLayer !== 0}
              />
              <video
                ref={layerBRef}
                className={`about-video${activeLayer === 1 ? ' is-active' : ''}`}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={activeLayer === 1 ? handleNearEnd : undefined}
                onEnded={
                  activeLayer === 1 ? () => void swapToNext() : undefined
                }
                aria-hidden={activeLayer !== 1}
              />
              <div className="about-video-dots" aria-hidden="true">
                {ABOUT_VIDEOS.map((src, index) => (
                  <span
                    key={src}
                    className={`about-video-dot${index === activeIndex ? ' active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
