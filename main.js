let montoTotal = 0;
let presupuestoMaximo = prompt(`Ingrese el presupuesto que dispone la empresa en el 2023: `);

for (let i=1; i <= 12; i++){
    mes=i;
    gastoMensual = prompt(`Ingrese el monto gastado en el mes ${mes} del 2023: `);
    gastoMensual = parseInt(gastoMensual);
    montoTotal += gastoMensual;
}

alert(`El presupuesto otorgado durante el 2023 fue $ ${presupuestoMaximo}`);

if (montoTotal > presupuestoMaximo){
    alert(`Usted ha gastado $ ${montoTotal} y se excedió del presupuesto por $ ${montoTotal-presupuestoMaximo}`);
}
else{
    alert(`Usted ha gastado $ ${montoTotal} y el monto esta correctamente dentro del presupuesto otorgado`);
}