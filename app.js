const body = document.querySelector('body')
const btn = document.getElementById('btn')
const h1 = document.querySelector('h1')


btn.addEventListener('click', (generation) => {
    const colors = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'

    ]
    function colorPicer() {

        let randomColor = '#'
        for (let i = 0; i < 6; i++) {
            const random = Math.floor(Math.random() * colors.length)
            randomColor += colors[random]
        }
        return randomColor
    }

    const randomcolor1 = colorPicer();
    const randomcolor2 = colorPicer();


    body.style.background = `linear-gradient( ${randomcolor1} , ${randomcolor2} `;
    h1.textContent = ` HEX linear-gradient( ${randomcolor1} , ${randomcolor2} )`
})
