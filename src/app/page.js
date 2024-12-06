'use client'

import Image from 'next/image'
import { crimson_Pro } from 'next/font/google'
import styles from './page.module.css'
import { Crimson_Pro } from 'next/font/google'
import CheckButton from '@/components/CheckButton'
import SmallButton from '@/components/SmallButton'
import Lever from '@/components/Lever'
import Select from '@/components/Select'
import Accordion from '@/components/Accordion'
import { useEffect, useRef, useState } from 'react'
import Comp from '@/components/Matter'
import chains from '@/components/chain'
import { create } from 'zustand'
import { useTimerStore } from './store/store'
import Button from '@/components/BigButton'
import { Task } from '@/components/molecule/Task'

export default function Home() {
  const conection = useTimerStore((state) => state.connected)
  console.log('Conection', conection)
  const canvasRef = useRef()
  const originRef = useRef()
  const [isConnected, setIsConnected] = useState(false)

  //counter
  const times = [25, 5, 15]
  const [timeSelected, setTimeSelected] = useState(0)
  const [paused, setPaused] = useState(true)

  const [mins, setMins] = useState(22)
  const [seconds, setSeconds] = useState(55)

  const [count, setCount] = useState(0)

  useEffect(() => {
    //Implementing the setInterval method
    if (!paused) {
      const interval = setInterval(() => {
        if (seconds == 0) {
          setMins((prev) => prev - 1)
        }
        setSeconds((prev) => (((prev - 1) % 60) + 60) % 60)
      }, 1000)
      //Clearing the interval
      return () => clearInterval(interval)
    }
  }, [seconds, paused])

  useEffect(() => {
    //Implementing the setInterval method
    setMins(times[timeSelected])
    setSeconds(0)
    setPaused(true)
  }, [timeSelected])
  const handleClickLever = (newV) => {
    setTimeSelected(newV)
  }

  return (
    <main className="w-[100vw] min-h-[100vh]  h-fit bg-[white] relative column">
      <div className="flex flex-col-reverse lg:flex-row w-full h-fit border-[salmon] border-2 justify-between relative z-10 pointer-events-none">
        <div className="text-black h-[50vh] w-[200px] border-2 border-black text-sm lg:text-2xl">
          Paleta
        </div>
        <div className="text-black h-fit w-[100%] lg:h-fit lg:w-[30rem]">
          <Task />
        </div>
        <div className="w-[200px] h-[100px] border-black rounded-lg border-2">
          Discipline
          {}
          <div
            ref={originRef}
            className="h-[10px] w-[10px] bg-white rounded-xl border-[black] border-2 text-black cursor-pointer"
          ></div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full border-[aqua] border-2 justify-between items-center z-10 relative pointer-events-none">
        <div className="text-black h-[100px] w-[200px] border-2 border-black invisible"></div>
        <div className="text-black h-fit w-fit border-2 border-black flex flex-col max-w-[100%] pointer-events-auto">
          <div>
            <div className="flex row justify-between w-[130px]">
              <div className="w-[60px] h-fit justify-center flex-col flex items-center ">
                <h3 className="font-inter font-bold text-sm">
                  {paused ? 'PLAY' : 'PAUSE'}
                </h3>
                <div className="w-[30px] h-[30px] justify-center flex-col">
                  <CheckButton
                    value={paused}
                    handleClick={() => setPaused((prev) => !prev)}
                  />
                </div>
              </div>
              <div className="w-fit h-fit justify-center flex-col flex items-center">
                <h3 className="font-inter font-bold text-sm">NEXT</h3>
                <div className="w-[30px] h-[30px] justify-center flex-col">
                  <Button
                    handleClick={() =>
                      handleClickLever((timeSelected + 1) % times.length)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="min-w-[16rem] lg:min-w-[24rem] border-2 border-black">
                <h2 className=" font-crimson font-bold h-fit text-[5rem] lg:text-[8rem]">
                  {mins == 0 ? '00' : mins}:{seconds == 0 ? '00' : seconds}
                </h2>
              </div>

              <Lever
                hClass="lg:h-[6rem] h-[3rem]"
                wClass="lg:h-[6rem] h-[3rem]"
                value={timeSelected}
                data={times}
                handleClick={(v) => handleClickLever(v)}
              />
            </div>
          </div>
        </div>
        <div className="text-black h-[100px] w-[200px] border-2 border-black">
          Creador de valores
        </div>
      </div>
      <Comp
        pointRef={originRef}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
    </main>
  )
}
