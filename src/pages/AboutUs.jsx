import { Info } from "@phosphor-icons/react"
import { m } from 'framer-motion'

export default function AboutUs() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.09
          }
        }
      };
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
  const words = [
    { cha: <Info className="" weight="duotone" /> },
    { cha: "A" },
    { cha: "b" },
    { cha: "o" },
    { cha: "u" },
    { cha: "t" },
    { cha: "U" },
    { cha: "s" },
  ];
  return (
    <m.section
      key={1}
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000 }}
      transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
      className="w-screen h-screen grid place-content-center"
    >
      <m.h1
        className="text-7xl text-accent1 flex"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word) => (
          <m.span key={word.cha} variants={item}>
            {word.cha}
          </m.span>
        ))}
      </m.h1>
    </m.section>
  );
}
