import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { BuildingOffice2Icon, UsersIcon, } from "@heroicons/react/24/solid";
import { ClockIcon, MapPinIcon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, BlogCard } from "@/widgets/cards";
import { featuresData, teamData, BlogData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('./img/pista-padel.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                RESERVA TU PISTA DE PÁDEL
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                PADEL ELITE ES TU CLUB              </Typography>
          
              <div class="mt-8 flex gap-x-4 sm:justify-center">
              <a href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Reservar
              </a>
              <a href="#" class="inline-block rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Partidas Abiertas
              </a>
            </div>
              
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <BuildingOffice2Icon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
               Instalaciones del Club
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              El Club Padel 22 Elite se asienta sobre una superficie de 35.000 m2, 
              en el municipio de Paterna. Posee una fantástica ubicación, a sólo 5 minutos de Valencia (Polígono Fuente del Jarro), 
              con fácil acceso y con facil aparcamiento. 
                <br />
                <br />
                Podrás disfrutar de nuestras magníficas 6 pistas de pádel de cristal, 
                todas de ellas cubiertas. Ademas de nuestro lugar para tomar algo y disfrutar de un buen padel. 
              </Typography>
              <Button variant="outlined">Ver más</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="https://padelelite22.matchpoint.com.es/images.ashx?id=93979af3ae6dfb6f57b04962469d0740"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    élite 22 PADEL
                  </Typography>
                  <Typography className="text-blue-gray-500">
                <p className="flex p-1"><ClockIcon className="h-7 w-7 mr-2 text-blue-gray-300"></ClockIcon>
                De lunes a domingo de 8:30 a 23:00. Sábados de 14:00. a 16:30 cerrado</p>

                <p className="flex p-1"><MapPinIcon className="h-5 w-5  mr-2 text-blue-gray-300"></MapPinIcon>  
                Calle Islas Canarias 43. 46988 Paterna (Valencia)</p>

                <p className="flex p-1"><PhoneIcon className="h-5 w-5  mr-2 text-blue-gray-300"></PhoneIcon> Tel. 699 34 90 79</p>
                <p className="flex p-1"><EnvelopeIcon className="h-5 w-5  mr-2 text-blue-gray-300"></EnvelopeIcon> padelelite22@gmail.com</p>
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Noticias">
          Todas nuestras novedades y eventos
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {/* {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))} */}


{BlogData.map(({ img, name, title, position, socials }) => (
              <BlogCard
                key={title}
                img={img}
                title={title}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="Solicítanos información">
           Completa el formulario para preguntarnos cualquier duda. Te responderemos lo antes posible.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
              <Input variant="standard" size="lg" label="Nombre" />
              <Input variant="standard" size="lg" label="Email" />
            <Textarea variant="standard" size="lg" label="Mensaje" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
