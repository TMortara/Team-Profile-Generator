function createEngineerCard(engineer) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3><i class="bi bi-github"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="list-container">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub Username: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
        </div>`
}

module.exports = createEngineerCard;