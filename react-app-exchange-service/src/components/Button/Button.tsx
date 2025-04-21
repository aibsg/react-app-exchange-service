import "./Button.css"
import { Link } from "react-router-dom"

type ButtonProps = {
    text: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
  };

export default function Button({ text, icon, href, onClick, className }: ButtonProps) {
    if (href) {
        return (
          <Link to={href} className={className ? `my-button ${className}` : "my-button"}>
            {icon && <span className="btn-icon">{icon}</span>}
            {text}
          </Link>
        );
      }
    
      return (
        <button className={className ? `my-button ${className}` : "my-button"} onClick={onClick}>
          {icon && <span className="btn-icon">{icon}</span>}
          {text}
        </button>
      );
    }