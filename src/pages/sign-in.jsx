import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";

export function SignIn() {
  return (
    <>
      <img
        src="/img/top-vista-padel.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/60" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient" 
            className="bg-[var(--color-main)] mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Iniciar sesión
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input variant="standard" type="email" label="Email" size="lg" />
            <Input
              variant="standard"
              type="password"
              label="Contraseña"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox className="checked:bg-[var(--color-main)] checked:border-0 focus:border-[var(--color-main)]" label="Recuérdame" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-[var(--color-main)] hover:bg-[var(--color-second)] shadow-gray-500 hover:shadow-gray-300" fullWidth>
             Iniciar sesión
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              ¿No tienes una cuenta?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  className="text-[var(--color-second)] ml-1 font-bold"
                >
                  Regístrate
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignIn;
