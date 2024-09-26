import React from "react";
import { AnnouncementProvider } from "../../context/AnnouncementContext";
import Announcement from "../announce/Announce";
import Allannounce from "../announce/Allannounce";
import Header from "../Header/header";

function Home() {
  return (
    <AnnouncementProvider>
      <div>
        <Header />
        <Allannounce />
      </div>
    </AnnouncementProvider>
  );
}

export default Home;
