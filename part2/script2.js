function findSecondSmallest() {
    let input = document.getElementById("arrayInput").value;
    let array = input.split(",").map(Number).filter(n => !isNaN(n));
    let uniqueSorted = [...new Set(array)].sort((a, b) => a - b);

    if (uniqueSorted.length < 2) {
        document.getElementById("result").innerText = "Недостатньо унікальних чисел!";
    } else {
        document.getElementById("result").innerText = `Друге найменше число: ${uniqueSorted[1]}`;
    }
}