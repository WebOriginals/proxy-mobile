export function animationSendBtn() {
    let animationSendBtns = document.querySelectorAll('.btn');
    let notSent = 'отправить';
    let sent = 'отправленно';
    if(animationSendBtns.length > 0 ){
        animationSendBtns.forEach(btn => {
            btn.addEventListener('click', function (){
                btn.classList.toggle('btn-send-animation');

                setTimeout(() => {
                    if(btn.classList.contains('btn-send-animation')){
                        btn.innerHTML = sent
                    } else {
                        btn.innerHTML = notSent
                    }
                }, "2000")

            })
        })
    }
}
animationSendBtn();
