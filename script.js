
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Thay đổi nội dung nút "No"
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Tăng kích thước nút "Yes" nhưng giới hạn tối đa
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    if (currentSize < 50) {  
        yesButton.style.fontSize = `${currentSize * 1.2}px`;
    }
}

function handleYesClick() {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="header_text">Knew you would say yes!</h1>
            <div class="gif_container">
                <img src="https://media4.giphy.com/media/9XY4f3FgFTT4QlaYqa/giphy.gif" alt="Happy GIF">
            </div>
        </div>
    `;
}
