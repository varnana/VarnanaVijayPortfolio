import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div
        ref={cardRef}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-6xl mx-auto"
        style={{
          textAlign: "justify",
          wordSpacing: "0.5px",
          lineHeight: "1.9rem",
        }}
      >
        A backend-focused developer with a strong foundation in clean architecture, optimized
        logic, and enterprise-level efficiency. Passionate about building scalable systems and
        long-term business solutions, I specialize in SAP ABAP development and backend process
        automation. Currently holding a Bachelor's degree in Computer Science, I bring both
        academic grounding and practical exposure to modern development environments. My goal is to
        design and deliver backend architectures that are robust, maintainable, and aligned with
        real-world enterprise needs.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
