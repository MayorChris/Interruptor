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
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

// Videos
import TanqueVivoMonopolar from "assets/videos/Tanque vivo Monopolar.mp4";
import TanqueVivoTripolar from "assets/videos/Tanque vivo Tripolar.mp4";
import ROSERO from "assets/videos/TQE.mp4";
import ROSERO2 from "assets/images/interruptor/fondo.jpeg";

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
        image={ROSERO2}
        title="Animación"
        label="Monopolar"
        description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
        action={{
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "info",
          label: "Acción",
        }}
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
        icon: <Icon fontSize="small">ac_unit_icon</Icon>,
        route: "/medios_extincion/aire",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Aire",
                key: "aire",
                route: "/medios_extincion/aire",
              },
            ]}
            image={ROSERO}
            type="video"
            title="Aire"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
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
        type: "collapse",
        name: "Aceite",
        key: "aceite",
        icon: <Icon fontSize="small">switch_left</Icon>,
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
                image={TanqueVivoMonopolar}
                type="video"
                title="Aceite"
                label="Gran Volumnen"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
                image={TanqueVivoTripolar}
                type="video"
                title="Aceite"
                label="Pequeño Volumnen"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
        name: "vacio",
        key: "vacio",
        icon: <Icon fontSize="small">switch_left</Icon>,
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
            image={TanqueVivoMonopolar}
            type="video"
            title="Vacio"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },

      {
        type: "collapse",
        name: "SF6",
        key: "SF6",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/medios_extincion/vacio",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "SF6",
                key: "SF6",
                route: "/medios_extincion/vacio",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="SF6"
            label="Monopo"
            description="Interruptor de un solo polo\ntensión nominal 13,2 "
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
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
    name: "Dispositivos de conmutación",
    key: "dispositivos_conmutacion",
    icon: <Icon fontSize="small">switch_left</Icon>,
    route: "/dispositivos_conmutacion",
    collapse: [
      {
        type: "collapse",
        name: "Tanque Vivo",
        key: "tanque_vivo",
        icon: <Icon fontSize="small">switch_left</Icon>,
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
                title="Animación"
                label="Monopolar"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
                title="Animación"
                label="Tripolar"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
        icon: <Icon fontSize="small">switch_left</Icon>,
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
                image={TanqueVivoMonopolar}
                type="video"
                title="Animación"
                label="Monopolar"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
                image={TanqueVivoTripolar}
                type="video"
                title="Animación"
                label="Tripolar"
                description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
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
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
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
            image={TanqueVivoMonopolar}
            type="video"
            title="Resorte"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Neumático",
        key: "Neumático",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/Neumatico",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Neumático",
                key: "Resorte",
                route: "/accionamiento/Neumatico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Neumático"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Hidráulico",
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/hidraulico",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Hidraúlico",
                key: "Resorte",
                route: "/accionamiento/hidraulico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Hidráulico"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
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
    name: "Otros",
    key: "otros",
    icon: <Icon fontSize="small">api</Icon>,
    route: "/otros",
    collapse: [
      {
        type: "collapse",
        name: "Resistor-Capacitivo",
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/resistor-capacitivo",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Resistor-Capacitivo",
                key: "Resorte",
                route: "/accionamiento/resorte",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Resistor-Capacitivo"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Tipo T",
        key: "Neumático",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/Tipo_T",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Tipo T",
                key: "Resorte",
                route: "/accionamiento/Neumatico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Tipo T"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Tipo T 4 Cámaras",
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/Tipo_T_4_Camaras",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Tipo T 4 Cámaras",
                key: "Resorte",
                route: "/accionamiento/hidraulico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Tipo T 4 Cámaras"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
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
        name: "Cámara Monopolar",
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/camara_monopolar",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Resistor-Capacitivo",
                key: "Resorte",
                route: "/accionamiento/resorte",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Cámara Monopolar"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Vacío",
        key: "Neumático",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/Animacion_Vacio",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Vacío",
                key: "Resorte",
                route: "/accionamiento/Neumatico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Tipo T"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
              color: "info",
              label: "Acción",
            }}
          />
        ),
      },
      {
        type: "collapse",
        name: "Tipo T 4 Cámaras",
        key: "aire",
        icon: <Icon fontSize="small">switch_left</Icon>,
        route: "/accionamiento/Tipo_T_4_Camaras",
        component: (
          <Interruptor
            index={0}
            routes={[
              {
                name: "Tipo T 4 Cámaras",
                key: "Resorte",
                route: "/accionamiento/hidraulico",
              },
            ]}
            image={TanqueVivoMonopolar}
            type="video"
            title="Tipo T 4 Cámaras"
            label="Monopolar"
            description="Interruptor de un solo polo\ntensión nominal 13,2 kV"
            action={{
              type: "internal",
              route: "/pages/profile/profile-overview",
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
    name: "Información",
    key: "informacion",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/informacion",
  },
];

export default routes;
