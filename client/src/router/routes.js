
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Administrador
      { path: '/administrador', component: () => import('pages/Admin/Administrador.vue') },
      { path: '/usuarios', component: () => import('pages/Admin/Users.vue') },
      { path: '/retiros', component: () => import('pages/Admin/Monedero.vue') },
      { path: '/reportes', component: () => import('pages/Admin/Reports.vue') },
      // Cliente
      { path: '/inicio', component: () => import('pages/Home.vue') },
      { path: '/tiendas_favoritas', component: () => import('pages/Cliente/TiendasFavoritas.vue') },
      { path: '/tiendas', component: () => import('pages/Cliente/Tiendas.vue') },
      { path: '/tiendas/:cat', component: () => import('pages/Cliente/Tiendas.vue') },
      { path: '/tiendas/:cat/:subcat', component: () => import('pages/Cliente/Tiendas.vue') },
      { path: '/mis_pedidos', component: () => import('pages/Cliente/Pedidos.vue') },
      { path: '/editar-mi-perfil', component: () => import('pages/Cliente/EditarPerfilCliente.vue') },
      // Tienda
      { path: '/producto', component: () => import('pages/Proveedor/Producto.vue') },
      { path: '/editar_producto/:producto_id', component: () => import('pages/Proveedor/Producto.vue') },
      { path: '/estadisticas', component: () => import('pages/Proveedor/Estadisticas.vue') },
      { path: '/mis_pedidos_tienda', component: () => import('pages/Proveedor/Pedidos.vue') },
      { path: '/monedero', component: () => import('pages/Proveedor/Monedero.vue') },
      { path: '/editar-perfil', component: () => import('pages/Proveedor/Perfil.vue') },
      // Generales
      { path: '/tienda/:proveedor_id', component: () => import('pages/Tienda.vue') },
      { path: '/tienda/:proveedor_id/:result', component: () => import('pages/Tienda.vue') },
      { path: '/contacto', component: () => import('pages/Contacto.vue') },
      { path: '/Blog', component: () => import('pages/Blog.vue') },
      { path: '/somos', component: () => import('pages/SomosNova.vue') },
      { path: '/Blog2', component: () => import('pages/Blog2.vue') }
      // Administrador
      /* { path: '/banners_publicidad', component: () => import('pages/Admin/Banners.vue') },
      { path: '/emprendedores', component: () => import('pages/Admin/Proveedores.vue') },
      { path: '/perfil_proveedor/:id', component: () => import('pages/Proveedor/Perfil.vue') },
      { path: '/proveedor/:proveedor_id', component: () => import('pages/Proveedor/ListaProductos.vue') }, */
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/splash', component: () => import('pages/Splash.vue') },
  { path: '/registro', component: () => import('pages/Registro/Parte1.vue') },
  { path: '/registro-cliente', component: () => import('pages/Registro/RegistroCliente.vue') },
  { path: '/registro-tienda', component: () => import('pages/Registro/RegistroTienda.vue') },
  { path: '/pago-membresia/:id/:slide', component: () => import('pages/Registro/PagoMembresia.vue') },
  { path: '/pagar_telde/:user_id', component: () => import('pages/PagarTelde.vue') },
  /* { path: '/splash', component: () => import('pages/Splash.vue') }, */
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '*',
    redirect: '/splash'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
