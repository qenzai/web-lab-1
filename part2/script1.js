function findMostFrequent() {
    let input = document.getElementById("arrayInput").value;
    let array = input.split(",").map(Number);
    let frequency = {};
    let maxFreq = 0;
    let mostFrequent;

    array.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mostFrequent = num;
        }
    });

    document.getElementById("result").innerText = `Найчастіший елемент: ${mostFrequent} (зустрічається ${maxFreq} разів)`;
}