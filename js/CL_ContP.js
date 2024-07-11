import CL_datosgente from "./CL_datosgente.js";
export default class CL_ContP {
    constructor() {
        this.cont_ttalpers = 0;
        this.cont_Masc = 0;
        this.cont_Fmeni = 0;
    }

procesarGente(g){ //pago Por Cada Rumbero
    
    this.cont_ttalpers ++;

    if (g.sexo === "M") {
        return this.cont_Masc ++;
    } else {
        return this.cont_Fmeni ++;
    }
}




}



