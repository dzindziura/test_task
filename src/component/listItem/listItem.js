import { useState } from 'react';
import functionForFindDefferenceBetwenTwoDates from './functionForFindDefferenceBetwenTwoDates'
import { Link } from 'react-router-dom'

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <i className={index <= (hover || rating) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          </button>
        );
      })}
    </div>
  );
};

export const ListItem = (props) => {
  const [solidBookMark, setSolidBookMark] = useState(false);
  const { title, address, name, pictures, createdAt, id } = props.data;

  const yearOld = createdAt.slice(0, 4);
  const monthOld = createdAt.slice(5, 7);
  const dayOld = createdAt.slice(8, 10);

  const result = functionForFindDefferenceBetwenTwoDates(dayOld, monthOld, yearOld);

  return (
    <div key={id} className="flex justify-evenly component">
      <div className='ml-5 mt-6 flex-none'><span className='inline-block align-middle'><img className='img_component' src={pictures[0]} /></span></div>
      <div className='ml-5 mt-5 w-3/5'>
        <p className='component_title'><Link to={'/jobDetailed/' + id}>{title}</Link></p>
        <p className='component_sub_titile mt-3'>{name}</p>
        <p className='component_country mt-3'><Link to="#"><i className="fa-solid fa-location-dot mr-2"></i></Link>{address}</p>
      </div>
      <div className='my-auto relative flex-initial w-64'>
        <div className='absolute right-0'>
          <StarRating />
        </div>
      </div>
      <div className='relative flex-initial w-40'>
        <div className='absolute right-0 top-5'>
          <i onClick={() => setSolidBookMark(!solidBookMark)} className={solidBookMark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
        </div>
        <div className='absolute bottom-0 right-0'>Posted {result} days ago</div>
      </div>
    </div>
  )
}