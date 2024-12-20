import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Coders Cafe",
    img: "/codersCafe.jpg",
    desc: "A creative website utilizing next js, Tailwind CSS, and Framer Motion for smooth animations. Showcases projects dynamically with an emphasis on motion effects to deliver a stunning user experience.",
  },
  {
    id: 2,
    title: "NewsFlash - API Integrated News Website",
    img: "/news.webp",
    desc: "A responsive news platform developed with React JS and Tailwind CSS. Integrates News API to display live updates, categorized news, and an intuitive interface, hosted on Vercel with seamless deployment.",
  },
  {
    id: 3,
    title: "FrameMotion Studio",
    img: "/framer.webp",
    desc: "A creative portfolio website utilizing React, Tailwind CSS, and Framer Motion for smooth animations. Showcases projects dynamically with an emphasis on motion effects to deliver a stunning user experience.",
  },
  {
    id: 4,
    title: "Sundown Studio",
    img: "/sundown.webp",
    desc: "A modern product showcase built with Next.js and Tailwind CSS. Implements a slider to display product cards with locally imported images, ensuring a seamless and responsive browsing experience for users.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
