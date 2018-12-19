var letter= prompt("Enter a letter:");

var letterArray = [];

for (i = 0; i < 10; i++) {
    letterArray.push(letter);
    document.write(letterArray.join('') + '<br>');
    
}