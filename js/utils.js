let getStyle = (element, params) =>  {
    let style = window.getComputedStyle(element)[params]
    let pattern = /\D/g 
    return Number(style.replace(pattern,''))
}