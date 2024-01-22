import React from "react";
import HomeButton from "../components/HomeButton";
import "../styles/Home.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import AnimatePage from "../components/AnimatePage";

import LoliShigure from "../assets/ui-shigure-shigure-ui.gif";

function Home() {
  return (
    <AnimatePage>
      <div className="container">
        <div className="header">
          <h1>
            Hi, This is <span className="font-aqua">ZarfDev</span>{" "}
          </h1>
          <p>
            A software/game developer with passion for learning and creating
          </p>
        </div>
        <div className="">
          <ol className="links">
            <li className="li-spacing">
              <HomeButton
                link="https://github.com/zarifdesanta"
                name="GitHub"
                icon={<GitHubIcon></GitHubIcon>}
              ></HomeButton>
            </li>
            <li className="li-spacing">
              <HomeButton
                link="https://zarifdesanta.itch.io/"
                name="Itch.io"
                icon={<SportsEsportsIcon></SportsEsportsIcon>}
              ></HomeButton>
            </li>
            <li className="li-spacing">
              <HomeButton
                link="https://www.linkedin.com/in/gazi-md-julcarnine-8bb036237/"
                name="Linkedin"
                icon={<LinkedInIcon></LinkedInIcon>}
              ></HomeButton>
            </li>
            <li className="li-spacing">
              <HomeButton
                link="https://twitter.com/julcarnine"
                name="Twitter"
                icon={<TwitterIcon></TwitterIcon>}
              ></HomeButton>
            </li>
            <li className="li-spacing">
              <HomeButton
                link="https://www.facebook.com/profile.php?id=100005783265875"
                name="Facebook"
                icon={<FacebookIcon></FacebookIcon>}
              ></HomeButton>
            </li>
            <li className="li-spacing">
              <HomeButton
                link="https://www.instagram.com/julcarninezarif/"
                name="Instagram"
                icon={<InstagramIcon></InstagramIcon>}
              ></HomeButton>
            </li>
          </ol>
        </div>
      </div>
    </AnimatePage>
  );
}

export default Home;
