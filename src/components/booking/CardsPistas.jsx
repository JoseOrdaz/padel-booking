export function CardsPistas() {
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

  return (
    <div className="divide-slate-100 divide-y">
      {pistas.map((pista) => (
        <div key={pista.imagen} className="group mt-10 items-center justify-center space-x-6 rounded-xl bg-white bg-opacity-50 p-4 shadow-xl hover:rounded-2xl sm:flex">
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
                  <span className="text-sm">Pista Nº {pista.numPista}</span>
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
                  <div className="shadow- flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-xl bg-green-500 px-3 py-1 text-center text-white shadow-lg shadow-green-600">
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
                    <span>Reservar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsPistas;
