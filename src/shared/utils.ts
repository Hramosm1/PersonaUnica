export class UtilsClass {
  public validacionNit(nit: string): boolean {
    //se eliminan posibles espacios en blanco
    nit = nit.replace(/ /g, "");

    //se elmina el guion en el nit
    nit = nit.replace("-", "");

    //divide los digitos
    let nitArray = nit.split("");
    //asigna valor al ultimo digito
    const ultimoDigito =
      nitArray[nitArray.length - 1].toLowerCase() == "k"
        ? 10
        : parseInt(nitArray[nitArray.length - 1]);
    //elimina el ultimo digito del array
    nitArray.pop();
    //se invierte el orden de los digitos
    nitArray = nitArray.reverse();
    //convierte el string array a number array (omitir en js)
    const numberArray = nitArray.map(Number);
    //suma los valores dentro del array
    let sumatoria = numberArray.reduce(
      (acc, cur, index) => (acc += cur * (index + 2)),
      0
    );
    //aplica la operacion 11 - (el residuo de la sumatoria/11)
    const resultado = 11 - (sumatoria % 11);
    //valida si el ultimo digito coincide con el resultado
    return resultado == ultimoDigito;
  }
}
