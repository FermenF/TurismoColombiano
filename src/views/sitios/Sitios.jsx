import React from "react";
import foto1 from "../../assets/img/sitios/1.png";
import foto2 from "../../assets/img/sitios/2.png";
import foto3 from "../../assets/img/sitios/3.png";
import foto4 from "../../assets/img/sitios/4.png";
import foto5 from "../../assets/img/sitios/5.png";
import foto6 from "../../assets/img/sitios/6.png";
import foto7 from "../../assets/img/sitios/7.png";
import foto8 from "../../assets/img/sitios/8.png";
import foto9 from "../../assets/img/sitios/9.png";
import ministerio from "../../assets/img/png/ministerio.png"
import bancodelx from "../../assets/img/png/bancoldex.png"
import avianca from "../../assets/img/png/avianca.png"

import "./Sitios.css"

export default function Sitios(){
    return (
        <section className="Sitios">
            <div className="container__sitios">
                <div className="sitiosTextoEInfo">
                    <div style={{fontSize:"30px", textAlign:"center"}}>
                        <h1 style={{color:"#fff", WebkitTextStroke:"3px"}}>TURIMO COLOMBIANO</h1>
                    </div>
                    <div className="textoSitiosContent">
                        <div className="infoSitio">
                            <div style={{color:"#fff"}}>Los sitios turísticos de la región Caribe de Colombia son los más visitados del país. Esta región
                            posee cientos de kilómetros de playas de aguas cristalinas y arenas claras, islas rodeadas de
                            arrecifes de coral y ciudades coloniales.
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <img src={foto1} alt="" style={{width:"90%", borderRadius:"20px"}}/>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Punta  Gallinas</h1>
                            Es el punto más septentrional de América del Sur y se caracteriza por una belleza natural simple y
                            salvaje. El paisaje es desierto y las playas están protegidas por la comunidad Wayuu.
                            </div>
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <img src={foto2} alt="" style={{width:"90%", borderRadius:"20px"}}/>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Cabo de la Vela</h1>
                                Localizado en la alta Guajira, es un precioso espacio donde el mar y el desierto se toman de la mano y dispone de varios acantilados que embellecen aún más si cabe a este lugar tan turístico.
                                Un turismo además ecológico y aventurero, amante de deportes acuáticos como el windsurf o kitesurf.
                            </div>
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <img src={foto3} alt="" style={{width:"90%", borderRadius:"20px"}}/>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Palomino</h1>
                                Se localiza en el punto limítrofe que separa La Guajira y Magdalena. Se trata de un pueblo con un gran atractivo para el turista nacional y extranjero gracias a su biodiversidad. Playas de arena blanca, montañas y selva exótica hacen de este lugar un sitio mágico.
                            </div>
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <img src={foto4} alt="" style={{width:"90%", borderRadius:"20px"}}/>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Parque Nacional Natural Tayrona</h1>
                                El Parque Tayrona es un hermoso lugar cargado de naturaleza, playas increíbles y buena energía, así que si eres amante de la aventura y de las caminatas, este lugar es ideal para ti.
                                Al Parque Tayrona puedes llegar desde Santa Marta, ciudad a la que puedes llegar en carro, avión o en bus. El Zaino es la entrada principal del Tayrona, y está a 32 kilómetros de Santa Marta, sobre la carretera troncal del Caribe que va en dirección a Riohacha y Palomino. Por el Zaino puedes llegar a las playas de Cañaveral, Arrecifes, La Piscina y Cabo San Juan.

                            </div>
                            </div>
                        </div>
                        <div style={{color:"#fff", marginTop:"30px"}}>
                        <h1 style={{color:"#fff"}}>SITIOS TURISTICOS DEL AMAZONAS Y EL PUTUMAYO</h1>
                        Amazonas es magia pura y verde perpetuo; Amazonas es más que un atractivo destino
                        turístico; Amazonas es un verdadero estado del espíritu.
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Parque Nacional Amacayacu, el río de las hamacas</h1>
                                El área es considerada de interés científico, ya que muchos especímenes zoológicos se han recogido en el parque.Calcula que existen unas 150 especies de mamíferos, entre los que se destacan el delfín rosado y algunas especies en vía de extinción como la tanda, el jaguar, el manatí y la nutria. 

                            </div>
                            <img src={foto5} alt="" style={{width:"90%", borderRadius:"20px", marginRight:"10px"}}/>
                            
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>La Isla de los micos</h1>
                                En el parque los visitantes pueden hacer diversas actividades tales como viajes a lo largo del río Amazonas hacia diversas islas, como la isla de los Micos (en donde pueden encontrar centenares de monos), en la isla de Mocagua (se puede ver la Victoria Regia o flor de loto) y una de las actividades más interesantes: un viaje río arriba al lago Tarapoto, en donde se pueden ver los delfines rosados y grises de agua dulce. Además, de las interesantes artesanías de la región amazónica con que cuentan las diferentes comunidades indígenas.
                            </div>
                            <img src={foto6} alt="" style={{width:"90%", borderRadius:"20px", marginRight:"10px"}}/>
                            
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Lago Calima</h1>
                                El lago Calima, como se conoce al Embalse Calima, se ha convertido en uno de los destinos turísticos más importantes del sur occidente Colombiano, gracias a su clima, paisajes y oferta turística; además, sus fuertes y constantes vientos hacen de esta región, el tercer lago en el mundo que ofrece condiciones muy favorables para el aprendizaje y la práctica de deportes como Kiteboard (Kitesurf), Windsurf, Optimist entre otros.
                            </div>
                            <img src={foto7} alt="" style={{width:"90%", borderRadius:"20px", marginRight:"10px"}}/>
                            
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>Nuqui  y Juanchaco</h1>
                                Entre Julio y Octubre de cada año estos gigantes que cruzan los mares, migran desde la Antártida hacia las aguas tibias de nuestros mares. Crían y se aparean y luego regresan nuevamente a alimentarse al sur de continente. 
                            </div>
                            <img src={foto8} alt="" style={{width:"90%", borderRadius:"20px", marginRight:"10px"}}/>
                            
                            </div>
                        </div>
                        <div className="infoSitio" style={{marginTop:"20px"}}>
                            <div style={{color:"#fff"}}>
                            </div>
                            <div style={{display: "flex", marginTop:"40px"}}>
                            <div style={{color:"gray", padding:"20px"}}>
                                <h1 style={{color:"#fff"}}>RESERVA NATURAL EL DANUBIO – CASCADA EL OASIS DE LA SIRENA</h1>
                                Este singular corregimiento, localizado en el municipio de Dagua, es uno de los preferidos por los caleños para salir de la ciudad y pasar el fin de semana. El río Danubio se encuentra por la antigua vía al mar, a 2 horas de Cali y a 1 hora del Corregimiento del Queremal.
                            </div>
                            <img src={foto9} alt="" style={{width:"90%", borderRadius:"20px", marginRight:"10px"}}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container__sitios__text">
                <div style={{color:"#fff", WebkitTextStroke:"2px", fontSize:"18px", }}>
                    CONOCE NUESTROS PATROCINADORES
                </div>
                <div style={{padding:"10px", }}>
                    <img src={ministerio} alt="" style={{width:"300px",  background:"rgba(255,255,255, 0.3)", borderRadius:"20px"}}/>
                    <img src={bancodelx} alt="" style={{width:"300px", background:"rgba(255,255,255, 0.3)", borderRadius:"20px"}}/>
                    <img src={avianca} alt="" style={{width:"300px", background:"rgba(255,255,255, 0.3)", borderRadius:"20px"}}/>
                </div>
            </div>
        </section>
    );
}