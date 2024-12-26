import { FaCalendar } from "react-icons/fa";

const SmallNewsCard = ({n}) => {
    const {title, image_url, author} = n;
  return (
    <div className="card bg-base-100 border">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4 flex- flex-col gap-4">
        <h2 className=" font-semibold text-lg">
          {title}
        </h2>
        
        <div className=" flex justify-between">
          <h1>{author.name}</h1>
          <div className="flex items-center gap-1">
            <FaCalendar></FaCalendar>
            <p>12 March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsCard;
