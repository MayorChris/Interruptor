/**
=========================================================
* Interruptor - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Interruptor are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Interruptor layouts
import Interruptor from "layouts/interruptor";
import Informacion from "layouts/informacion";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

// Videos
// import TanqueVivoMonopolar from "assets/videos/Tanque vivo Monopolar.mp4";
// import TanqueVivoTripolar from "assets/videos/Tanque vivo Tripolar.mp4";
import IntPotencia from "assets/images/interruptor/fondo.jpeg";
import ExtAire from "assets/images/interruptor/Interruptor Soplo Aire.jpg";
import GranVolAceite from "assets/videos/Interruptor de aceite.mp4";
import PeqVolAceite from "assets/images/interruptor/Aceite Mínimo.jpg";
import VacioImg from "assets/images/interruptor/Interruptor Vacío.jpg";
import SF6 from "assets/images/interruptor/Interruptor SF6.jpg";
import TanqueVivoTripolar from "assets/videos/Tanque vivo Tripolar.mp4";
import TanqueVivoMonopolar from "assets/videos/Tanque vivo Monopolar.mp4";
import TanqueMuertoTripolar from "assets/videos/Tanque muerto Tripolar.mp4";
import TanqueMuertoMonopolar from "assets/videos/Tanque muerto Monopolar.mp4";
import Resorte from "assets/images/interruptor/Resorte.jpg";
import Neumatico from "assets/images/interruptor/Neumático.jpg";
import Hidraulico from "assets/images/interruptor/Hidraúlico.jpg";
import TanqueVivoMonopolarTipoTCapRes from "assets/videos/Tanque vivo Monopolar Tipo T con Capacitores - Resistores.mp4";
import TanqueVivoMonopolarTipoT from "assets/videos/Tanque vivo Monopolar Tipo T.mp4";
import TanqueVivoMonopolarTipoT4 from "assets/videos/Tanque vivo Monopolar Tipo T 4 cámaras.mp4";
import Explosion from "assets/videos/Interruptor Explosión.mp4";
import CamaraMonopolarCompleto from "assets/videos/Interruptor_Monopolar_Completo.mp4";
import Vacio from "assets/videos/Interruptor de vacio.mp4";
import VacioCompleto from "assets/videos/Interruptor Vacío Completo.mp4";
import ArcoNormal from "assets/videos/Interruptor Arco Normal.mp4";
import ArcoCorto from "assets/videos/Interruptor Arco Corto.mp4";

const routes = [
  {
    type: "collapse",
    name: "Interruptor de Potencia",
    key: "interruptor_potencia",
    icon: <Icon fontSize="small">radio_button_checked</Icon>,
    route: "/interruptor_potencia",
    component: (
      <Interruptor
        index={0}
        routes={[
          {
            name: "Interruptor de Potencia",
            key: "interruptor_potencia",
            route: "/interruptor_potencia",
          },
        ]}
        image={IntPotencia}
        title="Interruptor de Potencia"
        label=""
        description="Interruptor de potencia es un dispositivo capaz de interrupmpir el flujo de corriente, bien sea en operación normal o en corto circuito. Cuenta con un número límite de aperturas y cierres, 
        este valor difiere si el equipo actúa bajo condiciones normales o de falla."
      />
    ),
  },
  {
    type: "nested",
    name: "Medios de Extinción",
    key: "medios_extincion",
    icon: <Icon fontSize="small">fire_extinguisher</Icon>,
    route: "/medios_extincion",
    collapse: [
      {
        type: "collapse",
        name: "Aire",
        key: "aire",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/medios_extincion/aire",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "AIRE",
                key: "aire",
                route: "/medios_extincion/aire",
              },
            ]}
            image={ExtAire}
            title="AIRE"
            label=""
            description="Estos interruptores utilizan  el aire como medio de interrupción a presión atmosférica, logrando des-ionizar el arco eléctrico por la acción enfriadora que caracteriza este elemento. El arco producido en la cámara de interrupción puede estirarse y así aumentar su resistencia por longitud y confinamiento, logrando que la corriente de cortocircuito descienda y que la corriente y el voltaje entren en fase. Una vez se reduce la diferencia entre la tensión del sistema y la corriente de corto, se tendrá la seguridad que el voltaje de restablecimiento tendrá un valor bajo.
            Debido a que la energía disipada es tan elevada, su aplicación se limita a mediana y baja potencia."
          />
        ),
      },
      {
        type: "collapse",
        name: "Aceite",
        key: "aceite",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/medios_extincion/aceite",
        Tabs: [
          {
            type: "Tab",
            name: "Gran Volumen",
            key: "aceite_gran_volumen",
            route: "/medios_extincion/aceite/aceite_gran_volumen",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Gran Volumen",
                    key: "aceite_gran_volumen",
                    route: "/medios_extincion/aceite/aceite_gran_volumen",
                  },
                  {
                    name: "Pequeño Volumen",
                    key: "aceite_pequeño_volumen",
                    route: "/medios_extincion/aceite/aceite_pequeno_volumen",
                  },
                ]}
                image={GranVolAceite}
                type="video"
                title="Aceite"
                label="Gran Volumen"
                description="Este tipo de interruptores usan la reacción del aceite al momento de producirse un arco para su propia extinción. El arco eléctrico provoca que se rompan las moléculas del aceite generando hidrogeno y otros gases, además de, una especie de turbulencia en el aceite dentro del tanque o cámara de extinción, dichas reacciones químicas y físicas son las que enfrían y comprimen el plasma del arco hasta su des-ionisación.
                Como su nombre lo indica este tipo de interruptores de potencia alberga en la cámara de extinción una cantidad importe de aceite, ejemplo, para interruptores de 145 kV la cantidad de aceite es en promedio de 12000 litros, para un interruptore de 230 kV se necesitarían aproximadamente 50000 litros."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor de aceite.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
          {
            type: "Tab",
            name: "Pequeño Volumen",
            key: "aceite_pequeño_volumen",
            route: "/medios_extincion/aceite/aceite_pequeno_volumen",
            component: (
              <Interruptor
                index={1}
                routes={[
                  {
                    name: "Gran Volumen",
                    key: "aceite_gran_volumen",
                    route: "/medios_extincion/aceite/aceite_gran_volumen",
                  },
                  {
                    name: "Pequeño Volumen",
                    key: "aceite_pequeño_volumen",
                    route: "/medios_extincion/aceite/aceite_pequeno_volumen",
                  },
                ]}
                image={PeqVolAceite}
                title="Aceite"
                label="Pequeño Volumen"
                description="Debido la cantidad de espacio que ocupa los interruptores de gran volumen de aceite se diseñó un modelo con menos cantidad de este mineral. Los interruptores  de pequeño volumen contienen aproximadamente el 2% de aceite que usa un interruptor de gran volumen. La forma de operación de ambos interruptores es similar, la diferencia radica en que los de pequeño volumen de aceite usan el aceite solo como medio de interrupción y adicional a este tienen materiales solidos usados como dieléctricos; el interruptor de gran volumen usa el aceite como dieléctrico y como medio interruptivo."
              />
            ),
          },
        ],
      },
      {
        type: "collapse",
        name: "Vacío",
        key: "vacio",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/medios_extincion/vacio",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Vacio",
                key: "vacio",
                route: "/medios_extincion/vacio",
              },
            ]}
            image={VacioImg}
            title="Vacío"
            label="Vacío"
            description="El vacío es un ambiente con una alta capacidad dieléctrica contenida en una cámara sellada permanentemente, esto permite que la distancia de los contactos sean pequeñas, de acuerdo a la capacidad del interruptor la separación de los contactos puede estar entre los 6 mm hasta 25 mm.  Presenta una rápida interrupción del arco desde el momento en que se separan los contactos, con la interrupción del arco la fuerza dieléctrica del vacío aumenta mucho mas en comparación a otros medios dieléctricos.
            Los interruptores de vacío son altamente eficiente, de pequeño tamaño y menor costo, el vacío no es un dieléctrico que requiera de mantenimientos periódicos, lo que lo representa como un tipo de interruptor con una vida útil alta además de ser compactos y confiables . Sin embargo, estos interruptores pueden ser propensaos a reencendidos e interrupciones prematuras de pequeñas corrientes inductivas."
          />
        ),
      },

      {
        type: "collapse",
        name: "SF6",
        key: "SF6",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/medios_extincion/SF6",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "SF6",
                key: "SF6",
                route: "/medios_extincion/SF6",
              },
            ]}
            image={SF6}
            title="SF6"
            label="SF6"
            description="El uso del gas sf6 nace de la necesidad de encontrar mejores características disruptivas de un fluido extintor frente al aumento constante de la potencia de las centrales eléctricas.
            El gas SF6 o hexafluoruro es una gas halógeno, su estructura molecular se compone de un átomo de azufre central unido a 6 átomos de flúor. Posee una gran capacidad dieléctrica como medio de extinción del arco eléctrico. Además es incoloro, inodoro, no inflamable ni toxico. A temperatura estándar de 20 °c y presión atmosférica, este gas posee una densidad cinco veces superior a la del aire, haciéndolo uno de los gases mas pesados, sin embargo, sus características hacen que sea un compuesto químico muy estables.
            Frente a otros medios de extinción el gas tiene varias ventajas: Menor tamaño y mas eficiencia en los interruptores, no genera residuos de carbono como el uso del aceite que se desgasta en cada proceso extintor y, mayor densidad y rigidez que el aire.
            "
          />
        ),
      },
    ],
  },
  {
    type: "nested",
    name: "Dispositivos de conmutación",
    key: "dispositivos_conmutacion",
    icon: <Icon fontSize="small">switch_left</Icon>,
    route: "/dispositivos_conmutacion",
    collapse: [
      {
        type: "collapse",
        name: "Tanque Vivo",
        key: "tanque_vivo",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/dispositivos_conmutacion/tanque_vivo",
        Tabs: [
          {
            type: "Tab",
            name: "Monopolar",
            key: "tanque_vivo_monopolar",
            route: "/dispositivos_conmutacion/tanque_vivo/monopolar",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Monopolar",
                    key: "tanque_vivo_monopolar",
                    route: "/dispositivos_conmutacion/tanque_vivo/monopolar",
                  },
                  {
                    name: "Tripolar",
                    key: "tanque_vivo_tripolar",
                    route: "/dispositivos_conmutacion/tanque_vivo/tripolar",
                  },
                ]}
                image={TanqueVivoMonopolar}
                type="video"
                title="Tanque Vivo"
                label="Monopolar"
                description="La cámara de extinción se encuentra dentro del tanque aislante o polos del interruptor.  Estos polos van conectados directamente al circuito de alta tensión."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Tanque vivo Monopolar.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
          {
            type: "Tab",
            name: "Tripolar",
            key: "tanque_vivo_tripolar",
            route: "/dispositivos_conmutacion/tanque_vivo/tripolar",
            component: (
              <Interruptor
                index={1}
                routes={[
                  {
                    name: "Monopolar",
                    key: "tanque_vivo_monopolar",
                    route: "/dispositivos_conmutacion/tanque_vivo/monopolar",
                  },
                  {
                    name: "Tripolar",
                    key: "tanque_vivo_tripolar",
                    route: "/dispositivos_conmutacion/tanque_vivo/tripolar",
                  },
                ]}
                image={TanqueVivoTripolar}
                type="video"
                title="Tanque Vivo"
                label="Tripolar"
                description="Interruptor Tanque Vivo Tripolar, ..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Tanque vivo Tripolar.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
        ],
      },
      {
        type: "collapse",
        name: "Tanque Muerto",
        key: "tanque_muerto",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/dispositivos_conmutacion/tanque_muerto",
        Tabs: [
          {
            type: "Tab",
            name: "Monopolar",
            key: "tanque_muerto_monopolar",
            route: "/dispositivos_conmutacion/tanque_muerto/monopolar",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Monopolar",
                    key: "tanque_muerto_monopolar",
                    route: "/dispositivos_conmutacion/tanque_muerto/monopolar",
                  },
                  {
                    name: "Tripolar",
                    key: "tanque_muerto_tripolar",
                    route: "/dispositivos_conmutacion/tanque_muerto/tripolar",
                  },
                ]}
                image={TanqueMuertoMonopolar}
                type="video"
                title="Tanque Muerto"
                label="Monopolar"
                description="La principal característica de los interruptores de potencia de tanque muerto es que poseen una cámara de interrupción encapsulada la cual está puesta a tierra; de ahí su nombre. 
                Principales características de este tipo de interruptores:
                Poseen la capacidad de realizar corto de corriente de cortocircuito de alta intensidad con sólo una cámara de interrupción.
                La cámara encapsulada representa un alto grado de disponibilidad del servicio.
                Menor número de mantenimiento.
                Diseño compacto debido a transformadores de corriente de núcleo toroidal en los aisladores pasantes.
                Mayor resistencia sísmica, debido al centro de gravedad.
                "
                action={{
                  type: "external",
                  route: "http://localhost:8080/Tanque muerto Monopolar.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
          {
            type: "Tab",
            name: "Tripolar",
            key: "tanque_muerto_tripolar",
            route: "/dispositivos_conmutacion/tanque_muerto/tripolar",
            component: (
              <Interruptor
                index={1}
                routes={[
                  {
                    name: "Monopolar",
                    key: "tanque_muerto_monopolar",
                    route: "/dispositivos_conmutacion/tanque_muerto/monopolar",
                  },
                  {
                    name: "Tripolar",
                    key: "tanque_muerto_tripolar",
                    route: "/dispositivos_conmutacion/tanque_muerto/tripolar",
                  },
                ]}
                image={TanqueMuertoTripolar}
                type="video"
                title="Tanque Muerto"
                label="Tripolar"
                description="Interruptor Tanque Muerto Tripolar, ..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Tanque muerto Tripolar.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    type: "nested",
    name: "Accionamiento",
    key: "accionamiento",
    icon: <Icon fontSize="small">close_fullscreen</Icon>,
    route: "/accionamiento",
    collapse: [
      {
        type: "collapse",
        name: "Resorte",
        key: "resorte",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/accionamiento/resorte",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Resorte",
                key: "Resorte",
                route: "/accionamiento/resorte",
              },
            ]}
            image={Resorte}
            title="Resorte"
            label="Resorte"
            description="Dentro de los accionamientos tenemos el de resorte, el cual..."
          />
        ),
      },
      {
        type: "collapse",
        name: "Neumático",
        key: "neumatico",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/accionamiento/neumatico",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Neumático",
                key: "neumatico",
                route: "/accionamiento/Neumatico",
              },
            ]}
            image={Neumatico}
            title="Neumático"
            label="neumático"
            description="Dentro de los accionamientos tenemos el de neumático, el cual..."
          />
        ),
      },
      {
        type: "collapse",
        name: "Hidráulico",
        key: "aire",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/accionamiento/hidraulico",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Hidraúlico",
                key: "hidraulico",
                route: "/accionamiento/hidraulico",
              },
            ]}
            image={Hidraulico}
            title="Hidráulico"
            label="Hidráulico"
            description="Dentro de los accionamientos tenemos el hidráulico, el cual..."
          />
        ),
      },
    ],
  },
  {
    type: "nested",
    name: "Otros",
    key: "otros",
    icon: <Icon fontSize="small">api</Icon>,
    route: "/otros",
    collapse: [
      {
        type: "collapse",
        name: "Resistor-Capacitivo",
        key: "resistor-capacitivo",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/otros/resistor_capacitivo",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Resistor-Capacitivo",
                key: "resistor-capacitivo",
                route: "/otros/resistor_capacitivo",
              },
            ]}
            image={TanqueVivoMonopolarTipoTCapRes}
            type="video"
            title="Resistor-Capacitivo"
            label="Resistor Capacitivo"
            description="Otro de los interruptores diferentes, tenemos ..."
            action={{
              type: "external",
              route:
                "http://localhost:8080/Tanque vivo Monopolar Tipo T con Capacitores - Resistores.html",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Tipo T",
        key: "tipo_t",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/otros/Tipo_T",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Tipo T",
                key: "tipo_t",
                route: "/otros/Tipo_T",
              },
            ]}
            image={TanqueVivoMonopolarTipoT}
            type="video"
            title="Tipo T"
            label="Tipo T"
            description="Otro de los interruptores diferentes, tenemos ..."
            action={{
              type: "external",
              route: "http://localhost:8080/Tanque vivo Monopolar Tipo T.html",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Tipo T 4 Cámaras",
        key: "tipo_t_4_camaras",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/otros/Tipo_T_4_Camaras",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Tipo T 4 Cámaras",
                key: "tipo_t_4_camaras",
                route: "/otros/Tipo_T_4_Camaras",
              },
            ]}
            image={TanqueVivoMonopolarTipoT4}
            type="video"
            title="Tipo T 4 Cámaras"
            label="Tipo T 4 Cámaras"
            description="Otro de los interruptores diferentes, tenemos ..."
            action={{
              type: "external",
              route: "http://localhost:8080/Tanque vivo Monopolar Tipo T 4 cámaras.html",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
    ],
  },
  {
    type: "nested",
    name: "Animación",
    key: "animacion",
    icon: <Icon fontSize="small">animation</Icon>,
    route: "/animacion",
    collapse: [
      {
        type: "collapse",
        name: "Monopolar",
        key: "monopolar",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/animacion/monopolar123",
        Tabs: [
          {
            type: "Tab",
            name: "Monopolar Completo",
            key: "monopolar completo",
            route: "/animacion/monopolar/monopolar_completo",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Monopolar Completo",
                    key: "monopolar completo",
                    route: "/animacion/monopolar/monopolar_completo",
                  },
                  {
                    name: "Camara Monopolar",
                    key: "camara monopolar",
                    route: "/animacion/monopolar/camara_monopolar",
                  },
                ]}
                image={CamaraMonopolarCompleto}
                type="video"
                title="Monopolar Completo"
                label="Monopolar Completo"
                description="En condiciones normales..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor_Monopolar_Completo.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
          {
            type: "Tab",
            name: "Camara Monopolar",
            key: "camara monopolar",
            route: "/animacion/monopolar/camara_monopolar",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Monopolar Completo",
                    key: "monopolar completo",
                    route: "/animacion/monopolar/monopolar_completo",
                  },
                  {
                    name: "Camara Monopolar",
                    key: "camara monopolar",
                    route: "/animacion/monopolar/camara_monopolar",
                  },
                ]}
                image={Explosion}
                type="video"
                title="Camara Monopolar"
                label="Camara Monopolar"
                description="En condiciones normales..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor Explosión.html",
                  color: "info",
                  label: "Acción",
                }}
                action2={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor_Monopolar_Completo.pdf",
                  color: "info",
                  label: "Acción2",
                }}
              />
            ),
          },
        ],
      },
      {
        type: "collapse",
        name: "Vacio",
        key: "vacio",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/animacion/vacio",
        Tabs: [
          {
            type: "Tab",
            name: "Vacio Completo",
            key: "vacio completo",
            route: "/animacion/monopolar/vacio_completo",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Vacio Completo",
                    key: "vacio completo",
                    route: "/animacion/monopolar/vacio_completo",
                  },
                  {
                    name: "Interruptor de Vacio",
                    key: "interruptor de vacio",
                    route: "/animacion/monopolar/interruptor_de_vacio",
                  },
                ]}
                image={VacioCompleto}
                type="video"
                title="Vacio Completo"
                label="Vacio Completo"
                description="En condiciones normales..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor Vacío Completo.html",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
          {
            type: "Tab",
            name: "Interruptor de Vacio",
            key: "interruptor de vacio",
            route: "/animacion/monopolar/interruptor_de_vacio",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Vacio Completo",
                    key: "vacio completo",
                    route: "/animacion/monopolar/vacio_completo",
                  },
                  {
                    name: "Interruptor de Vacio",
                    key: "interruptor de vacio",
                    route: "/animacion/monopolar/interruptor_de_vacio",
                  },
                ]}
                image={Vacio}
                type="video"
                title="Vacio"
                label="Vacio"
                description="En condiciones normales..."
                action={{
                  type: "external",
                  route: "http://localhost:8080/Interruptor de vacio",
                  color: "info",
                  label: "Acción",
                }}
              />
            ),
          },
        ],
      },
      {
        type: "collapse",
        name: "Arco",
        key: "arco",
        icon: <Icon fontSize="small">my_location_outlined_icon</Icon>,
        route: "/animacion/arco",
        Tabs: [
          {
            type: "Tab",
            name: "Arco Normal",
            key: "arco normal",
            route: "/animacion/arco/arco_normal",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Arco Normal",
                    key: "arco normal",
                    route: "/animacion/arco/arco_normal",
                  },
                  {
                    name: "Arco Corto",
                    key: "arco corto",
                    route: "/animacion/arco/arco_corto",
                  },
                ]}
                image={ArcoNormal}
                type="video"
                title="Arco Normal"
                label="Arco"
                description="En condiciones normales..."
              />
            ),
          },
          {
            type: "Tab",
            name: "Arco Corto",
            key: "arco corto",
            route: "/animacion/arco/arco_corto",
            component: (
              <Interruptor
                index={0}
                routes={[
                  {
                    name: "Arco Normal",
                    key: "arco normal",
                    route: "/animacion/arco/arco_normal",
                  },
                  {
                    name: "Arco Corto",
                    key: "arco corto",
                    route: "/animacion/arco/arco_corto",
                  },
                ]}
                image={ArcoCorto}
                type="video"
                title="Arco Corto"
                label="Arco"
                description="Apertura Cierre en condición de corto"
              />
            ),
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Información",
    key: "informacion",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/informacion",
    component: <Informacion />,
  },
];

export default routes;
