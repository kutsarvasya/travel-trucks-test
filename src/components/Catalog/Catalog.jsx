// import { useSelector } from "react-redux";
// import { selectCatalog } from "../../redux/catalog/slice";

const i = {
  id: "23",
  name: "Skyline Traveler",
  price: 13000,
  rating: 4.5,
  location: "Ukraine, Dnipro",
  description: "The Skyline Traveler offers a luxurious experience...",
  form: "fullyIntegrated",
  length: "8.0m",
  width: "2.6m",
  height: "3.9m",
  tank: "220l",
  consumption: "35l/100km",
  transmission: "automatic",
  engine: "diesel",
  AC: true,
  bathroom: true,
  kitchen: true,
  TV: true,
  radio: true,
  refrigerator: true,
  microwave: true,
  gas: true,
  water: true,
  gallery: [
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/7-2.webp",
      original: "https://ftp.goit.study/img/campers-test-task/7-2.webp",
    },
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/7-3.webp",
      original: "https://ftp.goit.study/img/campers-test-task/7-3.webp",
    },
  ],
  reviews: [
    {
      reviewer_name: "Alice",
      reviewer_rating: 5,
      comment: "One of the best campers we've ever used!",
    },
    {
      reviewer_name: "Bob",
      reviewer_rating: 3,
      comment: "Good for short trips, but fuel consumption is high.",
    },
  ],
};

function Catalog() {
  //   const catalog = useSelector(selectCatalog);

  return (
    <article className="">
      <div>
        <img className="" src={i.gallery[0].original} alt="" loading="lazy" />
      </div>
      <div>
        <div>
          <h3>{i.name}</h3>

          <div>
            <p>{i.price}</p>
            <button type="button" className="" onClick={() => {}}>
              ❤️
            </button>
          </div>
        </div>
        <div className="">
          <span className="">
            <span className="">☆</span>
            {i.rating}
            <span className=""> {i.reviews.length} Reviews</span>
          </span>
          <span className="">{i.location}</span>
        </div>
        <p className="">{i.description}</p>
      </div>
    </article>
  );
}
export default Catalog;
