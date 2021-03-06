'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
  Existen 2 grupos de rutas: Las que necesitan autenticación del usuario y las que no. TOMAR MUY EN CUENTA ESTO
  Dentro del grupo de las que necesitan autenticación se debe especificar el middleware para verificar si el
  usuario(autenticado) tiene el permiso para acceder a esa ruta. Ejemplo: .middleware('verifyPermission:1')
  El número 1 indica el permiso que debe tener para acceder a esa ruta
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

const addPrefixToGroup = group => {
  // Grupo para rutas con prefijo /api/
  group.prefix("api");
  return group;
};


addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas sin protección de autenticación aquí
    Route.post('login_by_mail', 'UserController.logueoSinContrasena')
    Route.post("procesar_pago/:tienda_id/:costoM/:cantM/:type/:op", "UserController.procesarPago");
    Route.get("redireccionar_pago", "UserController.redirpay");
    Route.put("aprobar_pago/:tienda_id", "UserController.aprobarPagoStripe");
    Route.post("login", "UserController.login");
    Route.post("registrar_cliente", "UserController.register")
    Route.post("registrar_tienda", "UserController.registerTienda")
    Route.get("validate_email/:email", "UserController.validateEmail")
    Route.get("perfil_img/:file", "UploadController.perfilImg")
    Route.get('perfil_img/:file', 'UploadController.getFileByDirectoryPerfil')
    Route.get("tienda_files/:file", "UploadController.tiendaFiles")
    Route.get("producto_files/:file", "UploadController.productoFiles")
    Route.get("email_send/:email", "UserController.recuperacion")
    Route.get("email_send_app/:email", "UserController.recuperacionapp")
    Route.put("actualizar_pass/:code", "UserController.actualizarPass");

    Route.post("user_by_id/:id", "UserController.userById")
    Route.get("productos/:proveedor_id", "ProductoController.productosByProveedorId")

    Route.get('publicidad_img/:file', 'UploadController.getFilePublicidad')
    Route.get("publicidad", "PublicidadController.index")
    Route.get("proveedores", "UserController.proveedores")
    Route.get("proveedores_no_logueo", "UserController.proveedoresNoLogueo")
    Route.get("proveedores/:id", "UserController.proveeUbi")
    Route.get("all_productos", "ProductoController.allProductos")
    Route.get("all_productos_no_logueo", "ProductoController.allProductosNoLogueo")

    ///////////////////////Direccion/////////////////////////////////////////
    Route.put("direccion/:id", "UserController.editarDireccion")
    Route.post("nueva_direccion", "UserController.nuevaDireccion")
    Route.get("provincias", "UserController.provincias")
    Route.get("ciudades/:id", "UserController.ciudades")
    Route.delete("direccion/:id", "UserController.eliminarDireccion")
    Route.get("comentarios/:id", "ProductoController.comentariosTienda")
    ///////////////////////Direccion/////////////////////////////////////////
    Route.post("prueba", "UserController.prueba")
    Route.post("pago_ok", "ProductoController.pago_ok")
    /* Route.post("pago_ok/:tienda_id/:user_id/", "ProductoController.pago_ok"); */
    Route.post("pago_no_ok", "ProductoController.pago_no_ok")

    Route.get("pagar_telde", "PaymentController.create")
    Route.post("procesador_pagos/:user_id/:montoTotal/:ref/:tienda_id/:type/:op", "PaymentController.procesarPago");

  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí

    Route.get("user_info", "UserController.userInfo") // metodo para obtener informacion del usuario que esta logueado
    Route.put("update_enable/:id", "UserController.userEnable")
    Route.get("clientes", "UserController.clientes")
    Route.put("editar_proveedor", "UserController.editarP")
    Route.put("editar_cliente", "UserController.editarC")
    Route.post("subir_foto_perfil/:id", "UploadController.subirPerfil")
    Route.post("subir_foto_portada/:id", "UploadController.subirPortada")
    Route.post("subir_archivo_proveedor/:id", "UploadController.subirImgTienda")
    Route.delete("eliminar_archivo_proveedor/:file", "UploadController.eliminarImgTienda")

    Route.post("proveedor_status/:id", "UserController.proveedorStatus")

    Route.post("publicidad", "PublicidadController.create")
    Route.put('publicidad/:id', 'PublicidadController.update')
    Route.delete('publicidad/:id', 'PublicidadController.destroy')
    Route.post("publicidad_enable/:id", "PublicidadController.publicidadEnable")

    //////////////////////////PRODUCTOS///////////////////////////////////////
    Route.post("producto", "ProductoController.store")
    Route.delete("producto/:id", "ProductoController.destroy")
    Route.get("producto/:id", "ProductoController.show")
    Route.put("producto/:id", "ProductoController.update")
    Route.get("productos", "ProductoController.index")
    Route.post("subir_archivo_producto/:producto_id", "UploadController.subirImgProducto")
    Route.post("subir_perfil_producto/:producto_id", "UploadController.subirPerfilProducto")
    Route.delete("eliminar_archivo_producto/:file/:producto_id", "UploadController.eliminarImgProducto")

    Route.post("comprar_productos", "ProductoController.pre_pago")
    Route.post("comprar_productos_comprobante", "ProductoController.comprarTransferencia")
    Route.get("productos_vendidos", "ProductoController.productosVendidos")
    //////////////////////////////////////////////////////////////////////////

    ///////////////////////FAVORITOS/////////////////////////////////////////
    Route.get("favoritos", "FavoriteController.index")
    Route.get("favorito/:proveedor_id", "FavoriteController.show")
    Route.post("favorito/:proveedor_id", "FavoriteController.store")
    Route.delete("favorito/:proveedor_id", "FavoriteController.destroy")
    ///////////////////////FAVORITOS/////////////////////////////////////////

   ///////////////////////Reportes/////////////////////////////////////////
    Route.get("reportes/:type", "ProductoController.reportes")
    Route.put("compra_status/:id_pedido", "ProductoController.updateCompra")
    Route.post("calificar_tienda", "ProductoController.calificarTienda")
    ///////////////////////Reportes/////////////////////////////////////////

    ///////////////////////Monedero/////////////////////////////////////////
    Route.get("saldo_actual", "MonederoController.showSaldo")
    Route.get("retiros", "MonederoController.index")
    Route.get("aprobar_retiro/:id", "MonederoController.update")
    Route.get("retiros_admin", "MonederoController.indexAdmin")
    Route.post("solicitar_retiro", "MonederoController.create")
    Route.get("ventas_dia_mes", "MonederoController.ventasDyM")
    Route.post("estadistica_admin", "MonederoController.crearEstadisticaAdmin")
    Route.post("estadistica", "MonederoController.crearEstadistica")
    Route.post("estadisticaMembresias", "MonederoController.crearEstadisticaMembresia")
    ///////////////////////Monedero/////////////////////////////////////////



  }).middleware("auth")
);
