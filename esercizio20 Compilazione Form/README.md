4. > **LEZIONE 4**
     1. > *Consegna JS - Ese 20 Compilazione Form*
     
Scrivere in un documento HTML una form contenente i seguenti campi: 
cognome (casella di testo editabile lunga 40 caratteri) 
nome (casella di testo editabile lunga 30 caratteri) 
matricola (casella di testo editabile lunga 12 caratteri) 
regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane) 
email (casella di testo editabile lunga 30 caratteri) 
telefono (casella di testo editabile lunga 15 caratteri) 
richieste particolari (area di testo editabile di 12 righe per 60 colonne) 
bottone di invio 
bottone di reset 

Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli: 
verifica che il cognome non sia vuoto; 
verifica che il nome non sia vuoto; 
verifica che la matricola sia un numero; 
verifica che sia stata selezionata una regione; 
verifica che o l’email o il telefono siano non vuoti.


In prima istanza la condizione anomala va segnalata con una semplice alert; in seguito con una linea rossa sotto il campo
non valido.
COMMENTO: Ho completato la form utilizzando per nome,cognome,matricola, e-mail e telefono la funzione che inserisce la linea 
rossa se il campo è vuoto. Nel caso in cui la matricola e il telefono siano stringhe e non numeri o se il campo della regione è 
vuoto ho utilizzato una alert. I controlli sono eseguiti al click del pulsante INVIA, se i dati sono corretti parte una alert.
E' presente anche un pulsante per Resettare i campi.
