package ar.edu.poi.domain

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.RepoUsuario.RepositorioUsuario
import org.uqbar.xtrest.json.JSONUtils
import ar.edu.singleton.RepositorioSingleton
import ar.edu.POIs.Poi
import ar.edu.usuario.Usuario
import org.uqbar.commons.model.UserException

@Accessors
@JsonIgnoreProperties(ignoreUnknown=true)
class UtilitiesDetallesPoi {

	extension JSONUtils = new JSONUtils

	String idUsuario
	String comentario
	String puntuacion
	String pedido

	new() {
	}

	new(String _idUsuarioCalificador, String _comentario, String _puntuacion, String _pedido) {
		idUsuario = _idUsuarioCalificador
		comentario = _comentario
		puntuacion = _puntuacion
		pedido = _pedido

	}

	def String actualizarDetalle(String id) {
			if (pedido == "favorito") {
				actualizarFavoritos(id)
			} else if (pedido == "review") {
				validarActualizacion()
				actualizarCalificacion(id)
			}
			else{throw new UserException("Tipo de pedido incompatible con el servicio brindado") }
	}
	
	def validarActualizacion() {
		if (comentario.nullOrEmpty) {
			throw new UserException("Debe ingresar un comentario.")
		}
		if (puntuacion.nullOrEmpty) {
			throw new UserException("Debe ingresar una puntuacion")
		}
	}

	def String actualizarFavoritos(String id) {
		val usuarioLogueado = buscarUsuario(idUsuario)
		usuarioLogueado.actualizarListaFavoritos(stringToLong(id))//stringToInt(id))
		usuarioLogueado.toJson

	}

	def String actualizarCalificacion(String id) {
		val poiSeleccionado = buscarPoi(id)
		actualizarCalificacionesDePoi(buscarPoi(id))
		poiSeleccionado.toJson
	}

	def int stringToInt(String id) {
		Integer.parseInt(id)
	}
	
	def Long stringToLong(String id){
		Long.parseLong(id)
	}

	def Poi buscarPoi(String id) {
		RepositorioSingleton.instance.searchById(stringToLong(id))//stringToInt(id))
	}

	def Usuario buscarUsuario(String id) {
		RepositorioUsuario.instance.searchById(stringToLong(id))//stringToInt(id))
	}

	def void actualizarCalificacionesDePoi(Poi poiSeleccionado) {
		poiSeleccionado.calificacion.asignarReview(buscarUsuario(idUsuario), comentario,
			stringToInt(puntuacion))
	}

}
