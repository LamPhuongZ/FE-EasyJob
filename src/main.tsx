import "./styles/_all.scss";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  useRoutes,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Loading from "./components/loading";
import { routes } from "./routes/AppRoutes";

export const routeLink: any = createBrowserHistory();
const AppRoutes = () => useRoutes(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={routeLink}>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
        <ToastContainer />
        <FloatButton.BackTop tooltip={<div>Về đầu trang</div>} />
      </Suspense>
    </HistoryRouter>
  </Provider>
);
