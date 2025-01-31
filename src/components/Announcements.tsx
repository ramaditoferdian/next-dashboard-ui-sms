import Image from "next/image";


// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    time: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero commodi cum ut pariatur tenetur?",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    time: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero commodi cum ut pariatur tenetur?",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    time: "2025-01-01",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero commodi cum ut pariatur tenetur?",
  }
];

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">
          Announcements
        </h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => {
          return (
            <div 
              key={event.id}
              className="p-4 rounded-md first:bg-customSkyLight [&:nth-child(3n+2)]:bg-customPurpleLight [&:nth-child(3n)]:bg-customYellowLight"
            >
              <div className="flex items-start justify-between">
                <h1 className="font-medium text-gray-600">
                  {event.title}
                </h1>
                <span className="bg-white text-gray-400 text-xs rounded-md px-1 py-1 text-nowrap">{event.time}</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{event.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Announcements;