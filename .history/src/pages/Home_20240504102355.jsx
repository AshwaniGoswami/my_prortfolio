import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">

</div> */}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;