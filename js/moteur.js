class Moteur{
    constructor(){
        this.marche = false;
    }
}

class Thermique extends Moteur{
    constructor(){
        super();
        this.name = "thermique";
        this.autonomie = 600;
        this.capacite = 40;
    }
}

class Electrique extends Moteur{
    constructor(){
        super();
        this.name = "electrique";
        this.autonomie = 300; 
    }
}

