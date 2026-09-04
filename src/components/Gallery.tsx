import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GalleryProps {
  images: string[];
  alt: string;
  containerStyles?: string;
}

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15.2 15.2 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10.5 7.8v5.4M7.8 10.5h5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const Frame = ({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative flex items-center justify-center overflow-hidden rounded-md bg-black/40 border border-secondary/20 hover:border-secondary/50 transition-colors cursor-zoom-in ${className ?? ""}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-contain" />
    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="text-secondary">
        <ZoomIcon />
      </div>
      <span className="font-robotoMono text-secondary text-[10px] sm:text-xs uppercase tracking-widest">
        View
      </span>
    </div>
  </button>
);

const Gallery = ({ images, alt, containerStyles = "" }: GalleryProps) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      {images.length === 1 ? (
        <Frame
          src={images[0]}
          alt={alt}
          className={containerStyles}
          onClick={() => setLightboxSrc(images[0])}
        />
      ) : (
        <div className={`flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 ${containerStyles}`}>
          {images.map((src, i) => (
            <Frame
              key={i}
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              className="shrink-0 snap-start h-full aspect-[3/4]"
              onClick={() => setLightboxSrc(src)}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-6 sm:p-12 cursor-zoom-out"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.img
              key={lightboxSrc}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxSrc}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-md border border-secondary/30 shadow-[0_0_60px_-10px_rgba(77,216,255,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 flex items-center justify-center w-9 h-9 rounded-full border border-secondary/40 bg-black/60 text-secondary hover:bg-secondary/20 transition-colors font-robotoMono text-lg"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
