import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const sampleProjects = [
  {
    title: "RUNRUN",
    url: "https://runrun.io/en",
    description:
      "A platform to book and manage stadiums and sports facilities in UAE.",
    imageUrl: "/projects/runrun.png",
  },
  {
    title: "Runrun Vendor Portal",
    url: "https://vendor.runrun.io/sign-in",
    description: "Vendor management portal for Runrun platform.",
    imageUrl: "/projects/runrun_vendor.png",
  },
  {
    title: "Runrun Support Portal",
    url: "https://support.runrun.io/login",
    description: "Support portal for Runrun platform users.",
    imageUrl: "/projects/runrun_customer.png",
  },
  {
    title: "ArikeCare",
    url: "https://arikecare.org/",
    description: "Website for a charity organization.",
    imageUrl: "/projects/arikecare.png",
  },
  {
    title: "ADR",
    url: "https://adr-alpha.vercel.app/",
    description:
      "A platform for filing and resolving legal disputes private and online.",
    imageUrl: "/projects/adr.png",
  },
  {
    title: "HelpSquad",
    url: "https://helpsquad.us/",
    description:
      "A handyman service platform connecting users with local professionals in USA.",
    imageUrl: "/projects/helpsquad.png",
  },
  {
    title: "Roel",
    url: "https://roel.pages.dev/",
    description: "A company website for a petrolium product company.",
    imageUrl: "/projects/roel.png",
  },
  {
    title: "Zartek Technologies",
    url: "https://www.zartek.in/",
    description: "Corporate website for Zartek Technologies.",
    imageUrl: "/projects/zartek.png",
  },
  {
    title: "Doorz AI",
    url: "https://beta.doorz.ai/",
    description:
      "An all in one platform for home owner association managers and members.",
    imageUrl: "/projects/doorz.png",
  },
  {
    title: "LQ Home",
    url: "https://home.mylq.app/",
    description: "A learning platform",
    imageUrl: "/projects/lq.png",
  },
  //   {
  //     title: "Epigenetics India",
  //     url: "https://richalsthomask.github.io/epigeneticsIndia",
  //     description: "A website for Epigenetics India conference.",
  //     imageUrl: "/projects/epigenetics.png",
  //   },
  //   {
  //     title: "Lanebite (mobile)",
  //     url: "https://www.lanebite.com/",
  //     description: "An online streetfood listing and rating platform.",
  //     imageUrl: "/projects/lanebite.png",
  //   },
];

export default function SampleProjects({ contentRefs }) {
  return (
    <motion.div
      ref={(el) => (contentRefs.current[3] = el)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsCard projects={sampleProjects} />
    </motion.div>
  );
}

function ProjectsCard({ projects }) {
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);
  const accumulatedScroll = useRef(0);

  // Horizontal scroll handler with continuous movement
  useEffect(() => {
    const handleWheel = (e) => {
      // Check if horizontal scroll (shift + wheel or touchpad horizontal)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();

        const scrollAmount = e.deltaX !== 0 ? e.deltaX : e.deltaY;

        // Accumulate scroll amount
        accumulatedScroll.current += scrollAmount / 100; // Sensitivity adjustment

        // Calculate new position
        const newProgress = accumulatedScroll.current;
        const totalProjects = projects.length;

        // Normalize to project index
        let newIndex = Math.floor(Math.abs(newProgress)) % totalProjects;
        if (newProgress < 0) {
          newIndex = totalProjects - 1 - newIndex;
        }

        // Update current project if changed
        if (newIndex !== currentProject) {
          setCurrentProject(newIndex);
        }

        // Store fractional progress for smooth interpolation
        setScrollProgress(newProgress);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheel);
      }
    };
  }, [projects.length, currentProject]);

  const getCardPosition = (index) => {
    // Calculate position based on scroll progress
    const totalProjects = projects.length;
    const effectiveProgress = scrollProgress % totalProjects;

    let diff = index - effectiveProgress;

    // Normalize difference to be between -total/2 and total/2
    while (diff > totalProjects / 2) diff -= totalProjects;
    while (diff < -totalProjects / 2) diff += totalProjects;

    return diff;
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 min-h-[700px] overflow-hidden">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Projects</h2>

      {/* 3D Carousel Container */}
      <div
        ref={carouselRef}
        className="relative h-[500px] flex items-center justify-center perspective-1000 overflow-visible"
      >
        <div
          className="relative w-full h-full"
          style={{ perspective: "1500px" }}
        >
          {projects.map((project, index) => {
            const position = getCardPosition(index);
            const isCurrent = Math.abs(position) < 0.5;
            const isVisible = Math.abs(position) <= 2.5;

            if (!isVisible) return null;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 w-[500px] cursor-pointer"
                initial={false}
                animate={{
                  x: position * 350 - 250,
                  y: -200 + Math.abs(position) * 30,
                  z: -Math.abs(position) * 300,
                  rotateY: position * -35,
                  scale: isCurrent ? 1.2 : 0.75 - Math.abs(position) * 0.05,
                  opacity: isCurrent ? 1 : 0.9 - Math.abs(position) * 0.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 35,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: Math.round(10 - Math.abs(position) * 10),
                }}
                onClick={() => {
                  if (!isCurrent) {
                    accumulatedScroll.current = index;
                    setScrollProgress(index);
                    setCurrentProject(index);
                  }
                }}
                whileHover={
                  !isCurrent
                    ? {
                        scale: 0.8 - Math.abs(position) * 0.05,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
              >
                <div
                  className={`border-none bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-2xl overflow-hidden border-2 transition-all duration-300 ${
                    isCurrent ? "shadow-gray-500/50" : ""
                  }`}
                  style={{
                    boxShadow: isCurrent
                      ? "0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)"
                      : "0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div className="relative h-80 bg-gray-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {project.title}
                      {isCurrent && (
                        <Link
                          href={project.url}
                          target="_blank"
                          className="h-6 w-6 text-sm flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          →
                        </Link>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
