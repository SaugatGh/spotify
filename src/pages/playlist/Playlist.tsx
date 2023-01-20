import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Playlist.scss";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function createData(SN, TITLE, PLAYS, ALBUM, ICON) {
  return { SN, TITLE, PLAYS, ALBUM, ICON };
}

const rows = [
  createData(1, "FLOWERS", 159, "Flowers", 4.0),
  createData(2, "FLOWERS", 159, "Flowers", 4.0),
  createData(3, "FLOWERS", 159, "Flowers", 4.0),
  createData(4, "FLOWERS", 159, "Flowers", 4.0),
  createData(5, "FLOWERS", 159, "Flowers", 4.0),
  createData(5, "FLOWERS", 159, "Flowers", 4.0),
  createData(5, "FLOWERS", 159, "Flowers", 4.0),
  createData(5, "FLOWERS", 159, "Flowers", 4.0),
];

const Playlist = () => {
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
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "#0d1019" }}
            >
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                className="table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>#</TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Title
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Plays
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Album
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      <MoreTimeIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.SN}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {" "}
                        {row.SN}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {row.TITLE}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {row.PLAYS}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {row.ALBUM}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {row.ICON}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
