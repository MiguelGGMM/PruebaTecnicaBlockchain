//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

//@openzeppelin=https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master (truffle mapping)
import "@openzeppelin/contracts/access/Ownable.sol";

contract RegistroCiudades is Ownable {

    struct Ciudad
    {
        string Nombre;
        uint256 PoblacionHAB;
        uint256 TamanhoKM2;
    }

    constructor() { }

    string [] public paises;
    string [] public ciudades;
    mapping(string=>bool) public paisRegistrado;    
    mapping(string=>bool) public ciudadRegistrada;
    mapping(string=>Ciudad[]) public paisCiudades;

    function REGISTRAR(string memory nombrePais, string memory nombreCiudad, uint256 poblacionCiudadHAB, uint256 tamanhoCiudadKM2) external onlyOwner
    {
        require(ciudadRegistrada[nombreCiudad] == false, "Ciudad ya registrada");

        if(!paisRegistrado[nombrePais]){
            paises.push(nombrePais);
        }
        ciudades.push(nombreCiudad);

        paisRegistrado[nombrePais] = true;
        ciudadRegistrada[nombreCiudad] = true;

        paisCiudades[nombrePais].push(Ciudad
        (
            nombreCiudad,
            poblacionCiudadHAB,
            tamanhoCiudadKM2
        ));        
    }

    function CONSULTAR(string memory nombrePais) external view returns(Ciudad[] memory) { return paisCiudades[nombrePais]; }
}