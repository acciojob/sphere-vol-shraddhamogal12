
function volume_sphere() {

    // Step 1: Get the radius value
    let radius = document.getElementById("radius").value;

    // Step 2: Convert input into a number
    radius = Number(radius);

    // Step 3: Get the output field
    let volume = document.getElementById("volume");

    // Step 4: Validate radius
    if (isNaN(radius) || radius < 0) {
        volume.value = "NaN";
        return;
    }

    // Step 5: Calculate volume
    let result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Step 6: Round to 4 decimal places
    volume.value = result.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
