
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { DeviceOrientationControls } from "./controles/DeviceOrientationControls";

export default function ControlMovil({ activo }) {
    const { camera } = useThree();
    useEffect(() => {
        if (!activo) return;
        //crear los controles
        const controls = new DeviceOrientationControls(camera);
        controls.connect();
        //animacion
        function animate() {
            controls.update();
            requestAnimationFrame(animate);
        }
        animate();
        //log de orientacion para depurar
        const logOrientation = (event) => {
            if (event.alpha !== null) {
                console.log(
                    ` Alpha: ${event.alpha.toFixed(2)}, Beta: ${event.beta.toFixed(2
                    )}, Gamma: ${event.gamma.toFixed(2)}`
                );
            }
        };
        window.addEventListener("deviceorientation", logOrientation);
        //limpieza al desactivar 
        return () => {
            controls.dispose();
            window.removeEventListener   
            ("deviceorientation", logOrientation);
        };
    }, [activo, camera]);
    return null;//no renderiza nada en el canvas
}

