export default class CL_datosgente {
    constructor(n,se,){
        this.nombre = n;
        this.sexo = se;

    }

set nombre(n){
    this._nombre = n;
}
get nombre(){
    return this._nombre;
}

set sexo(se){
    this._sexo = se;
}
get sexo(){
    return this._sexo;
}













}