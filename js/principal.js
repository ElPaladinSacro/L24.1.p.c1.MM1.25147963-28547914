import CL_datosgente from "./CL_datosgente.js";
import CL_ContP from "./CL_ContP.js";

let per1=new CL_datosgente("luisa","F");
let per2=new CL_datosgente("Ana","F");
let per3=new CL_datosgente("Jose","M");
let per4=new CL_datosgente("Carmen","F");
let per5=new CL_datosgente("Rosa","F");
let per6=new CL_datosgente("José","M");
let per7=new CL_datosgente("María","F");
let per8=new CL_datosgente("Luz","F");
let per9=new CL_datosgente("Rafael","M");
let per10=new CL_datosgente("Liz","F");
let per11=new CL_datosgente("Marcos","M");
let per12=new CL_datosgente("Leo","M");

let ProcesarP=new CL_ContP();
ProcesarP.procesarGente(per1);
ProcesarP.procesarGente(per2);
ProcesarP.procesarGente(per3);
ProcesarP.procesarGente(per4);
ProcesarP.procesarGente(per5);
ProcesarP.procesarGente(per6);
ProcesarP.procesarGente(per7);
ProcesarP.procesarGente(per8);
ProcesarP.procesarGente(per9);
ProcesarP.procesarGente(per10);
ProcesarP.procesarGente(per11);
ProcesarP.procesarGente(per12);

let salida=document.getElementById("Salida");
salida.innerHTML += "Cantidad de Personas: "+ProcesarP.cont_ttalpers;
salida.innerHTML += "<br> ";
salida.innerHTML += "Cantidad de Hombres: "+ProcesarP.cont_Masc;
salida.innerHTML += "<br>";
salida.innerHTML += "Cantidad de Mujeres: &nbsp;"+ProcesarP.cont_Fmeni;

