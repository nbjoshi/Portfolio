import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Camera, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const travelPhotos = [
  { src: "/travels/nyc.png", location: "New York City", id: "nyc" },
  { src: "/travels/hungary.png", location: "Hungary", id: "hungary" },
  { src: "/travels/hungary2.png", location: "Hungary", id: "hungary2" },
  { src: "/travels/europe1.png", location: "Europe", id: "europe1" },
  { src: "/travels/europe2.png", location: "Europe", id: "europe2" },
  { src: "/travels/dresden.png", location: "Dresden", id: "dresden" },
  {
    src: "/travels/dresden_castle.png",
    location: "Dresden Castle",
    id: "dresden_castle",
  },
  {
    src: "/travels/berlin_wall.png",
    location: "Berlin Wall",
    id: "berlin_wall",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Travels() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const currentIndex = selectedPhoto
    ? travelPhotos.findIndex((p) => p.src === selectedPhoto)
    : -1;

  const navigatePhoto = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % travelPhotos.length
        : (currentIndex - 1 + travelPhotos.length) % travelPhotos.length;
    setSelectedPhoto(travelPhotos[newIndex].src);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIndex === -1) return;
        const newIndex =
          (currentIndex - 1 + travelPhotos.length) % travelPhotos.length;
        setSelectedPhoto(travelPhotos[newIndex].src);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIndex === -1) return;
        const newIndex = (currentIndex + 1) % travelPhotos.length;
        setSelectedPhoto(travelPhotos[newIndex].src);
      } else if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  return (
    <div className="min-h-full relative overflow-hidden">
      {/* Simple Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-8 pt-12 pb-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Camera className="w-12 h-12 text-white" />
          </motion.div>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
              Travels
            </h1>
            <p className="text-[#B3B3B3] text-lg">
              Captured moments from around the world
            </p>
          </div>
        </div>
      </motion.div>

      {/* Polaroid Photo Grid - Masonry Style */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {travelPhotos.map((photo, index) => {
            return (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  zIndex: 10,
                }}
                className="cursor-pointer group"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-4 pb-6 shadow-2xl rounded-sm relative h-full">
                  {/* Polaroid Image */}
                  <div
                    className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden mb-3"
                    style={{ zIndex: 10 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.location}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ zIndex: 1 }}
                    />
                    {/* Vintage Photo Border */}
                    <div
                      className="absolute inset-0 border-4 border-white/50 pointer-events-none"
                      style={{ zIndex: 2 }}
                    />
                  </div>

                  {/* Camera Shutter Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0, scale: 1 }}
                    whileHover={{ opacity: 0.1, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: 5 }}
                  />

                  {/* Polaroid Label */}
                  <div
                    className="flex items-center gap-2 text-[#333] relative"
                    style={{ zIndex: 10 }}
                  >
                    <MapPin className="w-10 h-10" />
                    <p className="text-lg font-bold">{photo.location}</p>
                  </div>

                  {/* Photo Number Badge */}
                  <div
                    className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-mono"
                    style={{ zIndex: 30 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("prev");
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("next");
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                <div className="relative w-full h-[80vh] bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <Image
                    src={selectedPhoto}
                    alt="Travel photo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="text-white text-lg">
                    {
                      travelPhotos.find((p) => p.src === selectedPhoto)
                        ?.location
                    }
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
