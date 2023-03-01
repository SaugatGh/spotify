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
interface MusicPlayingProps {
  row: TableRowType;
}
type TableRowType = {
  row: Row;
  hoveredRow: Row | null;
  setHoveredRow: React.Dispatch<React.SetStateAction<Row | null>>;
  clickedRow: number | null;
  setClickedRow: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedRow: React.Dispatch<React.SetStateAction<Row | null>>;
  showMusicPlaying: boolean;
  setShowMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
type Row = {
  sn: number;
  img: string;
  title: string;
  description: string;
  plays: number;
  album: string;
  icon: number;
};

const MusicPlaying = ({ row }) => {
  const [value, setValue] = useState<number>(30);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);

  const duration = 180;
  const position = 20;
  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleVolumeClick = () => {
    setMuted(!muted);
  };

  return (
    <div>
      <div className="musicContainer">
        <div className="musicPlaying">
          <div className="musicInfo">
            <img src={row.img} alt="" />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1">{row.title}</Typography>
              <Typography variant="caption" sx={{ alignItems: "text-start" }}>
                {row.description}
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
                  <PlayCircleFilledIcon fontSize="large" />
                ) : (
                  <PauseIcon fontSize="large" />
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
                  <IconButton
                    onClick={index === 3 ? handleVolumeClick : undefined}
                  >
                    {index === 0 && <LyricsIcon />}
                    {index === 1 && <QueueIcon />}
                    {index === 2 && <ConnectedTvIcon />}
                    {index === 3 &&
                      (muted ? <VolumeOffIcon /> : <VolumeDownIcon />)}
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
