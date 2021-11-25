const progressContainer = document.querySelector('.progress-container');

window.onload = () => {
    const programmingLanguages = [['html', 50, 'red'], ['css', 40, 'blue'], ['javascript', 20, 'green'], ['python', 4, 'yellow']];
    // keys
    const programmingName = 0;
    const programmingPercentage = 1;
    const programmingColors = 2;
    // clear HTML first
    progressContainer.innerHTML = '';

    for (let i of programmingLanguages) {
        progressContainer.innerHTML += `
            <div class="${i[programmingName]}-progress">
                <span class="d-block fw-bold mb-2" style="text-transform: uppercase;font-size: 1.3em;">${i[programmingName]}</span>
                <div style="width: 100%;height: 40px;" class="mb-5">
                    <div style="width: ${i[programmingPercentage]}%;height: 100%;background-color: ${i[programmingColors]};"></div>
                <div>
            </div>
        `;
    }
}