import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { QuestionOne } from "../dummydata/Data";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8fa3",
    },
  },
});

const Content = () => {
  const [indexNum, setIndexNum] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [selectedAns, setSelectedAns] = useState({});
  const [correctAns, setCorrectAns] = useState("");
  const [click, setClick] = useState(false);

  const nextBtn = () => {
    setIndexNum(indexNum + 1);
    setSelectedAns({});
    setClick(false);
  };
  const prevBtn = () => {
    setIndexNum(indexNum - 1);
    setSelectedAns({});
    setClick(false);
  };
  const addItem = (i) => {
    setSelectedAns({ id: i.id, content: i.content });
    setClick(true);
  };

  useEffect(() => {
    setDataArr(QuestionOne.filter((question, index) => index === indexNum));
    setCorrectAns(
      QuestionOne.filter((question, index) => index === indexNum).correctAnswer
    );
  }, []);
  useEffect(() => {
    setDataArr(QuestionOne.filter((question, index) => index === indexNum));
    setCorrectAns(
      QuestionOne.filter((question, index) => index === indexNum)[0]
        .correctAnswer
    );
  }, [indexNum, correctAns, selectedAns]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ height: "10vh" }}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography>
          <Button
            variant="outlined"
            onClick={prevBtn}
            disabled={indexNum === 0 ? true : false}
          >
            Prev
          </Button>
        </Typography>
        <Typography>
          <Button
            variant="contained"
            onClick={nextBtn}
            disabled={indexNum === QuestionOne.length - 1 ? true : false}
          >
            Next
          </Button>
        </Typography>
      </Box>
      <Box
        style={{
          height: "100%",
          border: "1px solid #fff0f3",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 4px #ff8fa3",
        }}
      >
        {dataArr.map((i) => (
          <div key={i.id}>
            <Typography variant="h5" style={{ marginBottom: "10px" }}>
              Q.{i.id}.{i.question}
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-evenly"
              alignItems="center"
              gap="14px"
            >
              {i.answers.map((a) => (
                <Box
                  key={a.id}
                  style={{
                    backgroundColor: click
                      ? a.content === correctAns
                        ? "#06d6a0"
                        : "#ef476f"
                      : "transparent",
                    padding: "12px",
                    borderRadius: "10px",
                    border: click ? "none" : "2px solid black",
                  }}
                  onClick={() => addItem(a)}
                >
                  <Typography variant="h6">{a.content}</Typography>
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default Content;
