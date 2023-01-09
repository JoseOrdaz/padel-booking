import { Home, Profile, SignIn, SignUp, Booking } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  CalendarIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Inicio",
    path: "/",
    element: <Home />,
  },
  {
    icon: CalendarIcon,
    name: "Reservas",
    path: "/booking",
    element: <Booking />,
  }, 
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Iniciar Sesión",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Registrarse",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: UserCircleIcon,
    name: "Intranet",
    path: "/profile",
    element: <Profile />,
  },

  
];

export default routes;
