import { useState, useEffect, useContext } from "react"
import { listXin } from "./BanApp"

function ListFlim(props) {
    const list = useContext(listXin)
    console.log(list);
      return (
          <h1 onClick={() => {console.log(list)}}>Hello</h1>
      )
}
export default ListFlim