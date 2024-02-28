import NavBar from "./componets/NavBar";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import GalleryPage from "./pages/Gallery";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const routes = createBrowserRouter(
    [{
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "about",
          element: <AboutPage />
        },
        {
          path: "gallery",
          element: <GalleryPage />
        },
        {
          path: "courses",
          element: <CoursesPage />
        }
      ]
    }]
  )

  // const routes =createBrowserRouter(
  //    [
  //   {
  //     path:"/",
  //     element:<HomePage/>
  //   },
  //   {
  //     path:"/about",
  //     element:<AboutPage/>
  //   },
  //   {
  //     path:"/gallery",
  //     element:<GalleryPage/>
  //   },
  //   {
  //     path:"/courses",
  //     element:<CoursesPage/>
  //   },
  // ]
  // )
  return (
    <>
      <NavBar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
