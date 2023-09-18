import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { ToastContainer } from "react-toastify";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const HeroDetails = lazy(() => import("./pages/HeroDetails"));
  const CreateHero = lazy(() => import("./pages/CreateHero"));

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="hero/:heroId" element={<HeroDetails />} />
          <Route path="/create" element={<CreateHero />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
