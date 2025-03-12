function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reversed = num.split('').reverse().join('');
    document.getElementById("result").innerText = "Результат: " + reversed;
}