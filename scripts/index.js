let turn = "X";
const player = document.querySelector('#player')
const intial_main = document.querySelector('main').innerHTML;
const win = () => {
    const main = document.querySelector('main');
    console.log(main.children[1].innerText)
    main.children[0].innerText == 'X' && main.children[1].innerText == 'X' && main.children[2].innerText == 'X' ? document.querySelector('.line').style.visibility = 'visible' : null;
}
const replaceWithDiv = (event) => {

    const button = event.target; // Get the clicked button
    const div = document.createElement('div'); // Create a new div

    div.textContent = turn; // Add some content (customize as needed)
    div.classList.add('replacement-div'); // Optional: Add a class for styling
    // Replace the button with the div
    button.parentNode.replaceChild(div, button);
    turn == "X" ? (turn = 'O', player.innerText = "player2", player.classList.add('player2')) : (turn = 'X', player.innerText = "player1", player.classList.remove('player2'));
    setTimeout(() => {
        document.querySelector('main').querySelector('button') ? null : (window.alert('game end'), reset_values());

    }, 0)
    win()

}
const reset_values = () => {
    document.querySelector('main').innerHTML = '';
    const main = document.querySelector('main');

    for (let i = 0; i < 9; i++) {

        const element = document.createElement("button");
        element.classList.add('btn_game')
        element.addEventListener('click', chech_button)
        main.appendChild(element);
    }
    const element = document.createElement("div");
    element.classList.add('line');
    main.appendChild(element);
    turn = "X";
    player.classList.remove('player2')
    player.innerText = "Player1";
}
const chech_button = () => {
    let value = event.target.className

    value === 'btn_game' ? replaceWithDiv(event) : event.target.innerText == "Reset" ? reset_values() : show_alert('');
}

document.querySelectorAll('button').forEach(btn => {

    btn.addEventListener('click', chech_button);
})

const show_alert = (win) => {
    document.querySelector('#alert').style.display = 'flex'
    document.querySelector('#alertcontent').innerText = "player1 wins"
}