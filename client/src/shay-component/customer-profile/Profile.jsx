import React from "react";
import NavPostLog from "../NavPostLog";
import Footer from "../Footer";
import ProfileCard from "./_ProfileDataCard";
import TransactionCard from "./_TransactionDataCard";
import Fotterfinal from "../../pages/landingpage/footer";

const dummyData = {
  name: "Consumer1",
  address: "IIIT Sricity",
  pincode: 517617,
};

export default () => {
  return (
    <div>
      <NavPostLog />
      <ProfileCard data={dummyData} />
      <TransactionCard />
      <Fotterfinal />
    </div>
  );
};
