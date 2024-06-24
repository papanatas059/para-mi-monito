let messages = [
    "como que no kaka de mrd, ya no presiones no :c",
    "te kagaste mrd nunca mas, DEJA DE PRESIONAR NO",
    "ok casate con erick pues mrd total y es pirañaza no? xd, ya no presiones no :c",
    "jodete total abierto ya estas",
    "con razon todo chupeteado mrd, ojala te contagien de sida xd",
    "quedate con la alcahueta de tu amiga pues mrd, esa perra, ya no presiones no",
    "ok mrd, igual ni aprietas, mas amplio que mia kalifa",
    "quedate con tu panzon de mrd pues kaka, no presiones no mrd",
    "te kagaste csm, hoy te meto plomo, y pn xd "
];

function showMessage(message) {
    document.getElementById('responseMessage').textContent = message;
}

function moveButton() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const imagenNo = document.getElementById('imagenNo'); // Nueva referencia a la imagen "No"
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (randomX > containerRect.width / 2 - noButton.offsetWidth / 2 &&
             randomX < containerRect.width / 2 + noButton.offsetWidth / 2 &&
             randomY > containerRect.height / 2 - noButton.offsetHeight / 2 &&
             randomY < containerRect.height / 2 + noButton.offsetHeight / 2);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    if (messages.length === 0) {
        messages = [
            "como que no kaka de mrd, ya no presiones no :c",
            "te kagaste mrd nunca mas, DEJA DE PRESIONAR NO",
            "ok casate con erick pues mrd total y es pirañaza no? xd, ya no presiones no :c",
            "jodete total abierto ya estas",
            "con razon todo chupeteado mrd, ojala te contagien de sida xd",
            "quedate con la alcahueta de tu amiga pues mrd, esa perra, ya no presiones no",
            "ok mrd, igual ni aprietas, mas amplio que mia kalifa",
            "quedate con tu panzon de mrd pues kaka, no presiones no mrd",
            "te kagaste csm, hoy te meto plomo y pn xd"
        ];
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    messages.splice(randomIndex, 1); // Remover el mensaje mostrado

    showMessage(randomMessage);

    // Mostrar la imagen "No" y luego ocultarla después de 1 segundo
    imagenNo.classList.remove('hidden');
    setTimeout(() => {
        imagenNo.classList.add('hidden');
    }, 400); // 250 milisegundos (1 segundo)
}
