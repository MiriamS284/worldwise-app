import { useParams /*, useSearchParams*/ } from "react-router";
// import styles from "./City.module.css"; // Uncomment if you use styles in your JSX

// const formatDate = (date) => // Uncomment if you use this function
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const { id } = useParams();
  // const [searchParams /*, setSearchParams*/] = useSearchParams(); // Modify if setSearchParams is not used

  // const lat = searchParams.get("lat"); // Uncomment or use if needed
  // const lng = searchParams.get("lng"); // Uncomment or use if needed
  // TEMP DATA
  // const currentCity = { // Comment or uncomment based on usage
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  // const { cityName, emoji, date, notes } = currentCity; // Comment or uncomment based on usage

  return (
    <>
      <h1>City {id}</h1>
      {/* <p>
        Position: {lng}, {lat}
      </p> */}
    </>
  );

  /*
  // Uncomment this section if you wish to use the detailed city information layout
  return (
    <div className={styles.city}>
      ...
    </div>
  );
  */
}

export default City;
