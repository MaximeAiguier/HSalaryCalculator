import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Magic Calculator",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
];
export default routes;
