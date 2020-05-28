14. > **LEZIONE 14**
     1. > *Consegna JS - Ese 31 Cornice*
     
L'obiettivo dell'esercizio era realizzare un’applicazione in cui la cornice, partendo dai bordi esterni, si restringe di un livello
ogni 1/2 sec. Arrivati al livello 5 della cornice (con i quattro quadratini centrali ricolorati di rosso) dopo ½ secondo 
l’animazione ricomincia dal livello più esterno. E' stata creata una matrice dinamicamente di tag div colorati di grigio. Utilizzando
setInterval (che viene eseguito all'infinito) ogni giro viene colorato di rosso un livello differente grazie a una variabile globale
che viene incrementata ogni giro. Arrivati all'ulimo livello la variabile viene riportata a 0, ovvero il livello della cornice più
esterna.
