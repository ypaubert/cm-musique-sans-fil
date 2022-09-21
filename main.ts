namespace musiqueSansFil {
    /*
    * toto
    */
    export function Arreter_la_note_par_radio(canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
    export function Jouer_la_note_par_radio(canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
}