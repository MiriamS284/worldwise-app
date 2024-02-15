import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }),
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default CityList;
