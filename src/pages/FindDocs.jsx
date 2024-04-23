import { m } from "framer-motion";
import Searchbar from "./components/Searchbar";
import Filters from "./components/Filters";
import Docard from "./components/Docard";
export default function FindDocs() {
  return (
    <m.section
      key={2}
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
      className="w-screen h-full"
    >
      <Searchbar />
      <Filters />
      <Docard/>
    </m.section>
  );
}
