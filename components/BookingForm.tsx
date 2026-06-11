"use client";
import { useState } from "react";

const CITIES = ["Rajahmundry"];
const TIME_SLOTS = [
  "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM"
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "sedan",
    service: "Basic Wash",
    city: "Rajahmundry",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessageType("success");
        setMessage("✅ Booking confirmed! Check your email for details.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicle: "sedan",
          service: "Basic Wash",
          city: "Rajahmundry",
          date: "",
          time: "",
        });
      } else {
        setMessageType("error");
        setMessage("❌ " + data.message);
      }
    } catch (error) {
      setMessageType("error");
      setMessage("❌ Error booking appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gold mb-4">Book Your Appointment</h2>
        <p className="text-gray-300 text-lg">
          Choose your preferred date and time for our premium car wash service
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-black to-darkBg border-2 border-gold rounded-2xl p-8 shadow-2xl"
      >
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg border-2 ${
              messageType === "success"
                ? "border-gold bg-black text-gold"
                : "border-red-500 bg-black text-red-400"
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gold font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gold font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gold font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-gold font-semibold mb-2">Vehicle Type</label>
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gold font-semibold mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="Basic Wash">Basic Wash - $25</option>
              <option value="Premium Wash">Premium Wash - $45</option>
              <option value="Full Detail">Full Detail - $85</option>
            </select>
          </div>
          <div>
            <label className="block text-gold font-semibold mb-2">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gold font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-gold font-semibold mb-2">Time Slot</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lightGray border-2 border-gold rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select a time</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-lg transition transform hover:-translate-y-1 ${
            loading
              ? "bg-gray-600 cursor-not-allowed text-gray-400"
              : "bg-gold text-black hover:bg-darkGold shadow-lg"
          }`}
        >
          {loading ? "Processing..." : "🎯 Confirm Booking"}
        </button>
      </form>

      <div className="mt-8 p-6 bg-lightGray border-2 border-gold rounded-lg text-center">
        <p className="text-gray-300 mb-3">
          <strong className="text-gold">💡 Note:</strong> If a slot is already booked by another customer, a notification will be sent to your email.
        </p>
      </div>
    </section>
  );
}
