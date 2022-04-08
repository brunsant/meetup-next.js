import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://picsum.photos/200"
      title="A first meetup"
      address="Some Street, 5, Some City"
      description="meetup description"
    />
  );
}

//getStaticPaths is needed only with getStaticProps
export async function getStaticPaths() {
  return {
    //fallback inform that not all id are hard coded, so it will try to find the next ones automatically. false would say only those id should work
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://picsum.photos/200",
        id: "meetupId",
        title: "A first meetup",
        address: "Some Street, 5, Some City",
        description: "meetup description",
      },
    },
  };
}

export default MeetupDetails;
