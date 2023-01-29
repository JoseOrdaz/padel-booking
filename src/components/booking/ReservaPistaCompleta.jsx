import { useState } from "react";
import { Input, Checkbox, Select, Option } from "@material-tailwind/react";
import Steps from "@/components/user-form/steps.jsx";

export function ReservaPistaCompleta() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    DiaReserva: { type: "date", label: "Selecciona el día", value: "" },
    HoraReserva: {
      type: "select",
      label: "Selecciona la hora",
      options: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ],
      value: "",
    },
    todoElDia: { type: "checkbox", label: "Ver todo el día", value: "" },
  });

  const pistas = [
    {
      imagen: "/img/pistas/pista1.png",
      fecha: "Lunes, 6 de febrero | De 17:00 a 18:30",
      tipoPista: "Pista pádel doble",
      numPista: "1",
      precio: "24,00",
      duracion: "90",
    },
    {
      imagen: "/img/pistas/pista2.png",
      fecha: "Lunes, 6 de febrero | De 17:00 a 18:30",
      tipoPista: "Pista pádel doble",
      numPista: "2",
      precio: "24,00",
      duracion: "90",
    },
    {
      imagen: "/img/pistas/pista3.png",
      fecha: "Lunes, 6 de febrero | De 17:00 a 18:30",
      tipoPista: "Pista pádel doble",
      numPista: "3",
      precio: "24,00",
      duracion: "90",
    },
  ];

  const pistaSeleccionada = [
    {
      imagen: "/img/pistas/pista3.png",
      fecha: "Lunes, 6 de febrero | De 17:00 a 18:30",
      tipoPista: "Pista pádel doble",
      numPista: "3",
      precio: "24,00",
      duracion: "90",
    },
  ];

  const stepHandler = (n) => {
    setStep(n);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (step < maxStep) {
      let st = step;
      setStep(++st);
      return;
    }
    const data = {};
  };

  let start = step * 1;
  let end;
  let formLength = Object.keys(formData).length;
  let maxStep = 4;

  if (step == maxStep) {
    end = formLength;
  } else {
    end = step * 1 + 3;
  }
  const fields = Object.keys(formData).slice(start, end);

  return (
    <>
      <div className="py-20' m-auto mt-20 flex w-full flex-col gap-4 lg:order-1 lg:w-6/12">
        <Steps steps={maxStep} active={step} clicked={stepHandler} />
      </div>

      {step === 0 && (
        <form
          required
          className="py-20' m-auto mt-8 flex w-full flex-col gap-4 lg:order-1 lg:w-6/12"
          onSubmit={submitHandler}
        >
          {fields.map((key, i) => {
            if (formData[key].type == "checkbox") {
              return (
                <Checkbox
                  key={key}
                  value={formData[key].value}
                  label={formData[key].label}
                />
              );
            } else if (formData[key].type == "select") {
              return (
                <Select
                  key={key}
                  name={key}
                  label={formData[key].label}
                  onChange={(val) => selectHandler(val, key)}
                  value={formData[key].value}
                >
                  {formData[key].options.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              );
            } else {
              console.log(formData[key].error);
              return (
                <Input
                  key={key}
                  name={key}
                  type={formData[key].type}
                  variant="standard"
                  label={formData[key].label}
                  size="lg"
                  defaultValue={formData[key].value}
                  min={formData[key].min}
                  max={formData[key].max}
                  minLength={formData[key].minLength}
                  maxLength={formData[key].maxLength}
                  error={formData[key].error}
                  success={formData[key].success}
                  required
                />
              );
            }
          })}
          <div className="pt-4 ">
            <button
              type="submit"
              className="middle none center w-full rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Siguiente
            </button>
          </div>
        </form>
      )}
      {step === 1 && (
        <form
          required
          className="mt-8 flex flex-col gap-4"
          onSubmit={submitHandler}
        >
          <div className="divide-slate-100 py-20' m-auto w-full divide-y lg:order-1 lg:w-6/12">
            {pistas.map((pista) => (
              <div
                key={pista.imagen}
                className="group mt-10 items-center justify-center space-x-6 rounded-xl bg-white bg-opacity-50 p-4 shadow-xl hover:rounded-2xl sm:flex"
              >
                <img
                  className="mx-auto block h-auto w-3/12 rounded-lg"
                  alt="art cover"
                  loading="lazy"
                  src={pista.imagen}
                />
                <div className="p-5 pl-0 sm:w-8/12">
                  <div className="text-grey-500 my-4 flex flex-row  space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <p className="text-xs">{pista.fecha}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className="text-justify text-xl font-semibold text-[var(--color-main)]">
                        {pista.tipoPista}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex gap-3 space-y-1">
                        <span className="text-sm">
                          Pista Nº {pista.numPista}
                        </span>
                      </div>
                      <div className="flex gap-3 space-y-1">
                        <span className="text-sm font-bold text-green-800">
                          Precio {pista.precio} €
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between space-x-4">
                      <div className="text-grey-500 my-4 flex flex-row  space-x-1">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <p className="text-xs">{pista.duracion} minutos</p>
                      </div>

                      <div className="flex flex-row space-x-1">
                        <button type="submit">
                          <div className="shadow- flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-xl bg-[var(--color-second)] px-3 py-1 text-center text-white shadow-lg ">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              className="text-xl"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                            </svg>
                            Seleccionar
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      )}
      {step === 2 && (
        <>
          <section>
            <form
              required
              className="mt-8 flex flex-col gap-4"
              onSubmit={submitHandler}
            >
              {pistaSeleccionada.map((pista) => (
                <div class="relative mx-auto w-full items-center px-5 py-24 md:px-12 lg:px-16">
                  <div class="py-20' m-auto mx-auto flex w-full flex-col gap-4 space-y-4 lg:order-1 lg:w-6/12 ">
                    <div class="relative rounded-3xl bg-[var(--color-main)] p-6">
                      <div class="absolute inset-x-0 -top-1 translate-y-px transform">
                        <div class="flex -translate-y-1/2 transform justify-center rounded-3xl">
                          <span class="inline-flex rounded-xl border-8 border-[var(--color-main)] bg-white px-4 py-1 text-sm font-bold uppercase tracking-wider text-gray-800">
                            Reserva de Pista{" "}
                          </span>
                        </div>
                      </div>
                      <img
                        className="mx-auto block h-auto w-3/12 rounded-lg"
                        alt="art cover"
                        loading="lazy"
                        src={pista.imagen}
                      />
                      <div class="flex flex-col p-4">
                        <div class="py-6">
                          <h2 class="text-5xl font-thin leading-6 text-white">
                            <span class="ml-auto font-extrabold text-white">
                              {" "}
                              Pista Nº {pista.numPista}{" "}
                            </span>
                          </h2>
                          <p class="mt-6 text-xl font-semibold text-white">
                            Información de la reserva
                          </p>
                          <div class="p-4">
                            <ul
                              role="list"
                              class="prose mt-4 list-disc space-y-3 text-white"
                            >
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.tipoPista}
                                </span>
                              </li>
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.fecha}
                                </span>
                              </li>
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.precio} €
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </form>
          </section>
        </>
      )}
      {step === 3 && (
        <>
          <form
            required
            className="mt-8 flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <section>
              {pistaSeleccionada.map((pista) => (
                <div class="relative mx-auto w-full items-center px-5 py-24 md:px-12 lg:px-16">
                  <div class="py-20' m-auto mx-auto flex w-full flex-col gap-4 space-y-4 lg:order-1 lg:w-6/12 ">
                    <div class="relative rounded-3xl bg-green-600 p-6">
                      <div class="absolute inset-x-0 -top-1 translate-y-px transform">
                        <div class="flex -translate-y-1/2 transform justify-center rounded-3xl">
                          <span class="inline-flex rounded-xl border-8 border-green-600 bg-white px-4 py-1 text-sm font-bold uppercase tracking-wider text-gray-800">
                            Reserva confirmada{" "}
                          </span>
                        </div>
                      </div>
                      <img
                        className="mx-auto block h-auto w-3/12 rounded-lg"
                        alt="art cover"
                        loading="lazy"
                        src={pista.imagen}
                      />
                      <div class="flex flex-col p-4">
                        <div class="py-6">
                          <h2 class="text-5xl font-thin leading-6 text-white">
                            <span class="ml-auto font-extrabold text-white">
                              {" "}
                              Pista Nº {pista.numPista}{" "}
                            </span>
                          </h2>
                          <p class="mt-6 text-xl font-semibold text-white">
                            Información de la reserva
                          </p>
                          <div class="p-4">
                            <ul
                              role="list"
                              class="prose mt-4 list-disc space-y-3 text-white"
                            >
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.tipoPista}
                                </span>
                              </li>
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.fecha}
                                </span>
                              </li>
                              <li class="flex space-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                  />
                                </svg>

                                <span class="text-base text-white">
                                  {" "}
                                  {pista.precio} €
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a
                          href=""
                          class="block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                          Añadir al google calendar
                        </a>
                        <section class="">
                          <div class="mt-5 rounded-r-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                            <div class="flex">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-5 w-5 text-blue-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <div class="ml-3">
                                <div class="text-sm text-blue-600">
                                  <p>
                                    Recuerda estar 10 minutos antes de la hora
                                    reservada, tus compañer@s te lo agradeceran.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </form>
        </>
      )}
    </>
  );
}
export default ReservaPistaCompleta;
