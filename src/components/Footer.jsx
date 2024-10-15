import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>e-Book Shop</h3>

          <p>Your one-step fot all your needs book. Shop with use end experience the best online book shopping.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
          </ul>
        </div>
        
        <div></div>
      </div>
    </footer>
  )
}

export default Footer