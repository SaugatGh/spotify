export interface RowData {
  sn: number;
  title: string;
  plays: number;
  album: string;
  icon: number;
  img: string;
  description: string;
}
export function createData(
  sn: number,
  title: string,
  plays: number,
  album: string,
  icon: number,
  img: string,
  description: string
): RowData {
  return { sn, title, plays, album, icon, img, description };
}

export const rows = [
  createData(
    1,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    2,
    "Save your Tears",

    159,
    "Flowers",
    4.0,
    "https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_1323-crop-1.jpeg",
    "The Weekend"
  ),
  createData(
    3,
    "I was Never There",

    159,
    "Flowers",
    4.0,
    "https://variety.com/wp-content/uploads/2020/06/unnamed-1-2-e1593560403821.jpg",
    "The Weekend"
  ),
  createData(
    4,
    "Starboy",

    159,
    "Flowers",
    4.0,
    "https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj",
    "The Weekend"
  ),
  createData(
    5,
    "Maniac",

    159,
    "Flowers",
    4.0,
    "https://e.snmc.io/i/1200/s/335d673831f740212da7e7a38ff5a0e2/9570102",
    "The Weekend"
  ),
  createData(
    6,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    7,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    8,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    9,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    10,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
];
