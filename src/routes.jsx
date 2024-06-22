import App from "./App";
import Error from "./components/Error/Error";
import Construction from "./components/Error/Construction";
import Shop from "./components/Products/Shop";
import LandingPage from "./components/LandingPage/LandingPage";
import PromotionOne from "./components/Promotion/PromotionOne";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "shop",
        element: (
          <>
            <Shop />
            <PromotionOne />
          </>
        ),
        children: [
          {
            path: "mens",
            element: (
              <>
                <Shop />
                <PromotionOne />
              </>
            ),
          },
          {
            path: "womens",
            element: (
              <>
                <Shop />
                <PromotionOne />
              </>
            ),
          },
          {
            path: "electronics",
            element: (
              <>
                <Shop />
                <PromotionOne />
              </>
            ),
          },
        ],
      },
      {
        path: "construction",
        element: <Construction />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

export default routes;
