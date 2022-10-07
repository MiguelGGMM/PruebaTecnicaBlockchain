try{
  const RegistroCiudades = artifacts.require("RegistroCiudades"); 

  //Migration
  const mainnet = false;

  console.log('Migrating');    

  module.exports = function(deployer) {
    if(mainnet){
        return deployer.deploy(RegistroCiudades);
    }else{
        return deployer.deploy(RegistroCiudades);
    }
  };

}catch(err){
  console.log(err.toString());
}
