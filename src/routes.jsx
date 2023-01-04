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
    path: "/home",
    element: <Home />,
  },
  {
    icon: CalendarIcon,
    name: "Reservas",
    path: "/booking",
    element: <Booking />,
  }, 
  {
    icon: UserCircleIcon,
    name: "Perfil",
    path: "/profile",
    element: <Profile />,
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

  
];

export default routes;
