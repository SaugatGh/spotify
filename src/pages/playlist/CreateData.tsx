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
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    3,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    4,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
    "The Weekend"
  ),
  createData(
    5,
    "Blinding Lights",

    159,
    "Flowers",
    4.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGo3umFzfZPecDq9phCqsieIk1EUSO8HFaw&usqp=CAU",
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
