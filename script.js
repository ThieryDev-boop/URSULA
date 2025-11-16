// Script prêt pour les futures fonctionnalités
console.log("Page chargée avec succès !");

function addToContact() {

    // Informations du contact — tu peux les rendre dynériques
    const contact = {
        nom: "Ursula YAMDJEU",
        phone: "+237650107777",
        email: "yamsursula@gmail.com",
        address: "Nouvelle route Bastos, Yaoundé, Cameroun"
    };

    // Contenu du fichier VCF
    const vcf = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.nom}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
ADR;TYPE=HOME:;;${contact.address};;;;
END:VCARD
`;

    // Création d'un fichier Blob
    const blob = new Blob([vcf], { type: "text/vcard" });

    // Génération d’un download automatique
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${contact.nom.replace(" ", "_")}.vcf`;
    document.body.appendChild(link);
    link.click();

    // Nettoyage
    document.body.removeChild(link);
}

    function openMap() {
    const latitude = 3.887765;
    const longitude = 11.503441;

    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapUrl, "_blank");
}