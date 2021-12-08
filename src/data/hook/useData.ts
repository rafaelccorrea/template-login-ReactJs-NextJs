import {useContext} from "react";
import AppContext from "../context/AppContext";

const useData = () => useContext(AppContext)

export default useData;