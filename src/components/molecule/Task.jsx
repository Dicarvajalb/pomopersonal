'use client'
import { useState } from 'react'
import { Input } from '../atoms/input'
import { Form } from './Form'
import SmallButton from '../SmallButton'
import { ArrowButton } from '../atoms/arrow-button'
import Select from '../Select'
import { useTaskStore } from '@/app/store/store'

export const Task = () => {
  const text = 'Completar la aplicación de pomopersonal..'
  const time = 2
  const pomoTime = 25
  const CompletedMins = 20
  const color = '#CC7AE6'
  const lighColor = '#F4E4FA'
  const classBorderColor = `bg-[${color}]`
  const classBgColor = `bg-[${color}]`

  const [isEditing, setIsEditing] = useState(false)
  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(!isEditing)
    }
  }

  //form
  const [task, taskTime, setTask, setTaskTime] = useTaskStore((state) => [
    state.task,
    state.taskTime,
    state.setTask,
    state.setTaskTime,
  ])
  const taskTimes = ['25', '50', '75']

  const handleForm = (obj) => {
    setTask(obj.get('in__task'))
    setTaskTime(obj.get('in__task-time'))
    setIsEditing(false)
  }
  return (
    <div
      style={{
        backgroundColor: lighColor,
        border: '1px solid ' + color,
        cursor: isEditing ? '' : 'pointer',
      }}
      className="w-full h-full pointer-events-auto relative mt-[5rem] border-2 p-[0.5rem] lg:p-[1rem] rounded-[0.3rem]"
      onClick={handleClick}
    >
      <div className="flex flex-col w-fit h-[4rem] items-center absolute top-[-4rem] left-[50%] translate-x-[-50%] pointer-events-none">
        <div
          id="final-point__connector"
          className=" border-black border-t-[transparent] border-2 w-[2rem] rounded- h-[2rem]"
        ></div>
        <div className="w-[0.5rem]  flex-1 border-black border-2 bg-black"></div>
      </div>
      {isEditing ? (
        <div>
          <Form onSubmit={(obj) => handleForm(obj)}>
            <Input required id={'in__task'} label="Task" defaultValue={task} />
            <br />
            <Select
              options={taskTimes}
              handleChange={(v) => setTaskTime(v)}
              value={taskTime}
              id={'in__task-time'}
            />
            <div className="h-fit w-full flex flex-col items-center">
              <p className="font-inter text-[0.8rem] font-bold">{'save'}</p>
              <div className="h-[2rem] w-full">
                <SmallButton handleClick={() => undefined} />
              </div>
            </div>
          </Form>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-end">
            <h3
              style={{ hyphens: 'manual' }}
              className="text-[3rem] h-[10rem] w-full break-all line-clamp-2 font-pally font-bold text-ellipsis overflow-hidden"
            >
              {task}
            </h3>
            <h4 className="text-[1rem]  font-inter font-bold">
              {CompletedMins + '/' + taskTime + 'min'}
            </h4>
          </div>
        </div>
      )}
    </div>
  )
}
