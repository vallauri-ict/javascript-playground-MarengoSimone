5. > **LEZIONE 8**
     1. > *Consegna JS - Ese 25 Captcha*
     
All'avvio il programma genera 5 caratteri (lettere o numeri) casuali presi dall'img captcha. Sull'onChange del campo user si deve
controllare che esso abbia almeno 8 caratteri. Nel campo della password controllare anche che siano presenti almeno una lettera 
maiuscola, una lettera minuscola e un numero. In entrambi i casi se presente un errore colorare di rosso il bordo dei campi. 
Nel caso del pulsante genera Captcha si richiama la stessa procedura dell'onload, il pulsante non sono un robot controlla se il
captcha da noi inserito sia uguale ai caratteri generati nei riquadri (utilizziamo una matrice d'appoggio). In corrispondenza del
pulsante Invia visualizzare un messaggio di ok se username, password e captcha sono validi, nok in caso contrario.
