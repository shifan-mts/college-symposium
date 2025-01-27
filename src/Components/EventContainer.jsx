import React from "react";
import { events } from "../utils/events";
import { Link } from "react-router-dom";

const EventContainer = () => {
  console.log(events);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="text-3xl font-bold text-center mb-8 text-white">Events</h3>
      <div className="event-header grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((eventData) => (
          <Link
            to={
              eventData.name === "Technical"
                ? "/events/tech"
                : "/events/non-tech"
            }
            key={eventData.id}
            className="group"
          >
            <div
              className="event-container bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-center text-gray-700 group-hover:text-blue-500">
                  {eventData.name}
                </h3>
                <hr className="my-4" />
                <div className="flex justify-center items-center">
                  <img
                    src={eventData.image}
                    alt={eventData.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
