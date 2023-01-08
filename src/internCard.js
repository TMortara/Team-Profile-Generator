function createInternCard(intern) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h3>
        </div>
        <div class="list-container">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        </div>`
}

module.exports = createInternCard;