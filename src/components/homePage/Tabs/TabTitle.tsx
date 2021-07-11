import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  selectedTab: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, selectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (

    /*<button  className="p-4 border-b-2 border-solid border-white border-opacity-10 hover:bg-white hover:bg-opacity-5" onClick={onClick}>{title}</button>*/
    
      <button  className={selectedTab !==  index ? "p-4 border-b-2 border-solid border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 focus:outline-none" : "p-4 border-b-2 border-solid border-white hover:bg-white hover:bg-opacity-5 active:bg-white focus:outline-none"}  onClick={onClick}>{title}</button>

  
  )
}

export default TabTitle