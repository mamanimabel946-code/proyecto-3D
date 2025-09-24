import React from 'react'
import{useGLTF}from '@react-three/drei'
import{clone}from"three/examples/jsm/utils/SkeletonUtils";

function Cubobas({
position=[0,0,0],
rotation=[0,0,0],
scale=[1,1,1],
}){


    const{scene}=useGLTF('/modelos/Cubo de basura.glb');
    const clonedScene=clone(scene);
    clonedScene.traverse((obj)=>{
        if(obj.isMesh){
            
            obj.castShadow=true;
            obj.receiveShadow=true;
        }
        });                                                                                                             
    
    return (
    <primitive
     object={scene}
     position={position}
     rotatio={rotation}
     scale={scale}
     />
    );
}
export default Cubobas                                  