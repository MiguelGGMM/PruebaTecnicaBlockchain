const { providers, Wallet, Contract, utils } = require('ethers');

//YOUR ACCOUNT PRIVATE KEY;
const PK = ''; 

//DEPLOYED CONTRACT ADDDRESS
const contractAddress = '0xD3045d702844f4608BD32FEa48EfeA8c671E47c6';
const wsProvider = new providers.JsonRpcProvider("https://rpc.testnet.fantom.network");
const wallet = new Wallet(PK);
const account = wallet.connect(wsProvider);

//args
const pais = process.argv[2];
const ciudad = process.argv[3];
const poblacion = process.argv[4];
const tamanho = process.argv[5];

//const basicABI = require("./basicABI.json").basicABI;
const basicABI = `    [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "name": "ciudadRegistrada",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "ciudades",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "paisCiudades",
        "outputs": [
        {
            "internalType": "string",
            "name": "Nombre",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "PoblacionHAB",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "TamanhoKM2",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "name": "paisRegistrado",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "paises",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "nombrePais",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "nombreCiudad",
            "type": "string"
        },
        {
            "internalType": "uint256",
            "name": "poblacionCiudadHAB",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "tamanhoCiudadKM2",
            "type": "uint256"
        }
        ],
        "name": "REGISTRAR",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "nombrePais",
            "type": "string"
        }
        ],
        "name": "CONSULTAR",
        "outputs": [
        {
            "components": [
            {
                "internalType": "string",
                "name": "Nombre",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "PoblacionHAB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "TamanhoKM2",
                "type": "uint256"
            }
            ],
            "internalType": "struct RegistroCiudades.Ciudad[]",
            "name": "",
            "type": "tuple[]"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]`;
const contractRegistroCiudades = new Contract(contractAddress, basicABI, account);

const run = async () => {
    await contractRegistroCiudades.REGISTRAR(pais, ciudad, poblacion, tamanho);
    var answer = await contractRegistroCiudades.CONSULTAR(pais);
    console.log(`Ciudades registradas actualmente para ${pais}:`);
    for(const _ciudad of answer){
        console.log(`Ciudad: ${_ciudad.Nombre}, PoblacionHAB: ${_ciudad.PoblacionHAB.toString()}, TamanhoKM2: ${_ciudad.TamanhoKM2.toString()}`);
    }
}
run();

