import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://brunsant:Freki15%40Maia18@cluster0.283e4.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   //fetch data from an API and run it in the server side
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
