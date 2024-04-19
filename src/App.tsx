import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TimerProvider } from "./providers/TimerContext";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";
import TimerToast from "./components/TimerToast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/timer",
    element: <TimerPage />,
  },
]);

const App = () => {
  return (
    <TimerProvider>
      <RouterProvider router={router} />
      <TimerToast />
    </TimerProvider>
  );
};

export default App;
