import { redirect } from "next/navigation";
import Link from "next/link";

export default async function GetById() {
        
                try{
                const response = await fetch("http://localhost:3000/api-usuarios/GET/0");
                const usuarios = await response.json();
                return(
                        <div className = "usuarios-view">
                                <h3>GET-BY-ID</h3>
                                <div>
                                        <ul>
                                                {usuarios.usuarios.map((usuario) => (
                                                                <li key={usuario.id}>
                                                                        <Link href="get-by-id/0">{usuario.name}</Link>
                                                                </li>
                                                ))}
                                        </ul>
                                </div>
                        </div>
                
                );}catch(error){
                console.log(error);
                redirect("/error");
                }

}