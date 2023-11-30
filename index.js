let quoteEl = document.getElementById("quote-el")
let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Dream big and dare to fail. - Norman Vaughan",
    "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
    "Whatever you do, do it well. - Walt Disney",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Dream big and dare to fail. - Norman Vaughan",
    "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
    "Whatever you do, do it well. - Walt Disney",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. - Rocky Balboa",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Dream big and dare to fail. - Norman Vaughan",
    "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
    "Whatever you do, do it well. - Walt Disney",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. - Rocky Balboa",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"
];

function getQuote(){
    let randomQuote = Math.floor(Math.random() * quotes.length)
    let [quote, author] = quotes[randomQuote].split(" - ");
    return `"${quote}" - ${author}`;
}

function generateQuote(){
    quoteEl.innerHTML = getQuote()

}