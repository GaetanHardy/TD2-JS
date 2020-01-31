window.addEventListener("load", event => test_moto());

class Moto{
    constructor(name, moteur){
       this.name = name || "moto";
       this.voyants = { marche : false };
       this.moteur = moteur;
    }
    contact() {
        console.log("on allume le contact");
        this.allumerLesVoyants();
    }
    allumerLesVoyants() {
        console.log("les voyants s'allument");
        this.voyants.marche = true;
    }
    demarre() {
        console.log("démarre le moteur");
        this.moteur.marche = true;
    }
    decontact() {
        console.log("on coupe le contact");
        this.eteindreLesVoyants();
    }
    eteindreLesVoyants() {
        console.log("les voyants s'éteignent");
        this.voyants.marche = false;
    }
    coupe() {
        console.log("on coupe le moteur");
        this.moteur.marche = false;
    }
}

class DeuxRoues extends Moto{
    constructor(name, moteur){
        super(name || "deux roues", moteur);
        this.roues = 2;
    }
}

class TroisRoues extends Moto{
    constructor(name, moteur){
        super(name || "trois roues", moteur);
        this.roues = 3;
    }
}

const test_moto = () => {
    let maMoto = new DeuxRoues("Ma moto thermique", new Thermique());
    console.log(maMoto.moteur.name);
}