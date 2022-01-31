function encodeAndDecodeMessages() {
    let btn1 = document.querySelectorAll('button')[0];
    let btn2 = document.querySelectorAll('button')[1];

    btn1.addEventListener('click', encodeAndSend);
    btn2.addEventListener('click', decodeAndRead);

    function encodeAndSend() {
        let incomingMessage = document.getElementsByTagName('textarea')[0].value;
        let result = '';
        for (let i = 0; i < incomingMessage.length; i++) {
            let char = incomingMessage[i].charCodeAt();
            char++;
            char = String.fromCharCode(char);
            result += char;
        }

        document.getElementsByTagName('textarea')[1].value = result;
        document.getElementsByTagName('textarea')[0].value = '';

    }

    function decodeAndRead() {
        let recivedMessage = document.getElementsByTagName('textarea')[1].value;
        let result = '';
        for (let i = 0; i < recivedMessage.length; i++) {
            let char = recivedMessage[i].charCodeAt();
            char--;
            char = String.fromCharCode(char);
            result += char;
        }

        document.getElementsByTagName('textarea')[1].value = result;
    }
    
}