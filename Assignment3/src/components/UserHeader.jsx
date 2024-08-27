import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRotateRight} from '@fortawesome/free-solid-svg-icons';

// const UserHeader = () => {
//     return (
//       <div className="h-5 text-black flex flex-row justify-between mx-2">
//         <FontAwesomeIcon icon={faArrowLeft} />
//         <h3 className="my-auto font-serif font-normal text-[16px]">Profile Overview</h3>
//         <FontAwesomeIcon icon={faRotateRight} />
//       </div>
//     );
//   };

const UserHeader = () => {
    const [rotate, setRotate] = useState(false);
  
    const handleRefresh = () => {
      setRotate(true);
      setTimeout(() => {
          window.location.reload()
          setRotate(false);
      }, 100); // rotate for 1 second
    };
  
    return (
      <div className="h-5 md:h-14 lg:h-16 xl:h-18 text-black flex flex-row items-center justify-between mx-2">
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg md:text-sm lg:text-lg xl:text-lg" />
        <h3 className="my-auto font-serif font-normal text-base md:text-sm lg:text-lg xl:text-lg">Profile Overview</h3>
        <FontAwesomeIcon
          icon={faRotateRight}
          className={`text-lg md:text-sm lg:text-lg xl:text-lg ${rotate ? 'animate-spin' : ''}`}
          onClick={handleRefresh}
        />
      </div>
    );
  };

export default UserHeader  