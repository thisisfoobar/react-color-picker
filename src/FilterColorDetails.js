import { useParams,Navigate } from "react-router-dom";
import ColorDetails from "./ColorDetails";

const FilterColorDetails = ({colorList}) => {
  const { color } = useParams();
  let colorMatch;
  if(color) {
    colorMatch = colorList.find(c => c.name.toLowerCase() === color.toLowerCase())
    if(!colorMatch) {
      return <Navigate to='/colors' />
    } else {
      return <ColorDetails color={colorMatch} />
    }
  }
}

export default FilterColorDetails