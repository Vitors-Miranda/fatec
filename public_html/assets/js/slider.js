

function slider(element, value){
    mleft = getComputedStyle(element).getPropertyValue("margin-left")
    mleft = Number(mleft.replace("px", ""))
    mleft = mleft + value;
    if (mleft > 0) mleft = 0;
    if (mleft < -300) mleft = -300;
    element.style = `margin-left: ${mleft}px;`
}
