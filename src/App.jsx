import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useState } from "react"
import Laptop from "./modelos/Laptop"
import Mochilla from "./modelos/Mochilla"
import Mesa from "./modelos/Mesa"
import Silla from "./modelos/Silla"
import Cubobas from "./modelos/Cubobas"
import Equipo from "./modelos/Equipo"
import { GridHelper } from "three"
import ControlMovil from "./ControlMovil"
import Meson from "./modelos/Meson"
import Estante1 from "./modelos/Estante1"
import Compu from "./modelos/Compu"
import Monitor from "./modelos/Monitor1"

function App() {
  {/*estado para controlar la luz direccional devemos agregar la constante para poder poner una variable intensidad luz */ }
  const [intensidadLuz, setIntensidadLuz] = useState(1);
  //intercalar entre controles de movimiento
  const [movimientoActivo, setMovimientoActivo] = useState(false);
  const activarMovimiento = () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") setMovimientoActivo(true);
          else alert("permiso de sensor no otorgado");
        })
        .catch(console.error); S
    } else {
      setMovimientoActivo(true);//android escritorio
    }
  };
  return (
    <>
      {/* centor de control de iluminacion */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        background: 'white',
        padding: 10,
        borderRadius: 8
      }}>
        <label style={{ marginTop: 10, display: "block" }}>intensidad de luz {intensidadLuz.toFixed(2)}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={intensidadLuz}
          onChange={(e) => setIntensidadLuz(parseFloat(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
      <button
        onClick={() => (movimientoActivo ? setMovimientoActivo(false) : activarMovimiento())}
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          zIndex: 1,
          padding: "8px 12px",
          background: movimientoActivo ? "red" : "green",
          borderRadius: 6,
          color: "white",
          border: "none"
        }}
      >
        {movimientoActivo ? "desactivar movimiento" : "activar movimiento"}
      </button>

      {/*desde aqui viene la estructura del lienzo de canvas 3D */}
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ width: '100vw', height: '100vh', background: '#222' }}
      >
        {/*sol a las luces*/}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={intensidadLuz}
          color="white"
          castShadow
        />
        <directionalLight position={[-5, 4, -5]} intensity={0.4} color="white" />

        {/*computadora*/}
        <Equipo position={[-1, 1, 8]} scale={[0.2, 0.5, 0.2]} />
        <Equipo position={[5, 1.1,3]} scale={[1, 2, 1]} />
        <Equipo position={[-2,1.1,3]} scale={[1, 2, 1]} />
        <Equipo position={[4,1.1,4]} scale={[1, 2, 1]} />
      

        <Cubobas position={[-8, 1.1, -6]} scale={[3.000, 4.000, 3.000]} />

        <Monitor position={[8, 1.8,  -7.1]} scale={[4, 4, 4]}/>
        <Meson position={[8, 1.5, -7.1]} scale={[0.7, 0.7, 0.7]} />





        <Mesa position={[-5, 0.8, -4]} scale={[1, 1, 1]} />
        <Compu  position={[-5, 1.7, -4]} scale={[1, 1, 1]}/>  
        <Silla position={[-5, 1.1, -1]} scale={[1.5, 2, 1.5]}/>

        <Mesa position={[-5, 0.8, -2]} scale={[1, 1, 1]} />
        <Compu  position={[-5, 1.7, -2]} scale={[1, 1, 1]}/>  
        <Silla position={[-5, 1.1, -3]} scale={[1.5, 2, 1.5]} />


        <Mesa position={[-2, 0.8, -4]} scale={[1, 1, 1]} />
        <Silla position={[-2, 1.1, -3]} scale={[1.5, 2, 1.5]} />

        <Mesa position={[0, 0.8, -4]} scale={[1, 1, 1]} />
        <Silla position={[0, 1.1, -1]} scale={[1.5, 2, 1.5]} />

        <Mesa position={[2, 0.8, -4]} scale={[1, 1, 1]} />
        <Silla position={[2, 1.1, -2]} scale={[1.5, 2, 1.5]} />

        <Mesa position={[-2, 0.8, -2]} scale={[1, 1, 1]} />
        <Silla position={[-2, 1.1, -1]} scale={[1.5, 2, 1.5]} />

        <Mesa position={[5.5, 1.1, -0]} scale={[1, 1, 1]} />
        <Silla position={[5.3, 1.1, 1]} scale={[1.5, 2, 1.5]} />
        {/*tomasas*/}
        < Mesa position={[7, 1.1, -0]} scale={[1, 1, 1]} />
        <  Silla position={[7, 1.1, 1]} scale={[1.5, 2, 1.5]} />
        <Laptop position={[5.5, 1.6, 0.1]} scale={[2, 2, 2]} />
        <  Silla position={[8, 1.1, 1]} scale={[1.5, 2, 1.5]} />
        <Mesa position={[6, 0.8, -7]} scale={[2, 1, 1]} />
        <Laptop position={[7, 1.6, 0.1]} scale={[2, 2, 2]} />
        <Silla position={[6, 1.1, -6]} scale={[1.5, 2, 1.5]}/>

        {/*mochilas*/}
        <Mochilla position={[1.8, 1.3, -4]} scale={[5, 5, 5]} />
        <Mochilla position={[-0.2, 1.3, -4]} scale={[4, 4, 4]} />
        <Mochilla position={[-2.1, 1.3, -4]} scale={[4, 4, 4]} />

        <Estante1 position={[-7, 0, -5]} scale={[1, 1.5, 1]} />




        {/* environment este fondo blanco solo habilitamos para objetos oscuros*/}
        {/*< enviroment preset="estudio" background={false}/> */}
        {/* objeto agregado con primitive para componentes independientes*/}
        <primitive object={new GridHelper(20, 20)} />
        {/*suelo receptor de sombras <OrbitControls />*/}
        <ControlMovil activo={movimientoActivo} />
        {/*CONTROLES DE CAMARA*/}
        {movimientoActivo ? (
          <ControlMovil activo={movimientoActivo} />
        ) : (
          <OrbitControls enableDamping={true} enablePan={true} />
        )}

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >

          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;