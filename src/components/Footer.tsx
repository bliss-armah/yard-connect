import { FaFacebook,FaInstagram,FaTwitter,FaTiktok    } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-40 text-white">
      <div className="flex items-center justify-center gap-3 mb-3">
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
        <FaTiktok size={30} />

      </div>
        <p>Copyright &copy; 2024 by Colektive</p>
    </footer>
  )
}

export default Footer