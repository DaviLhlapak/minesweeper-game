import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { createGame } from 'src/factories/game'

const Home: NextPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (canvasRef !== null && canvasRef.current) {
            const context2D = canvasRef.current.getContext('2d')

            if (context2D) {
                const game = createGame(canvasRef.current, context2D)

                game.startGame()
            }
        }
    }, [])

    return (
        <article className="w-screen h-screen flex flex-col items-center justify-center">
            <Head>
                <title>Minesweeper</title>
            </Head>

            <header className="mb-32">
                <h1 className="font-bold text-4xl">Minesweeper</h1>
            </header>

            <canvas
                width={100}
                height={100}
                className="w-96 h-96 screen"
                ref={canvasRef}
            />

            <footer className="mt-40">
                <h1 className="text-sm ">Davi Lhlapak @ 2022</h1>
            </footer>
        </article>
    )
}

export default Home
