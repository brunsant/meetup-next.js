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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
