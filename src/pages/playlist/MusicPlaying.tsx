import { useState } from "react";

import "./Playlist.scss";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueIcon from "@mui/icons-material/Queue";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import { IconButton, Slider, Tooltip, Typography } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import styled from "@emotion/styled";

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const MusicPlaying = () => {
  const duration = 200;

  const [value, setValue] = useState<number>(30);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [position, setPosition] = useState(120);
  const [currentSong, setCurrentSong] = useState(null);
  const [pausedSong, setPausedSong] = useState(true);


  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleVolumeClick = () => {
    setMuted(!muted);
  };
  const handlePlaySong = () => {
    setCurrentSong(currentSong);
    setPausedSong(false);
  };
  return (
    <div>
      <div className="musicContainer">
        <div className="musicPlaying">
          <div className="musicInfo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0vjrm9CFU2dLrnzbgLd3f8pf2ralYe2zYb8DTpln6vz3EOeAyz1DYcTsJtnVPQsVtRo&usqp=CAU"
              alt=""
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1">Blinding Lights</Typography>
              <Typography variant="caption" sx={{ alignItems: "text-start" }}>
                The Weekend
              </Typography>
            </Box>
            <FavoriteBorderIcon />
            <PictureInPictureIcon />
          </div>
          <div className="musicOptions">
            <Box display="flex" alignItems="center">
              <ShuffleIcon fontSize="large" />
              <SkipPreviousIcon fontSize="large" />
              <IconButton
                onClick={() => setPaused(!paused)}
                sx={{ color: "white" }}
              >
                {paused ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayCircleFilledIcon fontSize="large" />
                )}
              </IconButton>

              <SkipNextIcon fontSize="large" />
              <RepeatIcon fontSize="large" />
            </Box>
            <Box
              display="flex"
              gap="5px"
              alignItems="center"
              justifyContent="center"
            >
              <TinyText>{formatDuration(position)}</TinyText>
              <Slider size="small" defaultValue={60} />
              <TinyText>-{formatDuration(duration - position)}</TinyText>
            </Box>
          </div>
          <div className="musicDetails">
            {["Lyrics", "Queue", "Connect To Tv", "Mute Volume"].map(
              (title, index) => (
                <Tooltip key={index} title={title} sx={{ color: "white" }}>
                  <IconButton onClick={index === 3 ? handleVolumeClick : null}>
                    {index === 0 && <LyricsIcon />}
                    {index === 1 && <QueueIcon />}
                    {index === 2 && <ConnectedTvIcon />}
                    {index === 3 &&
                      (muted ? <VolumeDownIcon /> : <VolumeOffIcon />)}
                  </IconButton>
                </Tooltip>
              )
            )}
            <Slider
              size="small"
              aria-label="Volume"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlaying;
