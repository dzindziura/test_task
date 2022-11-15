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
    <div key={id} className="lg:flex lg:justify-evenly component lg:bg-inherit grid grid-flow-col bg-slate-200">
      <div className='row-span-2 mr-5 pt-10'><span className='lg:inline-block lg:align-middle'><img className='img_component' src={pictures[0]} /></span></div>
      <div className='lg:ml-5 lg:mt-5 lg:w-3/5 col-span-2'>
        <p className='component_title'><Link to={'/jobDetailed/' + id}>{title}</Link></p>
        <p className='component_sub_titile mt-3'>{name}</p>
        <p className='component_country mt-3'><Link to="#"><i className="fa-solid fa-location-dot mr-2"></i></Link>{address}</p>
      </div>
      <div className='lg:my-auto lg:relative lg:flex-initialw-64 col-start-2'>
        <div className=''>
          <StarRating />
        </div>
      </div>
      <div className='relative flex-initial lg:w-40 col-span-3'>
        <div className='lg:absolute lg:right-0 lg:top-5'>
          <i onClick={() => setSolidBookMark(!solidBookMark)} className={solidBookMark ? "fa-solid fa-bookmark hidden lg:block" : "fa-regular fa-bookmark hidden lg:block"}></i>
        </div>
        <div className='lg:absolute lg:bottom-0 lg:right-0 text-center'>Posted {result} days ago</div>
      </div>
    </div>
  )
}