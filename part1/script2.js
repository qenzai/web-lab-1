let numbers = new Set();

        function addNumber() {
            let input = document.getElementById("numInput").value;
            if (numbers.has(input)) {
                document.getElementById("message").innerText = "Число вже введене!";
            } else {
                numbers.add(input);
                document.getElementById("message").innerText = "Число додано!";
            }
        }