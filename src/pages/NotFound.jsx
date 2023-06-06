import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
         <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">OOPS</h1>
            <p className="mb-4">page not found</p>

            <Link to='/' className="btn bg-white btn-md text-gray-700">
               <FaHome/>
               back to home
            </Link>
         </div>
      </div>

    </div>
  )
}
export default NotFound