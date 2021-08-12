let startPoint;
let hitPoint;
let centerPoint;
let radius = 300
let angle;
let lineWidth = 3

function setup() {
    createCanvas(800, 800)
    centerPoint = createVector(500, 400)
    // angleMode(DEGREES)
    angle = radians(90)

}

function draw() {
    background(50)
    noFill()
    stroke('black')
    strokeWeight(lineWidth)
    arc(centerPoint.x, centerPoint.y, radius * 2, radius * 2, PI - angle / 2, PI + angle / 2);
    stroke('red')
    ellipse(centerPoint.x, centerPoint.y, 3, 3)
    stroke('lime')
    ellipse(centerPoint.x - radius / 2, centerPoint.y, 3, 3)
    if (hitPoint) {
        stroke('yellow')
        line(startPoint.x, startPoint.y, hitPoint.x, hitPoint.y)
        let a = dist(centerPoint.x, centerPoint.y, hitPoint.x, hitPoint.y)
        let b = dist(hitPoint.x, hitPoint.y, startPoint.x, startPoint.y)
        let c = dist(centerPoint.x, centerPoint.y, startPoint.x, startPoint.y)

        let angle = (acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)))
        let offsetAngle = atan((startPoint.y - hitPoint.y) / (startPoint.x - hitPoint.x))
        line(hitPoint.x, hitPoint.y, hitPoint.x + cos(offsetAngle - 2 * Math.sign(startPoint.y - hitPoint.y) * angle) * 1000, hitPoint.y + sin(offsetAngle - 2 * Math.sign(startPoint.y - hitPoint.y) * angle) * 1000)
    }

}


function mouseDragged() {

    if (!startPoint) {
        startPoint = createVector(mouseX, mouseY)
    } else {
        // let mousePos = createVector(mouseX, mouseY)
        if (dist(mouseX, mouseY, startPoint.x, startPoint.y) < 20) {
            startPoint = createVector(mouseX,mouseY)
        }
        else if(dist(mouseX, mouseY, centerPoint.x, centerPoint.y) < 20)
        {
            centerPoint = createVector(mouseX,mouseY)
        }
        let offsetAngle = atan((startPoint.y - mouseY) / (startPoint.x - mouseX))
        console.log(degrees(offsetAngle))
        if (Math.round(sqrt((mouseX - centerPoint.x) ** 2 + (mouseY - centerPoint.y) ** 2) / lineWidth / 2) == Math.round(radius / lineWidth / 2) && offsetAngle < angle) {

            if (mouseY == centerPoint.y) {
                hitPoint = createVector(centerPoint.x - radius, mouseY)
            } else if (mouseY < centerPoint.y) {
                hitPoint = createVector(mouseX, centerPoint.y - sqrt(abs(radius ** 2 - (centerPoint.x - mouseX) ** 2)));

            } else {
                hitPoint = createVector(mouseX, centerPoint.y + sqrt(abs(radius ** 2 - (centerPoint.x - mouseX) ** 2)));
            }
            // console.log(mouseX)
            ellipse(hitPoint.x, hitPoint.y, 2, 2)
        } else {
            // console.log(Math.round(sqrt((mouseX - centerPoint.x) ** 2 + (mouseY - centerPoint.y) ** 2) / 8) * 8)
        }
    }

}

function mousePressed() {

    if (!startPoint) {
        startPoint = createVector(mouseX, mouseY)
    } else {
        // let mousePos = createVector(mouseX, mouseY)
        if (dist(mouseX, mouseY, startPoint.x, startPoint.y) < 20) {
            startPoint = createVector(mouseX,mouseY)
        }
        else if(dist(mouseX, mouseY, centerPoint.x, centerPoint.y) < 20)
        {
            centerPoint = createVector(mouseX,mouseY)
        }
        let offsetAngle = atan((startPoint.y - mouseY) / (startPoint.x - mouseX))
        console.log(degrees(offsetAngle))
        if (Math.round(sqrt((mouseX - centerPoint.x) ** 2 + (mouseY - centerPoint.y) ** 2) / lineWidth / 2) == Math.round(radius / lineWidth / 2) && offsetAngle < angle) {

            if (mouseY == centerPoint.y) {
                hitPoint = createVector(centerPoint.x - radius, mouseY)
            } else if (mouseY < centerPoint.y) {
                hitPoint = createVector(mouseX, centerPoint.y - sqrt(abs(radius ** 2 - (centerPoint.x - mouseX) ** 2)));

            } else {
                hitPoint = createVector(mouseX, centerPoint.y + sqrt(abs(radius ** 2 - (centerPoint.x - mouseX) ** 2)));
            }
            // console.log(mouseX)
            ellipse(hitPoint.x, hitPoint.y, 2, 2)
        } else {
            // console.log(Math.round(sqrt((mouseX - centerPoint.x) ** 2 + (mouseY - centerPoint.y) ** 2) / 8) * 8)
        }
    }

}