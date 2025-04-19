"use client";
import Photo from "@/components/Photo";
import Hello from "@/components/Hello";
import Info from "@/components/Info";
import Skills from '@/components/Skills';
import Projects from "@/components/Projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <motion.main 
      className="background-image bg-cover bg-center min-h-screen grid grid-cols-12 grid-rows-7 max-lg:grid-rows-12 p-8 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top row: Photo + Hello + Info */}
      <motion.section 
        className="col-span-12 grid grid-cols-12 row-span-3 max-lg:row-span-5 gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Photo */}
        <div className="col-span-3 lg:col-span-3 max-md:col-span-4">
          <Card className="h-full overflow-hidden rounded-3xl border-amber-200/50 shadow-md p-0">
            <CardContent className="!p-0 h-full">
              <Photo />
            </CardContent>
          </Card>
        </div>
        
        {/* Hello */}
        <div className="col-span-3 lg:col-span-3 max-md:col-span-8">
          <Card className="h-full overflow-hidden rounded-3xl border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-100/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-0 h-full">
              <Hello />
            </CardContent>
          </Card>
        </div>
        
        {/* Info */}
        <div className="col-span-6 lg:col-span-6 max-md:col-span-12">
          <Card className="h-full overflow-hidden rounded-3xl border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-100/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-0 h-full">
              <Info />
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Bottom row: Skills + Projects */}
      <motion.section 
        className="col-span-12 grid grid-cols-12 row-span-4 max-lg:row-span-7 gap-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Skills */}
        <div className="col-span-4 lg:col-span-4 max-md:col-span-12">
          <Card className="h-full overflow-hidden rounded-3xl border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-100/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-0 h-full">
              <Skills/>
            </CardContent>
          </Card>
        </div>
        
        {/* Projects */}
        <div className="col-span-8 lg:col-span-8 max-md:col-span-12">
          <Card className="h-full overflow-hidden rounded-3xl border-amber-200/50 bg-gradient-to-br from-amber-50 to-amber-100/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-0 h-full">
              <Projects/>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </motion.main>
  );
}
