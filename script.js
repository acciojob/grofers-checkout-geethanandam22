const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            const prices = document.querySelectorAll(".price");
            let total = 0;

            // sum up prices
            prices.forEach(cell => {
                total += parseInt(cell.textContent);
            });

            // create a new row for total
            const table = document.querySelector("table");
            const newRow = document.createElement("tr");
            const totalCell = document.createElement("td");

            totalCell.setAttribute("colspan", "2"); 
            totalCell.textContent = "Total Price: Rs " + total;

            newRow.appendChild(totalCell);
            table.appendChild(newRow);
        };

        getSumBtn.addEventListener("click", getSum);
