function showMessage(message, event) {
    const messageDiv = document.getElementById('operation-message');
    messageDiv.textContent = message;
    messageDiv.style.left = event.pageX + 'px';
    messageDiv.style.top = event.pageY + 20 + 'px'; // 20px abaixo do ponteiro do mouse
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000); // Mostrar a mensagem por 3 segundos
}

    


document.addEventListener("DOMContentLoaded", function() {
    const copyEmailBtn = document.querySelector('.contato:nth-child(2) button');
    const copyPhoneBtn = document.querySelector('.contato:nth-child(3) button');

    const instagramBtn = document.querySelector('.contato:nth-child(1) button');
    const mapsBtn = document.querySelector('.contato:nth-child(4) button');

    instagramBtn.addEventListener('click', () => {
        window.open('https://www.instagram.com/depilacao_brasilia/', '_blank');
    });

    mapsBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps/place/Asa+Sul+Com%C3%A9rcio+Local+Sul+205+-+Asa+Sul,+Bras%C3%ADlia+-+DF,+70235-500/@-15.8145381,-47.8944475,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3ace61d3d1b3:0xc93c05ba5096fb6d!8m2!3d-15.8144367!4d-47.8945425!16s%2Fg%2F1ymws_mz4?entry=ttu', '_blank');
    });

    copyEmailBtn.addEventListener('click', (event) => {
        const email = document.querySelector('.contato:nth-child(2) p').textContent;
        navigator.clipboard.writeText(email).then(() => {
            showMessage('Email copiado', event);
        }).catch(() => {
            showMessage('Erro ao copiar o email', event);
        });
    });

    copyPhoneBtn.addEventListener('click', (event) => {
        const phone = document.querySelector('.contato:nth-child(3) p').textContent;
        navigator.clipboard.writeText(phone).then(() => {
            showMessage('Número copiado', event);
        }).catch(() => {
            showMessage('Erro ao copiar o número', event);
        });
    });

    document.getElementById('whatsapp-button').addEventListener('click', function(){
        window.open('https://wa.me/5561985681951', '_blank');
    });
    
    document.getElementById('whatsapp-button1').addEventListener('click', function(){
        window.open('https://wa.me/5561985681951', '_blank');
    });
});


