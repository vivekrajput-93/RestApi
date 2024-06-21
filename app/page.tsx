import Image from "next/image";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Main from "./components/Main";

export default function Home() {
  return (
    <main >
     <Navbar />

     <div className="flex justify-between px-20 h-fit mt-8">
      <Search />

      <Filter />
     </div>

     <Main  />
    </main>
  );
}
