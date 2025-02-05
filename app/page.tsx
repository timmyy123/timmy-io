import Image from "next/image";
import styles from "./page.module.css";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <main className="background-image bg-cover bg-center h-screen grid grid-cols-12 justify-center p-4">
      <section className="grid col-span-12 grid-cols-subgrid gap-4">
        <div className="col-span-12 sm:col-span-6 grid grid-cols-subgrid gap-4">
          <div className="col-span-6 sm:col-span-3 grid card-base">
            <Photo />
          </div>
          <div className="col-span-6 sm:col-span-3 grid card-base">2</div>
        </div>
        <div className="col-span-12 sm:col-span-6 grid  gap-4 card-base">3</div>
      </section>
    </main>
  );
}
