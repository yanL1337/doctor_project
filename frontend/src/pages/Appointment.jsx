import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, isWeekend } from "date-fns";
import PocketBase from "pocketbase";
import refreshContext from "../context/RefreshContext";

const Appointment = ({ docs }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const refresher = useContext(refreshContext);

  const pb = new PocketBase("https://doctorhub.pockethost.io");

  const isWeekday = (date) => {
    return !isWeekend(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 6; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        times.push(
          `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`
        );
      }
    }
    return times;
  };

  const getCombinedDateTime = () => {
    if (!selectedTime) return null;

    const [hours, minutes] = selectedTime.split(":").map(Number);
    return setMinutes(setHours(selectedDate, hours), minutes);
  };

  const createAppointment = async (event) => {
    event.preventDefault();

    console.log(getCombinedDateTime().toISOString());
    const formData = new FormData(event.target);
    formData.append("zeitpunkt", getCombinedDateTime().toISOString());
    formData.append("accepted", "false");

    const records = await pb.collection("termin").create(formData);
    const record = await pb
      .collection("docs")
      .update(records.doctor, { "termine+": [records.id] });
    console.log(record);
    refresher((prev) => !prev);
  };

  console.log(pb.authStore.model.id);
  return (
    <form onSubmit={createAppointment} className="flex flex-col p-10 space-y-4">
      <input
        type="text"
        name="name"
        id="name"
        className=" bg-white px-4 py-3  rounded-lg border-2 border-primary"
        placeholder="Vollständiger Name"
        // value={name}
      />
      <input
        type="email"
        name="email"
        id="email"
        className=" px-4 bg-white py-3 rounded-lg  border-2 border-primary"
        placeholder="E-Mail-Adresse"
        //value={email}
      />
      <select
        id="doctor"
        name="doctor"
        className="form-select border border-primary bg-white w-full text-black  rounded"
      >
        <option>Arzt wählen</option>
        {docs?.map((doc, index) => {
          return (
            <option key={index} value={doc.id}>
              {doc.username}
            </option>
          );
        })}
      </select>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={"dd.MM.yyyy"}
        filterDate={isWeekday}
        className="form-input px-4 py-3 bg-white w-full text-black rounded-lg border-2 border-primary"
      />
      <select
        className="form-select px-4 py-3 bg-white text-black rounded-lg border-2 border-primary"
        value={selectedTime}
        onChange={handleTimeChange}
      >
        {generateTimeOptions().map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <button
        className="mt-4 bg-secondary hover:bg-primary px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
        type="submit"
      >
        Buchen
      </button>
    </form>
  );
};

export default Appointment;
