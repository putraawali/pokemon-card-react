import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Favorite from "../pages/Favorite";
const routes = [
  {
    path: "/pokemon/:id",
    component: Pokemon,
  },
  {
    path: "/favorites",
    component: Favorite,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
