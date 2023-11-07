import { redirect } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// <a href="/"> <FontAwesomeIcon icon={faRandom}/> </a>

export default async function GetAllUsers() {
        
                try{
                const response = await fetch("http://localhost:3000/api-usuarios/GET/0");
                const usuarios = await response.json();

                return(
                        <div className = "usuarios-view">
                                <h1>GET-ALL-USERS</h1>
                                <div>
                                        <ul>
                                                {
                                                        usuarios.usuarios.map((usuario) => (
                                                                <li key={usuario.id}>
                                                                        <p>{usuario.id}</p>
                                                                        <p>{usuario.name}</p>
                                                                        <p>{usuario.email}</p>
                                                                        <p>{usuario.text}</p>

                                                                </li>
                                                        ))
                                                }

                                        </ul>
                                </div>
                        </div>
                
                );

                }
                
                catch(error){
                console.log(error);
                redirect("/error");
                }

}