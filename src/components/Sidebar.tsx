import { FaHome, FaSearch, FaUser } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1a1c1e] text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center">
              <FaHome className="mr-2 mb-3" size={18}/>
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaUser className="mr-2 mb-3" size={18}/>
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center">
              <FaSearch className="mr-2 mb-3" size={18}/>
            </div>
          </li>
        </div>

        <div className="bottom">
          <li>
            <IoMdSettings size={18}/>
            <FaUser className="mt-5" size={18}/>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar