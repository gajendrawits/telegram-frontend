// document.querySelector('#locationData').innerHTML = initDataUnsafe.user.username;
const frontEndUrl = "https://gajendrawits.github.io/telegram-frontend"
const baseUrl = "https://staging.chapterx.network"
const checkUser = baseUrl + "/api/bot/isNewUser"
function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
}
Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();

function webviewClose() {
    Telegram.WebApp.close();
}
function copyText() {
    let text = document.getElementById("displayMeetingText").value;
    // alert(text)
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            // alert('Error in copying text: ', err);
        });
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    alert('Query Variable ' + variable + ' not found');
}