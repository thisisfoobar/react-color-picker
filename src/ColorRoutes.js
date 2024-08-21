import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import FilterColorDetails from "./FilterColorDetails";
import NewColorForm from "./NewColorForm";

const ColorRoutes = ({colorList, addColor}) => {
  return (
    <Routes>
      <Route path='/colors' element={<ColorList colorList={colorList}/>} />
      <Route path='/colors/:color' element={<FilterColorDetails colorList={colorList} />}/>
      <Route path='/colors/new' element={<NewColorForm addColor={addColor} />}/>
      <Route
            path='*'
            element={<Navigate to='/colors' />} // This replaces the Redirect component.
          />
    </Routes>
  )
}

export default ColorRoutes;