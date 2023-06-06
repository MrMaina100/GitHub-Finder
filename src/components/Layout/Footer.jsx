import { FaGithub } from "react-icons/fa";

function Footer() {
   const footerYear  = new Date().getFullYear();
  return (
    <footer className="footer p-2 bg-gray-700 text-white footer-center">

      <FaGithub className="text-xl"/>

      <p>Copyright &copy; {footerYear} All rights </p>

    </footer>
  )
}
export default Footer