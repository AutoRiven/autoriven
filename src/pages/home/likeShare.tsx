// LikeShare.jsx
import { Link } from 'react-router-dom';
import wishlist from '../../assets/icons/wishlist1.svg';
import share from '../../assets/icons/share.svg';
import back_to_top from '../../assets/icons/back_to_top.svg';

const LikeShare = () => {
  return (
    <div className="like-share-top-block">
      {/* Wishlist */}
      <Link to="/wishlist" className="link-block w-inline-block">
        <img src={wishlist} loading="lazy" alt="Wishlist" className="icon" />
      </Link>

      {/* Copy Link */}
      <button
        className="link-block w-inline-block"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied!');
        }}
      >
        <img src={share} loading="lazy" alt="Copy link" className="icon" />
      </button>

      {/* Scroll to Top */}
      <button
        className="link-block w-inline-block"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={back_to_top} loading="lazy" alt="Scroll to Top" className="icon" />
      </button>
    </div>
  );
};

export default LikeShare;
