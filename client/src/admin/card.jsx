import './admincss/card.css';

export default function Card({ key, image, name, rating, phone, zone }) {
  return (
    <div className='card-content'>
    <div key={key} className='idcard flex flex-row gap-4 justify-around p-2'>
      <div className="idcard-profile flex items-center">
        <img
          src={image}
          className="profile rounded-full"
          alt="Profile picture"
          style={{ width: '50px', height: '50px' }}
          />
      </div>
      <div className='idcard-name flex items-center text-lg'>
        <h2 className=''>
          {name}
        </h2>
        </div>
        <div className='combined-rating flex flex-col ml-2'>
        <span className='idcard-rating flex flex-row justify-center items-center rounded-full px-5 py-2'>
          <h2 className='rating-value'>{rating}</h2>
          <span
            role="img"
            aria-label="star"
            // className="align-middle"
            style={{ color: 'rgb(255, 217, 0)', fontSize: '27px' }}
            >
            &#9733;
          </span>
        </span>
        <div className='rating-word text-center text-xs'>rating</div>
        </div>
    </div>
    <div className='idcard-footer flex flex-col'>
      <div className='idcard-phone flex flex-row items-center'>
      <svg className='phone-icon' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
        </svg>
        <div className='phone-label text-xs'>Phone : {phone}</div>
      </div>
      <div className='idcard-zone flex flex-row items-center'>
      <svg className='zone-icon' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
        </svg>
        <div className='zone-label text-xs'>Zone : {zone}</div>
      </div>        
      </div>
    
    </div>
  );
}