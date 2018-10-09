namespace isolated_scope {
    export var_exportada: string = "se puede acceder desde afuera";
    var var_exportada: string = "se puede acceder solo dentro del namespace";
}

console.log(isolated_scope.var_exportada)
console.log(isolated_scope.var_exportada)