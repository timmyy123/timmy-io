import Photo from "@/components/Photo";
import Hello from "@/components/Hello";
import Info from "@/components/Info";
import Skills from '../components/Skills'
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="background-image bg-cover bg-center min-h-screen grid grid-cols-12 grid-rows-7 max-lg:grid-rows-12 justify-center p-4 gap-4 ">
      <section className="grid col-span-12 grid-cols-subgrid row-span-3 max-lg:grid-rows-2 max-lg:row-span-4 gap-4 ">
        <div className="col-span-12 lg:col-span-6 grid grid-cols-subgrid max-lg:row-span-1">
          <div className="col-span-6 lg:col-span-3 card-base aspect-square">
            <Photo />
          </div>
          <div className="col-span-6 lg:col-span-3 card-base aspect-square justify-center items-center">
            <Hello />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card-base aspect-2/1 lg:mx-2">
          <Info />
        </div>
      </section>
      <section className="grid col-span-12 grid-cols-subgrid row-span-4 grid-rows-2 max-lg:row-span-8 gap-4">
        <div className="col-span-12 lg:col-span-4 row-span-3  card-base max-lg:row-span-1">
          <Skills/>
        </div>
        <div className="col-span-12 lg:col-span-8 row-span-3  card-base max-lg:row-span-1">
          <Projects/>
        </div>
      </section>
    </main>
  );
}
