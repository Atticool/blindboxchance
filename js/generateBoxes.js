const boxChance = 1000000;
const columns = 7;
const imageHeight = 100;
const imageWidth = 100;
function generateBoxes() {
    let tableIDElement = document.getElementById('tableID')
    let winIDElement = document.getElementById('winID')
    if (winIDElement != null) { winIDElement.remove() }
    if (tableIDElement != null) { tableIDElement.remove() }
    let buttonIDElement = document.getElementById('buttonID')
    buttonIDElement.disabled = true
    


    let textInput = document.getElementById("textInput")
    let numBoxes = parseInt(textInput.value);
    let table = document.createElement('table')
    table.id = "tableID"
    let row;
    let tableHead = table.createTHead()
    let tableHeadRow = tableHead.insertRow(0);
    tableHeadRow.id = 'tableHeadRow';
    let calcDelay = (num) => {
        let delayNum = 2000 / (numBoxes);

        return num * delayNum;
    }
    let winCount = 0;
    for (let i = 0; i < columns; i++) {
        let text = document.createTextNode("")
        let cell = tableHeadRow.insertCell(i)
        cell.appendChild(text)
    }

    for (let i = 0; i < numBoxes; i++) {
        setTimeout(() => {
            if (i % columns == 0) {
                row = table.insertRow(-1)
            }
            const newCell = row.insertCell(i % columns)
            let timeoutDelay;
            let cellContent;
            if (Math.random() < (1.0 / boxChance)) {
                textValue =
                    winCount++;
                timeoutDelay = 500;
                cellContent = document.createElement("img")
                cellContent.src = "images/win.png"
                cellContent.width = imageWidth
                cellContent.height = imageHeight
            } else {
                cellContent = document.createElement("img")
                cellContent.src = "images/loss.png"
                cellContent.width = imageWidth
                cellContent.height = imageHeight
                timeoutDelay = 2;
            }

            let loadingImage = document.createElement("img")
            loadingImage.src = "images/loading.gif"
            loadingImage.width = imageWidth
            loadingImage.height = imageHeight
            newCell.appendChild(loadingImage)

            setTimeout(() => {
                newCell.replaceChild(cellContent, loadingImage);
                newCell.appendChild(cellContent)
            }, timeoutDelay)
        }, calcDelay(i))

    }
    setTimeout(() => {
        let winElement = document.createElement("h1")
        if (winCount == 0) {
            winElement.appendChild(document.createTextNode("You didn't win anything!!! Sad!"))
        } else if (winCount == 1) {
            winElement.appendChild(document.createTextNode("You won!!!"))
        } else {
            winElement.appendChild(document.createTextNode("You're crazy lucky!!! Win Count: " + winCount))
        }
        winElement.id = 'winID'
        document.body.insertBefore(winElement, document.getElementById('bottom'))
        buttonIDElement.disabled = false
        document.body.style.backgroundColor = '#FF5885';
    }, calcDelay(numBoxes))

    document.body.insertBefore(table, document.getElementById('bottom'))

}
