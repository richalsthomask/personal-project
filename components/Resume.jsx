import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
            Frontend Developer with 4 years of experience in analysis, design
            and implementation of web applications with a strong focus on
            ReactJS, NextJS, HTML, CSS, JS, TS and TailwindCSS.
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
            className="hover:opacity-80"
          >
            <Image
              src="/pdf.png"
              alt="PDF"
              className="h-15 w-15"
              width={80}
              height={80}
            />
          </Link>
          <Link
            href="/Richals - Resume.docx"
            target="_blank"
            className="hover:opacity-80"
          >
            <Image
              src="/docx.png"
              alt="DOCX"
              className="h-15 w-15"
              width={80}
              height={80}
            />
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
            Pages, Heroku, Windows IAS
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
            Code
          </p>
        </div>
      </div>
    ),
  },
];

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
export default function Resume() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    sectionsRef.current.forEach((section, index) => {
      if (section) {
        // Set initial state
        gsap.set(section, {
          opacity: 0,
          y: 100,
          scale: 0.9,
        });

        // Create scroll-triggered animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 10%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          })
          .to(section, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "bottom 95%",
              end: "bottom 5%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          })
          .to(section, {
            opacity: 0,
            y: -50,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in",
          });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-300 flex flex-col items-center pt-20 pb-40 px-8">
      <div className="space-y-8 w-full max-w-7xl">
        {resumePages.map((page, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            {page.title && (
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {page.title}
              </h2>
            )}
            {page.content}
          </div>
        ))}

        {sampleProjects.map((project, index) => (
          <Link
            ref={(el) =>
              (sectionsRef.current[resumePages.length + index - 1] = el)
            }
            key={index}
            href={project.url}
            target="_blank"
            className="bg-white p-6 block shadow-xl rounded-2xl"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              height={500}
              width={800}
              className="w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
