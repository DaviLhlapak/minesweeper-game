import { BOMB } from 'src/constants/config'
import { GameImages } from 'src/images/game'

interface IGame {
    startGame: () => void
}

interface IState {
    bombs: number
    field: Array<Array<number>>
}

const createGame = (
    screen: HTMLCanvasElement,
    drawer: CanvasRenderingContext2D,
): IGame => {
    const state: IState = {
        bombs: 50,
        field: [],
    }

    const renderObjects = () => {
        state.field.forEach((line, lineIndex) => {
            line.forEach((column, columnIndex) => {
                if (column === BOMB) {
                    const image = new Image()
                    image.src = 'assets/bomb.png'

                    drawer.drawImage(image, columnIndex * 10, lineIndex * 10)
                } else {
                    const image = new Image()
                    image.src = GameImages[column]

                    drawer.drawImage(image, columnIndex * 10, lineIndex * 10)
                }
            })
        })
    }

    const renderScreen = () => {
        if (screen && drawer) {
            drawer.clearRect(0, 0, screen.width, screen.height)

            renderObjects()

            requestAnimationFrame(renderScreen)
        }
    }

    const fillWithBombs = () => {
        const field: Array<Array<number>> = []

        for (let line = 0; line < 10; line++) {
            field[line] = []

            for (let column = 0; column < 10; column++) {
                const bomb = Math.floor(Math.random() * (4 - 0)) + 0

                if (bomb === 2 && state.bombs > 0) {
                    field[line][column] = BOMB

                    state.bombs = state.bombs - 1
                } else {
                    field[line][column] = 0
                }
            }
        }

        state.field = field
    }

    const fillWithNumber = () => {
        state.field.forEach((line, lineIndex) => {
            line.forEach((column, columnIndex) => {
                let bombCount = 0

                if (lineIndex - 1 > -1) {
                    if (state.field[lineIndex - 1][columnIndex - 1] === BOMB) {
                        bombCount++
                    }

                    if (state.field[lineIndex - 1][columnIndex] === BOMB) {
                        bombCount++
                    }

                    if (state.field[lineIndex - 1][columnIndex + 1] === BOMB) {
                        bombCount++
                    }
                }

                if (state.field[lineIndex][columnIndex - 1] === BOMB) {
                    bombCount++
                }

                if (state.field[lineIndex][columnIndex] === BOMB) {
                    bombCount++
                }

                if (state.field[lineIndex][columnIndex + 1] === BOMB) {
                    bombCount++
                }

                if (lineIndex + 1 < state.field.length - 1) {
                    if (state.field[lineIndex + 1][columnIndex - 1] === BOMB) {
                        bombCount++
                    }

                    if (state.field[lineIndex + 1][columnIndex] === BOMB) {
                        bombCount++
                    }

                    if (state.field[lineIndex + 1][columnIndex + 1] === BOMB) {
                        bombCount++
                    }
                }

                if (column !== BOMB) {
                    state.field[lineIndex][columnIndex] = bombCount
                }
            })
        })
    }

    const startGame = () => {
        fillWithBombs()

        fillWithNumber()

        renderScreen()
    }

    return {
        startGame,
    }
}

export { createGame }
