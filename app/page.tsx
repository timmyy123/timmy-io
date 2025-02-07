import Image from "next/image";
import styles from "./page.module.css";
import Photo from "@/components/Photo";
import Hello from "@/components/Hello";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="background-image bg-cover bg-center min-h-screen grid grid-cols-12 justify-center p-4 gap-4 ">
      <section className="grid col-span-12 grid-cols-subgrid max-lg:grid-rows-2">
        <div className="col-span-12 lg:col-span-6 grid grid-cols-subgrid max-lg:grid-rows-1">
          <div className="col-span-6 lg:col-span-3 card-base aspect-square">
            <Photo />
          </div>
          <div className="col-span-6 lg:col-span-3 card-base aspect-square justify-center items-center">
            <Hello/>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 card-base aspect-2/1 lg:mx-2">
        <Info/>
        </div>
      </section>
      
    </main>
  );
}
