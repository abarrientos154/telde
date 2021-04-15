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
    Route.post("login", "UserController.login");
    Route.post("registrar_cliente", "UserController.register")
    Route.get("validate_email/:email", "UserController.validateEmail")
    Route.get("perfil_img/:file", "UploadController.perfilImg")
    Route.get("tienda_files/:file", "UploadController.tiendaFiles")
    Route.get("producto_files/:file", "UploadController.productoFiles")

    Route.post("user_by_id/:id", "UserController.userById")
    Route.get("productos/:proveedor_id", "ProductoController.productosByProveedorId")

    Route.post("categorias_no_logueado/:proveedor_id", "CategoriaController.indexNoLogueado")

    Route.post("flow_by_id/:id", "UserController.flowConfigData")

    Route.get('publicidad_img/:file', 'UploadController.getFilePublicidad')
    Route.get("publicidad", "PublicidadController.index")
    Route.get("proveedores", "UserController.proveedores")
    Route.get("all_productos", "ProductoController.allProductos")
    Route.get("todo", "ProductoController.todo")
  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí

    Route.get("user_info", "UserController.userInfo") // metodo para obtener informacion del usuario que esta logueado
    Route.put("editar_proveedor", "UserController.editarP")
    Route.post("subir_foto_perfil/:id", "UploadController.subirPerfil")
    Route.post("subir_foto_portada/:id", "UploadController.subirPortada")
    Route.post("subir_archivo_proveedor/:id", "UploadController.subirImgTienda")
    Route.delete("eliminar_archivo_proveedor/:file", "UploadController.eliminarImgTienda")

    Route.put("configuracion_flow", "UserController.flowConfig")

    Route.post("proveedor_status/:id", "UserController.proveedorStatus")

    Route.post("flow", "UserController.flow")
    Route.get("get_info_flow/:token", "UserController.flowResponse")
    Route.post("store_flow", "UserController.store_flow")

    Route.post("publicidad", "PublicidadController.create")
    Route.put('publicidad/:id', 'PublicidadController.update')
    Route.delete('publicidad/:id', 'PublicidadController.destroy')
    Route.post("publicidad_enable/:id", "PublicidadController.publicidadEnable")

    ////////////////CATEGORIAS Y SUBCATEGORIAS//////////////////
    Route.get("categorias_y_sub", "CategoriaController.index")
    ///////////////////////////////////////////////////////////////////////////

    //////////////////////////PRODUCTOS///////////////////////////////////////
    Route.post("producto", "ProductoController.store")
    Route.delete("producto/:id", "ProductoController.destroy")
    Route.get("producto/:id", "ProductoController.show")
    Route.put("producto/:id", "ProductoController.update")
    Route.get("productos", "ProductoController.index")
    Route.post("subir_archivo_producto/:producto_id", "UploadController.subirImgProducto")
    Route.delete("eliminar_archivo_producto/:file/:producto_id", "UploadController.eliminarImgProducto")

    Route.post("comprar_productos", "ProductoController.comprarProductos")
    Route.post("comprar_productos_comprobante", "ProductoController.comprarTransferencia")
    //////////////////////////////////////////////////////////////////////////

    ///////////////////////FAVORITOS/////////////////////////////////////////
    Route.get("favoritos", "FavoriteController.index")
    Route.get("favorito/:proveedor_id", "FavoriteController.show")
    Route.post("favorito/:proveedor_id", "FavoriteController.store")
    Route.delete("favorito/:proveedor_id", "FavoriteController.destroy")
    ///////////////////////FAVORITOS/////////////////////////////////////////

   ///////////////////////Reportes///////////////////////////////////////// 
    Route.get("reportes/:type", "ProductoController.reportes")
    /* Route.get("favorito/:proveedor_id", "ProductoController.reporte")
    Route.post("favorito/:proveedor_id", "FavoriteController.store")
    Route.delete("favorito/:proveedor_id", "FavoriteController.destroy") */
    ///////////////////////Reportes/////////////////////////////////////////



  }).middleware("auth")
);
