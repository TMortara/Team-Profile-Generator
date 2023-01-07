function createManagerCard(manager) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>`
}