const popularLocations = {
  plots: {
    Lahore: [
      "Plots for Sale in DHA Defence (3,927)",
      "Plots for Sale in Park View City (2,356)",
      "Plots for Sale in Bahria Town (2,194)",
    ],
    Karachi: [
      "Plots for Sale in Scheme 33 (3,054)",
      "Plots for Sale in DHA Defence (2,178)",
      "Plots for Sale in Gulistan-e-Jauhar (1,321)",
    ],
    Islamabad: [
      "Plots for Sale in DHA Defence (2,937)",
      "Plots for Sale in B-17 (1,947)",
      "Plots for Sale in Gulberg (1,224)",
    ],
  },
  flats: {
    Lahore: [
      "Flats for Sale in Bahria Town (1,052)",
      "Flats for Sale in Johar Town (947)",
      "Flats for Sale in Askari (734)",
    ],
    Karachi: [
      "Flats for Sale in DHA Defence (2,001)",
      "Flats for Sale in Gulistan-e-Jauhar (1,912)",
      "Flats for Sale in Bahria Town Karachi (1,504)",
    ],
    Islamabad: [
      "Flats for Sale in DHA Defence (956)",
      "Flats for Sale in E-11 (844)",
      "Flats for Sale in G-11 (741)",
    ],
  },
  houses: {
    Lahore: [
      "Houses for Sale in DHA Defence (7,542)",
      "Houses for Sale in Bahria Town (2,970)",
      "Houses for Sale in Johar Town (1,827)",
    ],
    Karachi: [
      "Houses for Sale in DHA Defence (2,054)",
      "Houses for Sale in Gulshan-e-Iqbal Town (1,087)",
      "Houses for Sale in Bahria Town Karachi (964)",
    ],
    Islamabad: [
      "Houses for Sale in DHA Defence (1,206)",
      "Houses for Sale in Bahria Town (727)",
      "Houses for Sale in G-13 (610)",
    ],
  },
};

function LocationColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <ul className="space-y-1 text-sm text-blue-700">
        {items.map((item, idx) => (
          <li key={idx} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PopularLocations() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Popular Locations</h2>
      
      {/* PLOTS */}
      <h3 className="text-xl font-bold mb-4 text-green-600">Most Popular Locations for Plots</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <LocationColumn title="Lahore" items={popularLocations.plots.Lahore} />
        <LocationColumn title="Karachi" items={popularLocations.plots.Karachi} />
        <LocationColumn title="Islamabad" items={popularLocations.plots.Islamabad} />
      </div>

      {/* FLATS */}
      <h3 className="text-xl font-bold mb-4 text-green-600">Most Popular Locations for Flats</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <LocationColumn title="Lahore" items={popularLocations.flats.Lahore} />
        <LocationColumn title="Karachi" items={popularLocations.flats.Karachi} />
        <LocationColumn title="Islamabad" items={popularLocations.flats.Islamabad} />
      </div>

      {/* HOUSES */}
      <h3 className="text-xl font-bold mb-4 text-green-600">Most Popular Locations for Houses</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LocationColumn title="Lahore" items={popularLocations.houses.Lahore} />
        <LocationColumn title="Karachi" items={popularLocations.houses.Karachi} />
        <LocationColumn title="Islamabad" items={popularLocations.houses.Islamabad} />
      </div>
    </section>
  );
}
