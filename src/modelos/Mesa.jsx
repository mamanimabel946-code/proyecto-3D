import React from 'react'
import{useGLTF}from '@react-three/drei'
import{clone}from"three/examples/jsm/utils/SkeletonUtils";

function Mesa({
position=[0,0,0],
rotation=[0,0,0],
scale=[1,1,1],
}){


    const{scene}=useGLTF('/modelos/mesaCua.glb');
    const clonedScene=clone(scene);                                                                                                             
    
    return (
    <primitive
     object={clonedScene}
     position={position}
     rotatio={rotation}
     scale={scale}
     />
    );
}
export default Mesa