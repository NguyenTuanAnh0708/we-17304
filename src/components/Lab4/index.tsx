import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
const Lab4 = () => {
  const [seach, setSeach] = useState("");
  const [urlImgs, setUrlImgs] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState(0);
  const debounceValue = useDebounce(seach, 300);
  const onChangeSeach = (e: any) => {
    setSeach(e.target.value);
    setPage(1);
  };

  const LoadMore = () => {
    setPage((preState: number) => preState + 1);
  };
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=5-Q1TKeEehRZtPFm_HgqyI0ss0z-KxRWkRsBzO3mR0s&query=${debounceValue}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotalPage(data.total_pages);
        const Resultimgs: string[] = data.results.map(
          (result: any) => result.urls.regular
        );
        if (page == 1) {
          setUrlImgs(Resultimgs);
        } else {
          setUrlImgs((prevState: string[]) => [...prevState, ...Resultimgs]);
        }
      });
  }, [debounceValue, page]);
  return (
    <div className="SeachImgs">
      <Typography variant="h3">Handel Images for lab4</Typography>
      <TextField
        sx={{ margin: "20px 0px" }}
        id="standard-basic"
        label="Seach images....."
        variant="standard"
        value={seach}
        onChange={onChangeSeach}
      />
      <Typography sx={{ margin: "40px 0px" }} variant="h5">
        Result: {seach}
      </Typography>
      <div
        className="result"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px",
        }}
      >
        {urlImgs.map((imgs) => (
          <img
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            src={imgs}
          />
        ))}
      </div>
      {totalPage > page && (
        <Button
          sx={{ marginTop: "10px" }}
          onClick={LoadMore}
          variant="contained"
        >
          LoadMore
        </Button>
      )}
    </div>
  );
};

export default Lab4;
