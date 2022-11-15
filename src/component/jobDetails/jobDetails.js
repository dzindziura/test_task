import { Link } from 'react-router-dom'
import functionForFindDefferenceBetwenTwoDates from '../listItem/functionForFindDefferenceBetwenTwoDates'
import Map from '../map/map';
import { useState } from 'react'

const JobDetails = (props) => {
    const { description, address, pictures, salary, title, employment_type, benefits, createdAt, location } = props.data;
    const [solidBookMark, setSolidBookMark] = useState(false);

    const employment_type_map = employment_type.map(item => <div className="btn infoBattun">{item}</div>);
    const benefits_map = benefits.map(item => <div className="btn infoBattun_yellow">{item}</div>);
    const pictures_map = pictures.map(item => <picture><img className='imgFullPost mt-5' width={300} height={133} alt="Info about" src={item}></img></picture>);


    const yearOld = createdAt.slice(0, 4);
    const monthOld = createdAt.slice(5, 7);
    const dayOld = createdAt.slice(8, 10);

    const dataPosted = functionForFindDefferenceBetwenTwoDates(dayOld, monthOld, yearOld);

    return (
        <>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 xl:mt-5">
                    <div className="col-span-2">
                        <div className="lg:grid lg:grid-cols-2 lg:border-b-4 lg:border-indigo-100 pb-5">
                            <div className="col-span-2  max-lg:pb-5  max-lg:mt-3 max-lg:border-b-4 max-lg:border-indigo-100 text-3xl">Job Details</div>
                            <div className="col-end-5  max-lg:pt-5 col-span-1 grid grid-cols-1 gap text-lg lg:text-right">
                                <div><i onClick={() => setSolidBookMark(!solidBookMark)} className={solidBookMark ? "fa-solid fa-bookmark mr-3" : "fa-regular fa-bookmark mr-3"}></i>Save to my list
                                    <span className="ml-5"><i className="fa-solid fa-share-nodes mr-3"></i>Share</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 hidden lg:block">
                            <button className="applyBtn">APPLY NOW</button>
                        </div>
                        <div className="grid grid-cols-6 mt-10">
                            <div className='lg:col-span-4 col-span-7'><div className="text-2xl">{title}</div></div>
                            <div className="text-posted col-span-4">Posted {dataPosted} days ago</div>
                            <div className="lg:row-start-1 lg:col-end-7 col-end-8">
                                <div className=''>€ {salary}</div>
                                <div className="text-lg max-lg:row-start-1">Brutto, per year</div>
                            </div>
                        </div>
                        <div className="mt-5">
                            {description}
                        </div>
                        <div className="mt-10 max-lg:text-center">
                            <button className="applyBtn">APPLY NOW</button>
                        </div>
                        <div className="mt-10">
                            <div className="lg:border-b-4 lg:border-indigo-100 pb-5 text-3xl max-lg:border-b-4 max-lg:border-indigo-100">Additional info</div>
                            <div className="mt-5 ">Employment type</div>
                            <div className="grid grid-cols-3 gap-2 text-base mt-4">
                                {employment_type_map}
                            </div>
                            <div className="mt-7">Benefits</div>
                            <div className="grid grid-cols-3 gap-2 text-base mt-4">
                                {benefits_map}
                            </div>
                            <div className="mt-10">
                                <div className="lg:border-b-4 lg:border-indigo-100 pb-5 text-3xl max-lg:border-b-4 max-lg:border-indigo-100">Attached images</div>
                                <div className="mt-7 max-lg:grid max-lg:grid-cols-3"><div className='max-lg:col-start-2 lg:grid lg:grid-cols-3'>{pictures_map}</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="sidePanel w-full max-lg:mt-5 max-lg:col-span-3 lg:w-96 lg:ml-5">
                        <div className='ml-10 mt-10 mb-10'>
                            <div>Department name. <br />University Hospital Giessen.</div>
                            <div className="mt-2"><i className="fa-solid fa-location-dot mr-2 location"></i>{address}<br />Gürtel 18-20</div>
                            <div className="mt-2">+43 (01) 40400-12090,<br />post_akh_diz@akhwien.at</div>
                        </div>
                        <div className='max-lg:col-span-3'><Map lng={location.long} lat={location.lat} /></div>
                    </div>
                </div>
            </div>
            <div className="mt-10 container_footer"><Link to="/" className="btn btn_return"><i className="text-2xs fa-solid fa-angle-left mr-2"></i>RETURN TO JOB BOARD</Link></div>
        </>
    )

}

export default JobDetails;