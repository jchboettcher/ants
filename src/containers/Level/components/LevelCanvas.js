import React, { useEffect } from 'react'
import Sketch from 'react-p5'

const gridStrs = [
  "000000|000000|000(LRLF+)00|00(DRLF+)000|000000|000000",
  "0(DLRF)0000|(RRLF)00000|000000|000000|000000|0000P0",
]

const LevelCanvas = ({ level, winState, setWin,  stepsState, setSteps, crumbsState, setCrumbs }) => {
  
  let w
  let h
  let sqsize
  let offright = 30
  let offleft = 30
  let offtop = 80
  let offbottom = 30
  let bWidth = 50.25
  let bHeight = 21

  const gridStr = gridStrs[level-1]

  const grid = []
  let ants = []

  let started = false
  let killed = false
  let steps = 0
  let painted = 0
  let antCount

  let picnicExists = false
  const picnic = {}

  let currButton = 4
  
  const setup = (p5, canvasParentRef) => {
    reset()
    p5.createCanvas(sqsize*w+offright+offleft, sqsize*h+offtop+offbottom).parent(canvasParentRef);
    const buttonTexts = [
      'Start', 'Reset', '0.25x', '0.5x', '1x', '2x', '4x', '8x',
    ]
    const buttons = []
    const buttonFuncs = [
      start, reset, () => {
        buttons[2].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(1)
        currButton = 2
      }, () => {
        buttons[3].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(2)
        currButton = 3
      }, () => {
        buttons[4].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(4)
        currButton = 4
      }, () => {
        buttons[5].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(8)
        currButton = 5
      }, () => {
        buttons[6].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(16)
        currButton = 6
      }, () => {
        buttons[7].style('background-color',p5.color(190))
        buttons[currButton].style('background-color',p5.color(230))
        p5.frameRate(32)
        currButton = 7
      }
    ]
    // console.log(canvasParentRef)
    // bWidth = (w*sqsize+2)/buttonTexts.length
    for (let i = 0; i < buttonTexts.length; i++) {
      const button = p5.createButton(buttonTexts[i])
      // button.parent("background")
      let buttonWidth = bWidth
      if (i < 2) {
        buttonWidth *= 3
      }
      button.size(buttonWidth)
      bHeight = button.height
      let pos
      if (i < 2) {
        pos = buttonWidth*(i+2/3)-1
      } else {
        pos = buttonWidth*i-1
      }
      button.position(pos+offleft,offtop-bHeight-1-(i<2 && bHeight+4))
      button.mousePressed(buttonFuncs[i])
      if (i === 4) {
        button.style('background-color',p5.color(190))
      } else if (i >= 2) {
        button.style('background-color',p5.color(230))
      }
      if (i >= 2) {
        button.style('border-style','none')
        // buttonFuncs.push(setFr(i))
      }
      buttons.push(button)
    }
    // const startButton = p5.createButton('start');
    // startButton.position(p5.width-startButton.width-10, 10);
    // startButton.mousePressed(start);
    // const resetButton = p5.createButton('reset');
    // resetButton.position(p5.width-resetButton.width-10, 20+startButton.height);
    // resetButton.mousePressed(reset);
    p5.frameRate(4)
  }
  
  // const setFr = (i,p5) => {
  //   () => {
  //     buttons[i].style('background-color',p5.color(190))
  //     buttons[currButton].style('background-color',p5.color(230))
  //     p5.frameRate(2**(i-2))
  //   }
  // }

  const reset = () => {
    killed = false
    started = false
    steps = 0
    painted = 0
    let i = 0
    let j = 0
    let len = gridStr.length
    picnicExists = false
    let dirs = {R: 0, D: 1, L: 2, U:3}
    ants = []
    for (let k = 0; k < len; k++) {
      const c = gridStr[k]
      if (c === "|") {
        j++
        i = -1
      } else if (c === "(") {
        let dir = dirs[gridStr[k+1]]
        console.log(i,j)
        let typ
        if (gridStr[k+5] === "+") {
          typ = gridStr.substring(k+2,k+6)
          k += 6
        } else {
          typ = gridStr.substring(k+2,k+5)
          k += 5
        }
        ants.push(new Ant(i, j, dir, typ))
      } else if (c === "P") {
        picnicExists = true
        picnic.x = i
        picnic.y = j
      }
      i++
    }
    w = i
    h = j + 1
    sqsize = Math.min(400/h, 600/w)
    // offsetx = sqsize
    // offsety = sqsize
    for (let i = 0; i < h; i++) {
      grid[i] = new Array(w);
      grid[i].fill(0)
    }
    antCount = ants.length
  }
  
  const updateAnts = () => {
    ants.forEach(ant => ant.move())
    ants.forEach(ant => ant.rotate())
  }
  
  const step = () => {
    if (!killed) {
      steps++
      updateAnts()
    }
  }
  
  const start = () => {
    started = true
  }
  
  let mouseInX = -1
  let mouseInY = -1
  let mode = 1
  
  const mousePressed = (p5) => {
    if (!started) {
      if (p5.mouseX > offleft && p5.mouseX < p5.width-offright && p5.mouseY > offtop && p5.mouseY < p5.height - offbottom) {
        mouseInX = Math.floor((p5.mouseX - offleft) / sqsize)
        mouseInY = Math.floor((p5.mouseY - offtop) / sqsize)
        grid[mouseInY][mouseInX] = 1 - grid[mouseInY][mouseInX]
        mode = grid[mouseInY][mouseInX]
        painted += grid[mouseInY][mouseInX]*2-1
      }
    }
  }
  
  const mouseDragged = (p5) => {
    if (!started) {
      if (p5.mouseX > offleft && p5.mouseX < p5.width-offright && p5.mouseY > offtop && p5.mouseY < p5.height - offbottom) {
        const x = Math.floor((p5.mouseX - offleft) / sqsize)
        const y = Math.floor((p5.mouseY - offtop) / sqsize)
        if (mouseInX === x && mouseInY === y) {
          return
        }
        const prev = grid[y][x]
        grid[y][x] = mode
        painted += mode - prev
        mouseInX = x
        mouseInY = y
      }
    }
  }
  
  const test = () => {
    for (let i = 0; i < antCount; i++) {
      if (!ants[i].picnicAnt) {
        continue
      }
      for (let j = i + 1; j < antCount; j++) {
        if (!ants[j].picnicAnt) {
          continue
        }
        if (ants[i].x === ants[j].x && ants[i].y === ants[j].y) {
          ants[i].stop()
          ants[j].stop()
          if (!picnicExists) {
            picnic.x = ants[i].x
            picnic.y = ants[i].y
            picnicExists = true
          }
        }
      }
    }
    if (picnicExists) {
      let stopCount = 0
      for (let i = 0; i < antCount; i++) {
        if (ants[i].x === picnic.x && ants[i].y === picnic.y) {
          ants[i].stop()
        }
        if (ants[i].stopped) {
          stopCount++
        }
      }
      if (stopCount === antCount) {
        killed = true
      }
    }
  }
  
  const checkWin = () => {
    let win = true
    for (let i = 0; i < h; i++) {
      win &= grid[i].reduce((acc,el) => (!el) && acc, true)
    }
    ants.forEach(ant => win &= (ant.x === picnic.x && ant.y === picnic.y))
    return win
  }

  const draw = (p5) => {
    p5.background(255)
    p5.push()
    p5.translate(offleft,offtop)
    p5.stroke(0)
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (!!grid[i][j]) {
          p5.fill(181)
        } else {
          p5.noFill()
        }
        p5.rect(sqsize*j,sqsize*i,sqsize,sqsize)
      }
    }
    if (picnicExists) {
      p5.push()
      p5.fill(0,0,255)
      p5.noStroke()
      p5.rect(sqsize*(picnic.x+0.4),sqsize*(picnic.y+0.4),sqsize*0.2,sqsize*0.2)
      p5.pop()
    }
    ants.forEach(ant => ant.show(p5))
    if (started) {
      step()
    }
    test()
    if (killed) {
      console.log(checkWin())
    }
    p5.fill(255)
    p5.noStroke()
    // p5.rect(0,-2*bHeight,2*bWidth-1,bHeight-1)
    // p5.rect(0,-bHeight,2*bWidth-1,bHeight-1)
    p5.fill(0)
    p5.push()
    p5.textSize(16)
    p5.text(`Steps: ${steps}`,0,-bHeight-11)
    p5.text(`Crumbs: ${painted}`,0,-10)
    p5.pop()
    p5.pop()
  }

  class Ant {

    constructor(x, y, dir, type) {
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.type = type;
      this.xmoves = [1,0,-1,0]
      this.ymoves = [0,1,0,-1]
      this.stopped = false
      this.picnicAnt = !!this.type[3]
      // this.colors = [color(0,255,0),color(255,0,0),color(0,0,255)]
    }
  
    stop() {
      this.stopped = true
    }
  
    move() {
      if (this.stopped) {
        return
      }
      const flip = this.type[2]
  
      // flip
      switch (flip) {
        case 'F':
          grid[this.y][this.x] = 1 - grid[this.y][this.x]
          painted += grid[this.y][this.x]*2-1
          // needFlip.push([this.y,this.x])
          // painted -= grid[this.y][this.x]*2-1
          break
        case 'W':
          painted -= grid[this.y][this.x]
          grid[this.y][this.x] = 0
          // if (!!grid[this.y][this.x]) {
          //   needFlip.push([this.y,this.x])
          // }
          break
        case 'B':
          painted += 1 - grid[this.y][this.x]
          grid[this.y][this.x] = 1
          // if (!grid[this.y][this.x]) {
          //   needFlip.push([this.y,this.x])
          // }
          break
      }
  
      this.x += this.xmoves[this.dir]
      this.y += this.ymoves[this.dir]
      if (this.x >= w || this.x < 0 || this.y >= h || this.y < 0) {
        this.stopped = true
        killed = true
      }
    }
  
    rotate() {
      if (this.stopped) {
        return
      }
      const whiteMove = this.type[0]
      const blackMove = this.type[1]
  
      const actualMove = !grid[this.y][this.x] ? whiteMove : blackMove
      const moveIncs = {R: 1, L: 3, S: 0, U: 2}
  
      this.dir = (this.dir + moveIncs[actualMove]) % 4
    }
  
    show(p5) {
      // if (this.x >= w || this.x < 0 || this.y >= h || this.y < 0) {
      //   return
      // }
      p5.push()
      p5.translate((this.x+0.5)*sqsize,(this.y+0.5)*sqsize)
      p5.rotate(this.dir*p5.HALF_PI)
      p5.stroke(0)
      p5.strokeWeight(0.5)
      if (this.type === 'LRF' || this.type === 'LRF+') {
        p5.fill(255,0,0)
      }
      if (this.type === 'RLF' || this.type === 'RLF+') {
        p5.fill(0,255,0)
      }
      p5.scale(sqsize/20)
      // scale(10)
      p5.ellipse(-1,0,3.5)
      p5.ellipse(-4.5,0,3.5)
      p5.ellipse(2.5,0,3.5)
      p5.noFill()
      p5.beginShape();
      p5.vertex(4.2, 0.5);
      p5.vertex(4.2, 0.5);
      p5.curveVertex(5,0.8);
      p5.vertex(6,2)
      p5.vertex(6,2)
      p5.endShape();
      p5.beginShape();
      p5.vertex(4.2, -0.5);
      p5.vertex(4.2, -0.5);
      p5.curveVertex(5,-0.8);
      p5.vertex(6,-2)
      p5.vertex(6,-2)
      p5.endShape();
      p5.fill(0)
      if (this.picnicAnt) {
        p5.ellipse(-1,0,1)
      }
      p5.pop()
    }
  }

  return (
    <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} />
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}

export default LevelCanvas
