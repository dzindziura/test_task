import { Link } from 'react-router-dom'
import functionForFindDefferenceBetwenTwoDates from '../listItem/functionForFindDefferenceBetwenTwoDates'

const JobDetails = (props) => {
    const { description, address, pictures, salary, title, employment_type, benefits, createdAt } = props.data;

    const employment_type_map = employment_type.map(item => <div className="btn infoBattun">{item}</div>);
    const benefits_map = benefits.map(item => <div className="btn infoBattun_yellow">{item}</div>);
    const pictures_map = pictures.map(item => <picture><img className='imgFullPost' width={300} height={133} alt="Info about" src={item}></img></picture>);


    const yearOld = createdAt.slice(0, 4);
    const monthOld = createdAt.slice(5, 7);
    const dayOld = createdAt.slice(8, 10);

    const dataPosted = functionForFindDefferenceBetwenTwoDates(dayOld, monthOld, yearOld);

    return (
        <>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 xl:mt-5 sm:grid-cols-2">
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 underLine pb-5">
                            <div className="col-span-2 text-3xl">Job Details</div>
                            <div className="col-end-5 col-span-1 grid grid-cols-1 gap text-lg text-right">
                                <div><i className="fa-regular fa-bookmark text-lg mr-2"></i>Save to my list
                                    <span className="ml-5"><i className="fa-solid text-lg mr-2 fa-share-nodes"></i>Share</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="applyBtn">APPLY NOW</button>
                        </div>
                        <div className="grid grid-cols-2 mt-10">
                            <div>
                                <div className="text-2xl">{title}</div>
                                <div className="text-xl mt-3">Posted {dataPosted} days ago</div>
                            </div>
                            <div className="text-xl text-right">
                                <span>€ {salary}</span>
                                <div className="text-lg">Brutto, per year</div>
                            </div>
                        </div>
                        <div className="mt-5">
                            {description}
                        </div>
                        <div className="mt-10">
                            <button className="applyBtn">APPLY NOW</button>
                        </div>
                        <div className="mt-10">
                            <div className="underLine pb-5 text-3xl">Additional info</div>
                            <div className="mt-5">Employment type</div>
                            <div className="grid grid-cols-3 gap-2 text-base mt-4">
                                {employment_type_map}
                            </div>
                            <div className="mt-7">Benefits</div>
                            <div className="grid grid-cols-3 gap-2 text-base mt-4">
                                {benefits_map}
                            </div>
                            <div className="mt-10">
                                <div className="underLine pb-5 text-3xl">Attached images</div>
                                <div className="mt-7 grid grid-cols-3">{pictures_map}</div>
                            </div>
                        </div>
                    </div>
                    <div className="sidePanel lg:ml-5">
                        <div>Department name. <br />University Hospital Giessen.</div>
                        <div className="mt-2"><i className="fa-solid fa-location-dot mr-2 location"></i>{address}<br />Gürtel 18-20</div>
                        <div className="mt-2">+43 (01) 40400-12090,<br />post_akh_diz@akhwien.at</div>
                    </div>
                </div>
            </div>
            <div className="mt-10 container_footer"><Link to="/" className="btn btn_return"><i className="text-2xs fa-solid fa-angle-left mr-2"></i>RETURN TO JOB BOARD</Link></div>
        </>
    )

}

export default JobDetails;