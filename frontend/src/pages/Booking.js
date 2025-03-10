import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const Booking = () => {  

  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());

  // 🔧 Disponibilités définies par l'admin
  const availableSlots = [
    { date: "2025-04-10", start: 16, end: 20 }, // 16h-20h
    { date: "2025-04-11", start: 18, end: 22 }, // 18h-22h
  ];

  // 🔹 Transforme les disponibilités en créneaux d'une heure
  const generateTimeSlots = () => {
    let slots = [];
    availableSlots.forEach(({ date, start, end }) => {
      for (let hour = start; hour < end; hour++) {
        slots.push({
          id: `${date}-${hour}`,
          title: "Créneau disponible",
          start: new Date(`${date}T${hour}:00:00`),
          end: new Date(`${date}T${hour + 1}:00:00`),
        });
      }
    });
    return slots;
  };

  const [events, setEvents] = useState(generateTimeSlots());

  // 🛑 Vérifie si le créneau est disponible
  const isSlotAvailable = (selectedSlot) => {
    return events.some(
      (event) =>
        event.start.getTime() === selectedSlot.start.getTime() &&
        event.title !== "Créneau disponible"
    );
  };

  // ✅ Réserver un créneau
  const handleSelectSlot = ({ start, end }) => {
    const selectedSlot = { start, end };

    if (isSlotAvailable(selectedSlot)) {
      alert("Ce créneau est déjà réservé !");
      return;
    }

    const title = prompt("Entrez votre nom pour la réservation :");
    if (title) {
      setEvents((prev) =>
        prev.map((event) =>
          event.start.getTime() === start.getTime()
            ? { ...event, title: `Réservé par ${title}` }
            : event
        )
      );
    }
  };

  // Apply styles to reserved events (gray them out)
  const eventStyleGetter = (event) => {
    const style = {};
    if (event.title !== "Créneau disponible") {
      style.backgroundColor = "gray"; // Gray out the reserved events
      style.opacity = 0.5; // Optional: make the reserved event a little more transparent
    }
    return {
      style,
    };
  };

  return (
    <main>
      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        
        views={[Views.WEEK, Views.DAY]}
        defaultView={view}
        view={view} // Include the view prop
        date={date} // Include the date prop
        onView={(view) => setView(view)}
        onNavigate={(date) => {
            setDate(new Date(date));
        }}

        step={60} // Créneaux d'une heure
        timeslots={1}
        min={new Date(2025, 3, 1, 8, 0)} // Heure minimale affichée
        max={new Date(2025, 3, 1, 23, 0)} // Heure maximale affichée
        style={{ height: 600 }}
      />
    </main>
  );
};

export default Booking;
