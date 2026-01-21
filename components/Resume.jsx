import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "./ArrowIcon";
import SampleProjects from "./SampleProjects";

const resumePages = [
  {
    content: (
      <>
        <div>
          <Image
            src="/me.jpeg"
            alt="Richals Thomas"
            width={150}
            height={150}
            className="rounded-lg float-right ml-4 mb-2"
          />
          <h2 className="text-2xl font-semibold mb-4">Richals Thomas</h2>
          <p className="text-gray-600 mb-6">
            Frontend Developer with 5 years of experience in analysis, design
            and implementation of web applications with a strong focus on
            ReactJS, NextJS, HTML, CSS, JS and TS.
          </p>

          {[
            {
              title: "Thrissur, Kerala, India",
              url: "https://www.google.com/maps/place/Thrissur,+Kerala,+India",
              icon: "📍",
              href: "_blank",
            },
            {
              title: "7907644703",
              url: "tel:+917907644703",
              icon: "📞",
            },
            {
              title: "richalsthomask@gmail.com",
              url: "mailto:richalsthomask@gmail.com",
              icon: "📧",
            },
            {
              title: "Profile",
              url: "https://personal-project-sandy-iota.vercel.app/",
              icon: "🌐",
              target: "_blank",
            },
            {
              title: "LinkedIn",
              url: "https://www.linkedin.com/in/richals-thomas-3991021a5/",
              icon: (
                <Image
                  src="/linkdin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="mt-1"
                />
              ),
              target: "_blank",
            },
            {
              title: "richalsthomask",
              url: "https://github.com/richalsthomask",
              icon: (
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="mt-1"
                />
              ),
              target: "_blank",
            },
            {
              title: "richalsthomas",
              url: "https://github.com/richalsthomas",
              icon: (
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="mt-1"
                />
              ),
              target: "_blank",
            },
          ].map((link) => (
            <div key={link.title} className="flex">
              <Link
                href={link.url}
                target={link.target}
                className="hover:opacity-80 mt-2"
              >
                <span className="text-gray-500 flex align-middle">
                  {link.icon}
                  <div className="ml-2">{link.title}</div>
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex sm:justify-end align-middle gap-5 w-full mt-6 sm:-mt-10">
          <Link
            href="/Richals - Resume.pdf"
            target="_blank"
            className="hover:opacity-80 flex flex-col items-end"
          >
            <Image
              src="/pdf.png"
              alt="PDF"
              className="h-15 w-15"
              width={80}
              height={80}
            />
            <ArrowIcon className="h-4 w-4 text-[#DC5650] transform rotate-90 relative bottom-2" />
          </Link>
          <Link
            href="/Richals - Resume.docx"
            target="_blank"
            className="hover:opacity-80 flex flex-col items-end"
          >
            <Image
              src="/docx.png"
              alt="DOCX"
              className="h-15 w-15"
              width={80}
              height={80}
            />
            <ArrowIcon className="h-4 w-4 text-[#404F8B] transform rotate-90 relative bottom-2" />
          </Link>
        </div>
      </>
    ),
  },

  {
    title: "Experience",
    content: (
      <div className="text-gray-600 space-y-6">
        <div>
          <h3 className="font-semibold">Senior Web Developer</h3>
          <p className="text-sm text-gray-500">
            Soulxes Technologies | Jan 2025 – Present
          </p>

          <ul className="list-disc pl-6">
            <li>Development and upgrading web applications.</li>
            <li>Testing and maintaining existing web applications</li>
            <li>
              Enhance customer interactions for the application and add new
              features
            </li>
            <li>
              clearing doubts of junior developers and advising them on
              development
            </li>
            <li>
              setting up and maintaining deployments and deployment features
              like CI/CD
            </li>
            <li>Advising customers on feature possibility in their product</li>
            <li>
              coordinate with backend developer, designer and tester to push
              project progress forward
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Mid-senior Web Developer</h3>
          <p className="text-sm text-gray-500">
            Zartek Technologies | Jan 2024 – Dec 2024
          </p>

          <ul className="list-disc pl-6">
            <li>Development and upgrading web applications.</li>
            <li>Testing and maintaining existing web applications</li>
            <li>
              Customer interactions for the application enhancement and new
              features
            </li>
            <li>mentoring interns</li>
            <li>
              clearing doubts of junior developers and advising them on
              development
            </li>
            <li>checking code of interns and help them to bug fix</li>
            <li>
              setting up and maintaining deployments and deployment features
              like CI/CD
            </li>
            <li>Advising customers on feature possibility in their product</li>
            <li>
              coordinate with backend developer, designer and tester to push
              project progress forward
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Junior Frontend Developer</h3>
          <p className="text-sm text-gray-500">
            Hoverspaces | Jan 2021 – Jan 2024
          </p>
          <ul className="list-disc pl-6">
            <li>Developed web apps</li>
            <li>Maintained and tested features</li>
            <li>Customer interactions for enhancements</li>
          </ul>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
        <p className="text-gray-600">
          <span className="font-semibold">
            Bachelor’s Degree in Electrical and Electronics Engineering
          </span>{" "}
          – Calicut University I.E.T (2014 – 2018)
        </p>
      </div>
    ),
  },

  {
    title: "Skills",
    content: (
      <div className="flex flex-col gap-5 text-gray-600">
        <div>
          <h4 className="font-semibold">Operating System</h4>
          <p>Windows, MacOS</p>
        </div>

        <div>
          <h4 className="font-semibold">Programming Languages</h4>
          <p>JavaScript, TypeScript</p>
        </div>

        <div>
          <h4 className="font-semibold">Web Technologies</h4>
          <p>
            HTML, CSS, TailwindCSS, Bootstrap, Material UI, Antd, Redux, React
            Redux, Recoil, Zustand, Vite, JQuery, Server Side Rendering
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Frameworks</h4>
          <p>ReactJS, NextJS</p>
        </div>

        <div>
          <h4 className="font-semibold">Testing</h4>
          <p>Jest</p>
        </div>

        <div>
          <h4 className="font-semibold">Deployment Servers</h4>
          <p>
            Vercel, Netlify, AWS Amplify, AWS S3, Google Cloud Deploy, GitHub
            Pages, Heroku, Windows IIS
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Web Packages / Services</h4>
          <p>
            Firebase, Razerpay, Agora, Google OAuth, Lottie, Contentful,
            WYSIWYG, SlateJS, ChartJS, Recharts, Plotly.js, Leaflet
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Others</h4>
          <p>
            Git, npm, ESLint, Postman, REST API, GraphQL, Webpack, Docker, VS
            Code, Jira
          </p>
        </div>
      </div>
    ),
  },
];

const tabs = [
  { id: 0, label: "Profile" },
  { id: 1, label: "Experience" },
  { id: 2, label: "Skills" },
  { id: 3, label: "Projects" },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);
  const contentRefs = useRef([]);
  const isManualScroll = useRef(false);

  useEffect(() => {
    const observers = contentRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isManualScroll.current) {
            setActiveTab(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: "-100px 0px -100px 0px",
        },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const handleTabClick = (tabId) => {
    isManualScroll.current = true;
    setActiveTab(tabId);

    contentRefs.current[tabId]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-300 flex flex-col items-center pt-20 pb-40 px-8">
      {/* Tab Navigation - Liquid Glass */}
      <div className="w-full max-w-7xl mb-8 sticky top-4 z-50">
        <div className="relative backdrop-blur-md bg-white/30 rounded-3xl shadow-2xl p-2 px-7 flex gap-3 border border-white/50">
          {/* Animated liquid background blob */}
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-hidden"
            initial={false}
          >
            <motion.div
              className="absolute h-full bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-pink-100/40 blur-xl"
              animate={{
                x: activeTab * 100 + "%",
                width: activeTab === 3 ? "30%" : "25%",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
              }}
            />
          </motion.div>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "text-gray-600 scale-[115%] blur-[0.3px]"
                  : "text-gray-700 hover:text-gray-900 hover:scale-[1.02]"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br rounded-2xl shadow-lg"
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
                  }}
                />
              )}
              <span className="relative z-10 drop-shadow-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-7xl space-y-8">
        {resumePages.map((page, index) => (
          <motion.div
            key={index}
            ref={(el) => (contentRefs.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-8 min-h-[500px]"
          >
            {page.title && (
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {page.title}
              </h2>
            )}
            {page.content}
          </motion.div>
        ))}
        <SampleProjects contentRefs={contentRefs} />
      </div>
    </div>
  );
}
