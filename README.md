# PruebaTecnicaBlockchain
 
## ENUNCIADO PARTE 1

Programar un smart contract y desplegarlo en la testnet de Fantom.

El smart contract debe contener los siguientes elementos:

· Una función llamada REGISTRAR que permita registrar “Ciudades”. Cada una de esas ciudades debe contener la siguiente información:

o Nombre

o Población

o Tamaño

· Las ciudades se deben guardar según el país al que pertenezcan.

· Solo puede haber una ciudad de cada país. Si se intenta registrar una ciudad de un país que ya ha sido registrado previamente, se debe impedir ejecutar dicho registro.

· Una función llamada CONSULTAR que permita consultar la información de cada ciudad a partir del país al que pertenece dicha ciudad.

· Solo el propietario del contrato puede registrar información.

Para hacer la programación y el despliegue del contrato se recomienda utilizar REMIX IDE.

## ENUNCIADO PARTE 2

Programar un script de Node.js que permita invocar las dos funciones mencionadas en el smart contract anterior. El script tiene que hacer lo siguiente:

· Hacer una llamada a la función REGISTRAR para guardar los siguientes datos:

o Francia

o Lyon

o 3000000

o 100

· Hacer una llamada a la función CONSULTAR para obtener los datos asociados a Francia. Imprimir resultado por consola.
