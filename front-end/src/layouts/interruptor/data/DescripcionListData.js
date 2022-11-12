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

// Images
import monopolar from "assets/images/interruptor/monopolar.jpeg";
// import videoPrueba from "assets/videos/lake_aerial_view_drone_flight_view_943.mp4";
import videoPrueba2 from "assets/videos/Tanque vivo Monopolar.mp4";

export default [
  {
    image: monopolar,
    title: "Información General",
    label: "Descripción",
    description: "Al dar clicick en el rayo...",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
  {
    image: monopolar,
    title: "Aceite",
    label: "Gran Volumen",
    description:
      "No debí poner mis ojos \n En alguien como tú \nYa sabia que tus anhelos van buscando otros sueños \nQue te llevan de mi vida cada vez mas lejos",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
  {
    image: monopolar,
    title: "Mecanismos de Operación",
    label: "Monopolar",
    description: "Y siento morir lentamente en mi alma a una ilusión",
    action: {
      type: "external",
      route: "Monopolar.html",
      color: "info",
      label: "Simulación",
    },
  },
  {
    image: monopolar,
    title: "Dispositivos de conmutación",
    label: "Tanque Muerto",
    description: "Para ti yo me había inventado un mundo blanco de luz",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
  {
    image: monopolar,
    title: "Accionamiento",
    label: "Hidraulico",
    description: "Ya sabia que tus anhelos van buscando otros sueños",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
  {
    image: monopolar,
    title: "Caso espacial",
    label: "Resistor-Capacitivo",
    description: " – – –– –––– –––– –– ––––––––",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
  {
    key: "tanque_vivo_monopolar",
    image: videoPrueba2,
    type: "video",
    title: "Animación",
    label: "Interruptor Monopolar",
    description: "Interruptor de un solo polo\ntensión nominal 13,2 kV",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Acción",
    },
  },
];
