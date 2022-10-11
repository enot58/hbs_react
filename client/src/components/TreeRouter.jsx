import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { treeRoutes } from '../routes'


const TreeRouter = () => {
  return (
    <Routes>
        {treeRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component />} exact/>
        ))}
    </Routes>
  )
}

export default TreeRouter