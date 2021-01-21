const canvas = document.querySelector('.canvas')
const windowCurrentColor = document.querySelector('.window-current-color')

const eraser = document.querySelector('.eraser')
const pallete = document.querySelector('.pallete')
const pencil = document.querySelector('.pencil')

const panelOfControls = document.querySelector('.panel-of-controls')
const closePallete = document.querySelector('.close-pallete')
const colors = document.querySelector('.colors-wrapper')
const colorLabels = document.querySelectorAll('.color')

// рисует холст
function drawCanvas() {
  const canvasWidth = window.innerWidth - 16
  const pixelsPerRow = Math.floor(canvasWidth / 20)
  const pixelsPerCol = 25

  for (let i = 0; i < pixelsPerRow * pixelsPerCol; i++) {
    let pixelElement = document.createElement('div')
    pixelElement.classList.add('pixel')

    canvas.append(pixelElement)
  }
}

// открывает панель управления 
function initControlPanelToggling() {
  pallete.onclick = function () {
    panelOfControls.classList.add('toLeft')
    colors.classList.add('toBottom')
  }

  closePallete.onclick = function () {
    colors.classList.remove('toBottom')
    panelOfControls.classList.remove('toLeft')
  }
}

function startApplication() {
  drawCanvas()
  initControlPanelToggling()
  showCurrentColor()
  activatePixels()
}

// state
let mode = 'pencil'

let currentColor = 'black'

pencil.classList.add('_active')

eraser.onclick = function () {
  mode = 'eraser'
  pencil.classList.remove('_active')
  eraser.classList.add('_active')
}

pencil.onclick = function () {
  mode = 'pencil'
  pencil.classList.add('_active')
  eraser.classList.remove('_active')
}

function showCurrentColor () {
  windowCurrentColor.style.backgroundColor = currentColor
}


for (let i = 0; i < colorLabels.length; i++) {
  colorLabels[i].onclick = function () {
    currentColor = colorLabels[i].getAttribute('for')
    showCurrentColor()
  }
}

function activatePixels() {
  const pixels = document.querySelectorAll('.pixel')

  for (let i = 0; i < pixels.length; i++) {
    pixels[i].onclick = function () {

      if (mode === 'eraser') {
        pixels[i].style.backgroundColor = 'white'
      } else {
        pixels[i].style.backgroundColor = currentColor
      }
    }
  }
}

startApplication()