alert ("Bienvenido una vez más :)");

function tienda(){

    let usuario = "007";
    let ingreso = false;

    for (let i = 3; i > 0; i--) {
        let ingresoUsuario = prompt(
            "Ingresa tu usuario. Tienes " + (i) + " oportunidades");
        if (ingresoUsuario == usuario) {
            console.log("Bienvenido! Te hemos echado de menos!");
            ingreso = true;

            break;
        } else {
            alert("Ese no es su usuario");
        }
    }

    if(ingreso){

        let caramelos = 250;
        let chupetines = 100;
        let alfajores = 50;
        let gaseosas = 200;
        let stock = prompt("¿Que desea consultar? \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\n5-Retirar\n6-Agregar\nPresiona x para salir");

        while (stock != "x"){
            switch(stock){
                case '1':
                    alert("Actualmente tienes: " + caramelos + " cajas en stock");
                    break;
                case '2':
                    alert("Actualmente tienes: " + chupetines + " cajas en stock");
                    break;
                case '3':
                    alert("actualmente tienes: " + alfajores + " cajas en stock");
                    break;
                case '4':
                    alert("Actualmente tienes: " + gaseosas + " cajas en stock");
                    break;
                case '5':
                    let restarStock = parseInt(prompt("¿Que debemos retirar? \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\nPresiona x para salir"));
                    while (restarStock != "x" && !isNaN(restarStock)){
                        switch(restarStock){
                            case 1:
                                let restarCaramelos = parseInt(prompt("Ingresa la catidad que va a retirar"));
                                if(restarCaramelos > caramelos){
                                    alert("La cantidad ingresada supera la existente")
                                } else {
                                    caramelos = caramelos - restarCaramelos;
                                    alert("Genial!, actualmente tienes: " + caramelos + " cajas en stock");
                                }
                                break;
                            case 2:
                                let restarChupetines = parseInt(prompt("Ingresa la catidad que va a retirar"));
                                if(restarChupetines > chupetines){
                                    alert("La cantidad ingresada supera la existente")
                                } else {
                                    chupetines = chupetines - restarChupetines;
                                    alert("Genial!, actualmente tienes: " + chupetines + " cajas en stock");
                                }
                                break;
                            case 3:
                                let restarAlfajores = parseInt(prompt("Ingresa la catidad que va a retirar"));
                                if(restarAlfajores > alfajores){
                                    alert("La cantidad ingresada supera la existenter")
                                } else {
                                    alfajores = alfajores - restarAlfajores;
                                    alert("Genial!, actualmente tienes: " + alfajores + " cajas en stock");
                                }
                                break;
                            case 4:
                                let restarGaseosas = parseInt(prompt("Ingresa la catidad que va a retirar"));
                                if(restarGaseosas > gaseosas){
                                    alert("La cantidad ingresada supera la existente")
                                } else {
                                    gaseosas = gaseosas - restarGaseosas;
                                    alert("Genial!, actualmente tienes: " + gaseosas + " cajas en stock");
                                }
                                break;
                            //default:
                                //alert("Error");
                        }
                        restarStock = parseInt(prompt("¿Que debemos retirar? \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\nPresiona x para salir"));
                    }
                    break;
                case '6':
                    let agregarStock = parseInt(prompt("¿Que debemos agregar? \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\n5-Presiona x para salir"));
                    while (agregarStock != "x" && !isNaN(agregarStock)){
                        switch(agregarStock){
                            case 1:
                                let agregarCaramelos = parseInt(prompt("Ingresa la catidad que va a agregar"));
                                caramelos = caramelos + agregarCaramelos;
                                alert("Genial!, actualmente tienes: " + caramelos + " cajas en stock");
                                break;
                            case 2:
                                let agregarChupetines = parseInt(prompt("Ingresa la catidad que va a agregar"));
                                chupetines = chupetines + agregarChupetines;
                                alert("Genial!, actualmente tienes: " + chupetines + " cajas en stock");
                                break;
                            case 3:
                                let agregarAlfajores = parseInt(prompt("Ingresa la catidad que va a agregar"));
                                alfajores = alfajores + agregarAlfajores;
                                alert("Genial!, actualmente tienes: " + alfajores + " cajas en stock");
                                break;
                            case 4:
                                let agregarGaseosas = parseInt(prompt("Ingresa la catidad que va a agregar"));
                                gaseosas = gaseosas + agregarGaseosas;
                                alert("Genial!, actualmente tienes: " + gaseosas + " cajas en stock");
                                break;
                            default:
                                alert("Error");
                        }
                        agregarStock = parseInt(prompt("¿Que debemos agregar? \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\n5-Presiona x para salir"));
                    }
                    break;
                default:
                    alert("No tenemos ese producto :(");
            }
            stock = prompt("Seleccione: \n1-Caramelos\n2-Chupetines\n3-Alfajores\n4-Gaseosas\n5-Retirar\n6-Agregar\nPresiona x para salir");
        }

    }else{
        alert("Esta no es su tienda, adiós :(")
    }

    alert ("Lo esperamos mas tarde! :)");
}

tienda();