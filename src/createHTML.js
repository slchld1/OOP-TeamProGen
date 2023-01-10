const Engineer = require("../lib/Engineer")

const createHTML = (listOfEmployee) => {
    const htmlFile = `` 
    htmlFile += baseHTML(listOfEmployee)
    htmlFile += managerCard(listOfEmployee)
    htmlFile += engineerCard(listOfEmployee)
    htmlFile += internCard(listOfEmployee)

}

function baseHTML(Employee) {
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/css/uikit.min.css" />
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="uk-navbar-container uk-width-expand" uk-navbar="align: center">
            <div class="uk-navbar-center">
        
                <ul class="uk-navbar-nav uk-text-bold">
                    <li>
                        <a class="uk-text-bold" href="#">Team Profile</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Team Profile</a></li>
                                <li class="uk-nav-header">cards</li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">Manager</a></li>
                                <li><a href="#">Engineer</a></li>
                                <li><a href="#">Intern</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </head>
        <div class="uk-container uk-container-expand uk-padding-large uk-flex uk-flex-around uk-flex-center uk-flex-wrap-reverse" uk-container="align: center">
        <!-- ADD EMPLOYEE CARDS HERE -->
        
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.20/dist/js/uikit-icons.min.js"></script>
    </html>
`
}
function managerCard(newManager) {
    return
`
    <div class="uk-card uk-card-default uk-width-1-5@m uk-height-large uk-margin-small-top">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">${newManager.getName()}</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time> &#9819; ${newManager.getRole()}</time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>ID: ${newManager.getID()}</p>
        <hr class="uk-divider-icon">
        <p>Email: ${newManager.getEmail()}</p>
        <hr class="uk-divider-icon">
        <p>Office Number: ${newManager.getOfficeNum()}</p>
        <hr class="uk-divider-icon">
        </div>
</div>
`
}

module.exports = createHTML;