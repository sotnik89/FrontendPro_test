// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
function generateTable(size) {
    const container = document.querySelector('#table-box');
    const table = document.createElement('table');

    for (let i = 1; i <= size; i++) {
        const rowTr = document.createElement('tr');

        for (let j = 1; j <= size; j++) {
            const cellTd = document.createElement('td');
            cellTd.textContent = i * j;
            if (i === j && i > 1) {
                cellTd.classList.add('diagonal');
            }
            rowTr.appendChild(cellTd);
        }
        table.appendChild(rowTr);
    }
    container.appendChild(table);
}
generateTable(10);