import { createRouter, createWebHistory } from "vue-router";
//import Contacto from "";
// import Cotizacion from "../view/Cotizacion.vue";
// import DesarrollosEspeciales from "../view/DesarrollosEspeciales.vue";
// import EcoAmigables from "../view/EcoAmigables.vue";
import Home from "../view/Home.vue";
// import NuestraEmpresa from "../view/NuestraEmpresa.vue";
// import Producto from "../view/Producto.vue";
import Productos from "../view/Productos.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
// import NotFound from "../view/NotFound.vue";

const routes = [
    {
      path: "/",
      redirect: "/inicio",
      component: DefaultLayout,
      children: [
        { path: "/inicio", name: "Inicio", component: Home },
        { path: "/productos", name: "Productos", component: Productos },
      ],
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  
  export default router;