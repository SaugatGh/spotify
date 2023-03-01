import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Playlist.scss";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import MusicPlaying from "./MusicPlaying";
import { rows } from "./CreateData";
import ReactAudioPlayer from "react-audio-player";
type Row = {
  sn: number;
  img: string;
  title: string;
  description: string;
  plays: number;
  album: string;
  icon: number;
};
type Props = {
  rows: Row[];
};
interface TableRowType {
  sn: number;
  img: string;
  title: string;
  description: string;
}
const Playlist = (props: Props) => {
  const [showMusicPlaying, setShowMusicPlaying] = useState(false);

  const [hoveredRow, setHoveredRow] = useState<Row | null>(null);
  const [clickedRow, setClickedRow] = useState<number | null>(null);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);

  const handleClick = (row: Row) => {
    setSelectedRow(row);

    if (clickedRow === row.sn) {
      setClickedRow(null);
      setShowMusicPlaying(!showMusicPlaying);
    } else {
      setClickedRow(row.sn);
      setShowMusicPlaying(true);
    }
  };

  return (
    <div className="playlistId">
      <div className="playlistLeftbar">
        <Sidebar />
      </div>
      <div className="playlistRightbar">
        <div className="playlistNavbar">
          <Navbar />
        </div>
        <div className="playlistSection">
          <div className="playlistTop">
            <img
              src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg"
              alt=""
            />
            <div className="playlistDesc">
              <h2>Playlist</h2>
              <h1>Top 50-Global</h1>

              <p>
                Your daily update of the most played tracks right now-Global
              </p>
              <p>
                Spoify. 10000 liked. 50 songs, about 2 hrs 45 min.@ new entries.
              </p>
            </div>
          </div>
          <div className="playlistBottom">
            <div className="bottomTop">
              <PlayCircleFilledIcon className="icon" />
              <FavoriteBorderIcon className="icon2" />
              <MoreHorizIcon className="icon2" />
            </div>
            <Box margin="5px">
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "#0d1019", height: "50%" }}
              >
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  className="table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" sx={{ color: "white" }}>
                        #
                      </TableCell>
                      <TableCell align="left" sx={{ color: "white" }}>
                        Title
                      </TableCell>
                      <TableCell align="left" sx={{ color: "white" }}>
                        Plays
                      </TableCell>
                      <TableCell align="left" sx={{ color: "white" }}>
                        Album
                      </TableCell>
                      <TableCell align="left" sx={{ color: "white" }}>
                        <MoreTimeIcon />
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.sn}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#232c34",
                          },
                          "&:last-child td, &:last-child th": { border: 0 },
                          height: "50px",
                        }}
                        onMouseEnter={() => setHoveredRow(row)}
                        onMouseLeave={() => setHoveredRow(null)}
                        onClick={() => {
                          handleClick(row);
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            color: "white",
                            height: "100%",
                            padding: "5px",
                          }}
                          align="right"
                        >
                          {showMusicPlaying && selectedRow?.sn === row.sn ? (
                            <PauseIcon fontSize="small" />
                          ) : hoveredRow === row ? (
                            <PlayArrowIcon fontSize="small" />
                          ) : (
                            row.sn
                          )}
                        </TableCell>

                        <TableCell className="tableCell" align="left">
                          <img src={row.img} />
                          <div className="songDescriptionRow">
                            <Typography className="typography">
                              {row.title}
                            </Typography>
                            <Typography className="typography">
                              {row.description}
                            </Typography>
                          </div>
                        </TableCell>
                        <TableCell align="left" sx={{ color: "white" }}>
                          {row.plays}
                        </TableCell>
                        <TableCell align="left" sx={{ color: "white" }}>
                          {row.album}
                        </TableCell>
                        <TableCell align="left" sx={{ color: "white" }}>
                          {row.icon}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>

          {showMusicPlaying && <MusicPlaying row={selectedRow} />}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
