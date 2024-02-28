import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

import Loading from "./components/common/Loading";
import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

const ButtonPage = lazy(() => import("./pages/button/ButtonPage"));
const AnimationPage = lazy(() => import("./pages/animation/AnimationPage"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/button"
          element={
            <Suspense fallback={<Loading />}>
              <ButtonPage />
            </Suspense>
          }
        />

        <Route
          path="/animation"
          element={
            <Suspense fallback={<Loading />}>
              <AnimationPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
