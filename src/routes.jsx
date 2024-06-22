import App from "./App";
import Error from "./components/Error/Error";
import Construction from "./components/Error/Construction";
import Shop from "./components/Products/Shop";
import LandingPage from "./components/LandingPage/LandingPage";
import PromotionOne from "./components/Promotion/PromotionOne";
import PromotionTwo from "./components/Promotion/PromotionTwo";
import SingleProduct from "./components/SingleProduct/SingleProduct";

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
            element: <></>,
          },
          {
            path: "womens",
            element: <></>,
          },
          {
            path: "electronics",
            element: <></>,
          },
          {
            path: "all",
            element: <></>,
          },
        ],
      },
      {
        path: "product/:id",
        element: (
          <>
            <SingleProduct />
            <PromotionTwo />
          </>
        ),
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
