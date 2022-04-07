import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Fist meetup",
    image: "https://picsum.photos/200",
    address: "street one",
    description: " first meetup!",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://picsum.photos/200",
    address: "street two",
    description: " second meetup!",
  },
  {
    id: "m3",
    title: "Thirs meetup",
    image: "https://picsum.photos/200",
    address: "street three",
    description: " third meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
