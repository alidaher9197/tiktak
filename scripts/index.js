let turn = "X";
const player = document.querySelector('#player')
const intial_main = document.querySelector('main').innerHTML;
const show_alert = (message) => {
    document.querySelector('#alert').style.display = 'flex';
    document.querySelector('.body-alert').innerText = message;
}
const win_boxes = (index1, index2, index3) => {
    const main = document.querySelector('main');
    main.children[index1].classList.add('win-box');
    main.children[index2].classList.add('win-box');
    main.children[index3].classList.add('win-box');
}

const win_values = (index1, index2, index3) => {
    const main = document.querySelector('main');
    const c1 = main.children[index1].innerText;
    const c2 = main.children[index2].innerText;
    const c3 = main.children[index3].innerText;
    c1 == "X" && c2 == "X" && c3 == "X" ?
        (win_boxes(index1, index2, index3), show_alert('Player 1 Wins')) :
        c1 == "O" && c2 == "O" && c3 == "O" ? (win_boxes(index1, index2, index3), show_alert('Player 2 Wins')) : null;
}
const win = () => {
    win_values(0, 1, 2) || win_values(3, 4, 5) || win_values(6, 7, 8) ||
        win_values(0, 3, 6) || win_values(1, 4, 7) || win_values(2, 5, 8) ||
        win_values(0, 4, 8) || win_values(2, 4, 6)
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
        document.querySelector('main').querySelector('button') ? null : (show_alert('Game Ended'), reset_values());

    }, 0)
    win();

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
const chech_button = (event) => {
    let value = event.target.className;

    value === 'btn_game' ? replaceWithDiv(event) : event.target.innerText == "Reset" ? reset_values() : show_alert('');
}

document.querySelectorAll('button').forEach(btn => {

    btn.addEventListener('click', chech_button);
})


const closeAlert = () => {
    document.querySelector('#alert').style.display = 'none'
    reset_values();
}
document.querySelector('#close-alert').addEventListener('click', closeAlert)