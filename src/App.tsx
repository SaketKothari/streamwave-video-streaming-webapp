import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import store from "./store/store";
import { AppContext } from "./context/ApiContext";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import Error from "./shared/Error";
import Loader from "./shared/Loader";

// Lazy load route components for code splitting
const Feed = lazy(() => import("./pages/Feed"));
const Live = lazy(() => import("./components/LiveChat/Live"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const VideoDetails = lazy(() => import("./pages/VideoDetails"));
const UseRefExample = lazy(() => import("./components/Examples/UseRefExample"));
const UseRefExample02 = lazy(
  () => import("./components/Examples/UseRefExample02")
);

// Suspense wrapper for lazy-loaded components
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen bg-[#f9f9f9] dark:bg-[#0f0f0f]">
        <Loader />
      </div>
    }
  >
    {children}
  </Suspense>
);

// All content requires authentication
const AuthenticatedLayout = () => {
  return (
    <>
      <SignedIn>
        <div>
          <Header />
          <SuspenseWrapper>
            <Outlet />
          </SuspenseWrapper>
        </div>
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/live",
        element: <Live />,
      },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult />,
      },
      {
        path: "/userefex",
        element: (
          <div className="flex justify-center items-center">
            <UseRefExample />
            <UseRefExample02 />
          </div>
        ),
      },
      {
        path: "/video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContext>
        <div className="flex flex-col h-full">
          <RouterProvider router={appRouter} />
        </div>
      </AppContext>
    </Provider>
  );
};

export default App;
