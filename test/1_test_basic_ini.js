const RegistroCiudades = artifacts.require("RegistroCiudades");

var registroCiudades = null;

const log = (message) => {
    if(debug){
        console.log(`[DEBUG] ${message}`);
    }
}

contract("RegistroCiudades", function (accounts) {

    /*
    *   RegistroCiudades tests
    */
  
    //Accounts
    //var main_account = accounts[0];

    it("Should fail if a contract is not deployed", async function(){
        try {
            registroCiudades = await RegistroCiudades.deployed();

            log(`Contracts deployed: RegistroCiudades`);
            log(`Addresses: ${registroCiudades.address}`);

            return assert.isTrue(true);
        } catch (err) {
            console.log(err.toString());
            return assert.isTrue(false);
        }
    });

    it("Register city not previously registered, print country cities", async function(){
        try {         
            await registroCiudades.REGISTRAR("Francia", "Lyon", 3000000, 100);
            log((await registroCiudades.CONSULTAR("Francia")));
            return assert.isTrue(true);
        } catch (err) {
            console.log(err.toString());
            return assert.isTrue(false);
        }
    });

    it("Register another city not previously registered, print country cities", async function(){
        try {  
            await registroCiudades.REGISTRAR("Francia", "Paris", 2161000, 105);       
            log((await registroCiudades.CONSULTAR("Francia")));
            return assert.isTrue(true);
        } catch (err) {
            console.log(err.toString());
            return assert.isTrue(false);
        }
    });

    it("Try register city previously registered,should fail", async function(){
        var pass = true;
        try {         
            await registroCiudades.REGISTRAR("Francia", "Lyon", 3000000, 100);
            log((await registroCiudades.CONSULTAR("Francia")));
            pass = false;
        } catch (err) {
            console.log(err.toString());
            pass = true;
        }
        return assert.isTrue(pass);
    });
});