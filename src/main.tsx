import "./styles/_all.scss";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Loading from "./components/loading";

const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));

export const routeLink: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <HistoryRouter history={routeLink}>
        <Routes>
          ./pages/ListCandidatedPage
          <Route path="" element={<HomeTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing-page" element={<LandingPage />} />


            {/*form-application của nhà tuyển dụng*/}
            <Route path="/policy-page" element={<PolicyPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </HistoryRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Về đầu trang</div>} />
  </Provider>
);
