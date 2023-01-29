import { Avatar, Typography, Button } from "@material-tailwind/react";

import { Footer } from "@/widgets/layout";
import { ReservaPistaCompleta } from "/src/components/booking/ReservaPistaCompleta.jsx";

export function Booking() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/pista-padel-4.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-32 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5 lg:-mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="shadow-xl0 relative -mt-20 h-full w-full !rounded-full object-cover object-center">
                      <Avatar
                        src="/img/pista-padel-4.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-[200px] w-[200px] object-cover object-center shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button
                    href="/booking"
                    className="bg-[var(--color-main)] shadow-gray-500 hover:bg-[var(--color-second)] hover:shadow-gray-300"
                  >
                    Iniciar sesión
                  </Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        6
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Pistas Indoor
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        7
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        dias a las semana
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        1420
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Usuarios registrados
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 mt-20 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Reservar pista 📆
                </Typography>
                <div className="py-20' m-auto mt-20 w-full lg:order-1">
                  <ReservaPistaCompleta></ReservaPistaCompleta>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      De lunes a domingo de 8:30 a 23:00. Sábados de 14:00. a
                      16:30 cerrado
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[var(--color-main)]">
        <Footer />
      </div>
    </>
  );
}

export default Booking;
