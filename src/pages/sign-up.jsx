import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import UserForm from "@/components/user-form/form";
import { SimpleFooter } from "@/widgets/layout";

export function SignUp() {
  return (
    <>
      <img
        src="/img/top-vista-padel.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/60" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader variant="gradient"  className="mb-4 grid h-28 place-items-center bg-[var(--color-main)]">
            <Typography variant="h3" color="white">
              Registrarse
            </Typography>
          </CardHeader>
          <CardBody className="pb-0">
            <UserForm />
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
                ¿Ya tienes una cuenta?
                <Link to="/sign-in">
                    <Typography as="span" variant="small" className="text-[var(--color-second)] ml-1 font-bold">
                        Iniciar sesión
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

export default SignUp;
