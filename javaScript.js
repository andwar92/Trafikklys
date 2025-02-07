showRed();

function showRed() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div id="app" onclick="showRedOrange()">
            <div class="color" style="background-color: red;"></div>
            <div class="color" style="background-color: gray;"></div>
            <div class="color" style="background-color: gray;"></div>
        </div>

    `;
}

function showRedOrange() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="app" onclick="showGreen()">
        <div class="color" style="background-color: red;"></div>
        <div class="color" style="background-color: orange;"></div>
        <div class="color" style="background-color: gray;"></div>
    </div>
    `;
}

function showGreen() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="app" onclick="showOrange()">
        <div class="color" style="background-color: gray;"></div>
        <div class="color" style="background-color: gray;"></div>
        <div class="color" style="background-color: green;"></div>
    </div>
    `;
}
function showOrange() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="app" onclick="showRed()">
    <div class="color" style="background-color: gray;"></div>
    <div class="color" style="background-color: orange;"></div>
    <div class="color" style="background-color: gray;"></div>
</div>
    `;
}


