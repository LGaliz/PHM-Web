package ar.edu.poi.controller

import ar.edu.RepoUsuario.RepositorioUsuario
import ar.edu.poi.domain.PoiBootstrap
import ar.edu.singleton.RepositorioSingleton
import ar.edu.usuario.Usuario
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.annotation.Put
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils
import ar.edu.poi.domain.UtilitiesDetallesPoi

@Controller
class PoiController {

	extension JSONUtils = new JSONUtils

	def static void main(String[] args) {
		PoiBootstrap.instance.run
		PoiBootstrap.instance.agregarPoisFavoritosAUsuarios
		PoiBootstrap.instance.agregarCalificacionesALosPois
		XTRest.start(PoiController, 9006)

	}

	@Get("/buscador")
	def Result pois() {
		val pois = RepositorioSingleton.instance.allInstances
		response.contentType = ContentType.APPLICATION_JSON
		ok(pois.toJson)
	}

	@Put("/buscador")
	def Result usuarioQueSolicitaPois(@Body String body) {
		try {
			response.contentType = ContentType.APPLICATION_JSON
			ok(generarUsuarioParaBuscador(body))
		} catch (Exception e) {
			badRequest(e.message)
		}
	}

	def String generarUsuarioParaBuscador(String body) {
		val usuario = body.fromJson(Usuario)
		val usuarioLogueado = RepositorioUsuario.instance.searchById(usuario.id)
		val poisUsuario = RepositorioSingleton.instance.buscadorPoisPersonales(usuarioLogueado)
		poisUsuario.toJson
	}

	@Put("/login")
	def Result iniciarSesion(@Body String body) {
		try {
			val usuarioLogueado = iniciarSesion(body)
			response.contentType = ContentType.APPLICATION_JSON
			ok(usuarioLogueado.toJson)
		} catch (Exception e) {
			badRequest(e.message)
		}
	}

	def iniciarSesion(String body) {
		val usuarioIngresado = body.fromJson(Usuario)
		val sesion = RepositorioUsuario.instance.iniciarSesion(usuarioIngresado)
		sesion
	}
	
	@Get("/detallesPoi/ID=:id")
	def Result poiSeleccionado() {
		try {
			response.contentType = ContentType.APPLICATION_JSON
			ok(devolverPoiSeleccionado(id))
		} catch (Exception e) {
			badRequest(e.message)
		}
	}
	
	@Put("/detallesPoi/ID=:id")
	def Result actualizarDetalle(@Body String body) {
		try {
			val actualizacion = actualizarDetalles(body, id)
			response.contentType = ContentType.APPLICATION_JSON
			ok(actualizacion)
		} catch (Exception e) {
			badRequest(e.message)
		}
	}
	
	def String devolverPoiSeleccionado(String id) {
		val poi = RepositorioSingleton.instance.searchById(Long.parseLong(id))//Integer.parseInt(id))
		poi.toJson
	}

	def String actualizarDetalles(String body, String id) {
		val detallesPoi = body.fromJson(UtilitiesDetallesPoi)
		val datosAWeb = detallesPoi.actualizarDetalle(id)
		datosAWeb

	}
}
