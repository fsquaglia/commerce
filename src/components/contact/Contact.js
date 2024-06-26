import ContactUs from "./ContactUs";

export default function Contact({ medios, ubicacion }) {
  const {
    TE = "",
    cel = "54 3408 613004",
    email = "ayecompagnon@gmail.com",
  } = medios || {};
  const {
    direccion = "Ituzaingó 1393",
    localidad = "San Cristóbal",
    provincia = "Santa Fe...",
  } = ubicacion || {};

  return (
    <div className="container mx-auto py-8 flex flex-col">
      <div className="h-24"></div>
      <section className="relative">
        {/* <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Ituzaing%C3%B3%201393%20+(Ihara%20&%20London)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          ></iframe>{" "}
          <a href="http://maps-website.com/es">Maps Generator ES</a>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=e3b1c2b0197ff87866a71ae0de1f1440a95901fd"
          ></script>
        </div> */}
        {/*abajo sigue el div que quiero alinear a la derecha */}
        <div className="flex justify-end">
          <div className="md:w-2/3 lg:w-1/2 xl:w-2/5 flex flex-wrap p-4">
            {/*div del Formulario*/}
            <ContactUs />
            {/*div de los datos de contacto*/}
            <div className="relative flex flex-col z-10 md:w-1/3 w-2/4 mx-auto justify-start overflow-hidden">
              <div className="grid grid-cols h-full">
                <div className="bg-blue-900 py-10 px-2 col-span-2">
                  <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                    Info Contacto
                  </h2>
                  <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                    Ubicación
                    <span className="font-normal text-xs text-blue-300 block">
                      {`${direccion}, ${localidad} (${provincia})`}
                    </span>
                  </p>
                  <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                    Cel/TE
                    <span className="font-normal text-xs text-blue-300 block">
                      {`${cel} ${TE}`}
                    </span>
                  </p>
                  <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                    Email
                    <span className="font-normal text-xs text-blue-300 block">
                      {`${email}`}
                    </span>
                  </p>
                  {/* <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                  Web Address
                  <span className="font-normal text-xs text-blue-300 block">
                    zigzagexampl.com
                  </span>
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
