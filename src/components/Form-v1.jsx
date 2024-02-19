import { useState, useEffect } from "react";
import BackButton from "./BackButton";
import DatePicker from "react-datepicker";
import Button from "./Button";
import Message from "./Message";
import Spinner from "./Spinner";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import styles from "./Form.module.css";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, getFlag } = useCities();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(() => {
    if (!lat && !lng) return;
    async function fetchCityData() {
      if (!lat || !lng) return;
      try {
        setGeocodingError("");
        setIsLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "That doesn´t seem to be a city. Click somewhere else."
          );

        setCityName(data.city || data.locality || "");
        setCountryCode(data.countryCode);

        setCountry(data.countryName);
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      //emoji,
      notes,
      position: { lat, lng },
    };
    createCity(newCity);
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isLoadingGeocoding && <p>Loading location data...</p>}
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {countryCode && getFlag(countryCode)}
      </div>

      {/* Display the country */}
      <div className={styles.row}>
        <label htmlFor="country">Country</label>
        <input id="country" readOnly value={country} />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
