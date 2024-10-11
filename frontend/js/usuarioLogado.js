import api from "./api.js";
import rotaImagem from "../utils/rotaImagem.js";

async function renderizarFotoDoUsuario(){
try {
    const usuarioLogado = await api("usuarios/9");
    // Get em "usuarios/9"
const fotoPerfilElemento = document.querySelector(".perfil__photo")
// buscar foto do usuário      
fotoPerfilElemento.src = rotaImagem + usuarioLogado.imagem; 
} catch (error) {
    console.error(error)
    alert("Algo aconteceu ao renderizar foto do usuario")
}}

export default renderizarFotoDoUsuario;



//get em "usuarios/9/canais"



//buscar inscricoes do usuario

