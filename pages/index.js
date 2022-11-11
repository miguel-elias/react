import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHome = {
    //backgroundColor: "red"
  };

  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estilosDaHome}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyleHeader = styled.div`
  img {
    width: 90px;
    height: 90px;
    border-radius: 50px;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyleHeader>
      {/* {<img src="banner"/>} */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyleHeader>
  );
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);
  //Satement mesma coisa de for o react nao aceita
  //Retorno, o react prefere tudo que tem retorno por expressao use sempre o map.
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        console.log(playlistsName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
