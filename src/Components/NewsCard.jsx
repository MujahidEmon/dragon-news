import { Link } from "react-router-dom";


const NewsCard = ({singleNews}) => {
    const {image_url, title, details, _id} =singleNews;
    return (
        <div className="card p-8 space-y-8 bg-base-100 border">
            <figure className="px-2">
                <img
                src={image_url}
                alt="Shoes"
                className="rounded-lg" />
            </figure>
            <div className=" items-center space-y-6">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 150 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="font-semibold text-orange-600">Read More...</Link></p> : <p>{details}</p>
                }
            </div>
        </div>
    );
};

// NewsCard.propTypes = {
//     singleNews.PropTypes = object,
// }
export default NewsCard;