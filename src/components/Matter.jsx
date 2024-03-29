import { useEffect, useRef, useState } from 'react'
import {
  Runner,
  Engine,
  Render,
  Bodies,
  World,
  Matter,
  Composites,
  Composite,
  Body,
  Constraint,
  Mouse,
  MouseConstraint,
  Events,
} from 'matter-js'
import { useTimerStore } from '@/app/store/store'

function Comp({ pointRef, isConnected, setIsConnected }) {
  const [connected, switchConection] = useTimerStore((state) => [
    state.connected,
    state.switchConection,
  ])
  const [connectedClone, setConnectedClone] = useState(connected)
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())
  const [position, setPosition] = useState(200)
  const [isOnDrag, setIsOnDrag] = useState(false)
  const [ropeC, setRopeC] = useState()
  const [gravityContraint, setGravityC] = useState()
  const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
  }
  useEffect(() => {
    switchConection(connectedClone)
  }, [connectedClone])
  useEffect(() => {
    if (pointRef.current) {
      let point = pointRef.current.getBoundingClientRect()
      var group = Body.nextGroup(true)

      setRopeC(
        Composites.stack(0, 0, 99, 1, 1, 1, function (x, y, index) {
          console.log('[composite rope]: ', index)
          return Bodies.rectangle(
            point.left,
            point.top,
            index === 98 ? 20 : 15,
            index === 98 ? 20 : 10,
            {
              collisionFilter: { group: group },
              chamfer: { radius: 5 },
              isStatic: index === 0,
              render: {
                fillStyle: 'black',
                strokeStyle: 'black',
                lineWidth: 1,
              },
            },
          )
        }),
      )
    }
  }, [pointRef])

  const handleMouseMove = (e) => {
    if (connectedClone) {
      if (isOnDrag) {
        const target = document
          .getElementById('final-point__connector')
          .getBoundingClientRect()
        const arrow = { x: e.clientX, y: e.clientY }
        const distance = getDistance({ x: target.x, y: target.y }, arrow)

        if (distance >= 50) {
          console.log('Removing connection: ', connected)
          World.remove(engine.current.world, gravityContraint)
          setConnectedClone(false)
        }
      }
    } else {
      if (isOnDrag) {
        const arrow = ropeC.bodies[ropeC.bodies.length - 1].position
        const target = document
          .getElementById('final-point__connector')
          .getBoundingClientRect()

        const distance = getDistance(
          { x: target.x, y: target.y },
          { x: arrow.x, y: arrow.y },
        )
        console.log('Target', target)
        let grav = Constraint.create({
          pointA: {
            x: target.x + target.width / 2,
            y: target.y + target.height / 2,
          }, // Center of the canvas
          bodyB: ropeC.bodies[ropeC.bodies.length - 1],
          stiffness: 2,
          render: {
            visible: false,
          },
        })
        setGravityC(grav)

        if (distance <= 30) {
          console.log('Generating connection ', distance)
          World.add(engine.current.world, grav)
          setConnectedClone(true)
        }
      }
    }
  }
  useEffect(() => {
    //console.log('[connected changed]', connected)
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [connected, isOnDrag])
  useEffect(() => {
    if (ropeC) {
      const cw = document.body.clientWidth
      const ch = document.body.clientHeight
      const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          background: 'transparent',
          wireframes: false,
        },
      })

      console.log('[client w and h]', cw, ch)

      Render.run(render)
      render.canvas.style = ' position:absolute; z-index: 1'
      // create runner
      var runner = Runner.create()
      Runner.run(runner, engine.current)

      Composites.chain(ropeC, 0, 0, -0.3, 0, {
        stiffness: 1,
        length: 0,
        render: {
          visible: false,
        },
      })
      Composites.chain(ropeC, 0, 0, -0.3, 0, {
        stiffness: 1,
        length: 0,
        render: {
          visible: false,
        },
      })

      console.log('[pointRef]', pointRef.current.getBoundingClientRect())

      Composite.add(engine.current.world, [ropeC])
      Composite.add(
        engine.current.world,
        Bodies.rectangle(700, 0, 500, 50.5, { isStatic: true }),
      )
      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine.current, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        })

      Events.on(mouseConstraint, 'startdrag', (e) => {
        setIsOnDrag(true)
      })
      Events.on(mouseConstraint, 'enddrag', (e) => {
        setIsOnDrag(false)
      })
      Events.on(mouseConstraint, 'dragover', (e) => {
        console.log('Event', e)
      })

      Composite.add(engine.current.world, mouseConstraint)

      // keep the mouse in sync with rendering
      render.mouse = mouse
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: cw, y: ch },
      })
      return () => {
        Render.stop(render)
        World.clear(engine.current.world)
        Engine.clear(engine.current)
        render.canvas.remove()
        render.canvas = null
        render.context = null
        render.textures = {}
      }
    }
  }, [ropeC])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#0000ff',
          },
        },
      )
      World.add(engine.current.world, [ball])
    }
  }
  return (
    <>
      <div
        onClick={handleAddCircle}
        ref={scene}
        className="absolute z-0 top-0"
        style={{ width: '100%', height: '100%' }}
      />
    </>
  )
}

export default Comp
