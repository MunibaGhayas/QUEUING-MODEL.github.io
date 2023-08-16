import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CountUp from "react-countup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function GGC() {
  const [varianceOfArrival, setVarianceOfArrival] = useState("");
  const [varianceOfService, setVarianceOfService] = useState("");
  const [lemda, setLemda] = useState(0);
  const [mue, setMue] = useState(0);
  const [servers, setServers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [l, setL] = useState(0);
  const [lq, setLq] = useState(0);
  const [w, setW] = useState(0);
  const [wq, setWq] = useState(0);
  const [p, setP] = useState(0);
  const [po, setPo] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const ro = lemda / (servers * mue);
    const csquareA = varianceOfArrival / (1 / lemda) ** 2;
    const csquareS = varianceOfService / (1 / mue) ** 2;

    setL(lemda / (mue - lemda));
    setLq(
      (ro ** 2 * (1 + csquareS) * (csquareA + ro ** 2 * csquareS)) /
        (2 * (1 - ro) * (1 + ro ** 2 * csquareS))
    );
    setWq(lemda / (mue * (mue - lemda)));
    setW(1 / (mue - lemda));
    setP(ro);
    setPo(1 - ro);

    setShowResult(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            <Grid md={4}>
              {" "}
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Mean of Arrival
                </Typography>
                <Box mb={3} mt={2}>
                  <TextField
                    label="λ"
                    color="secondary"
                    type="number"
                    value={lemda}
                    onChange={(e) => setLemda(e.target.value)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={2}></Grid>
            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Mean of service time
                </Typography>
                <Box mb={2} mt={2}>
                  <TextField
                    label="μ"
                    color="secondary"
                    type="number"
                    value={mue}
                    onChange={(e) => setMue(e.target.value)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={2}></Grid>
            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Variance of arrival time
                </Typography>
                <Box mb={2} mt={2}>
                  <TextField
                    label="variance"
                    color="secondary"
                    type="number"
                    value={varianceOfArrival}
                    onChange={(e) => setVarianceOfArrival(e.target.value)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={2}></Grid>
            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Variance of Service time
                </Typography>
                <Box mb={2} mt={2}>
                  <TextField
                    label="variance"
                    color="secondary"
                    type="number"
                    value={varianceOfService}
                    onChange={(e) => setVarianceOfService(e.target.value)}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={1}></Grid>
            <Grid md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: 3,
                  mb: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Number Of Servers
                </Typography>
                <TextField
                  label="Number of Servers"
                  type="number"
                  color="secondary"
                  margin="normal"
                  value={servers}
                  onChange={(e) => setServers(Number(e.target.value))}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid md={1}></Grid>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
              color="secondary"
            >
              Calculate
            </Button>
          </Grid>
        </Box>
        {showResult && (
          <>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Result
            </Typography>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "purple",
                  }}
                >
                  <CountUp
                    start={0}
                    end={l}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} /> Customers
                      </div>
                    )}
                  </CountUp>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "purple" }}
                >
                  L{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Average Number of Customers in System
                  </Typography>
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "skyblue",
                  }}
                >
                  <CountUp
                    start={0}
                    end={lq}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "skyblue" }}
                >
                  Lq{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Average number of customers in the queue
                  </Typography>
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "green",
                  }}
                >
                  <CountUp
                    start={0}
                    end={w}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "green" }}
                >
                  W{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Average Time Spent in System
                  </Typography>
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "red",
                  }}
                >
                  <CountUp
                    start={0}
                    end={wq}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    {mue}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "red" }}
                >
                  Wq{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Average Time Waiting in Queue
                  </Typography>
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "orange",
                  }}
                >
                  <CountUp
                    start={0}
                    end={p}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  ></Typography>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "orange" }}
                >
                  p{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Server Utilization
                  </Typography>
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 3,
                mb: 3,
              }}
            >
              <Grid container flexDirection="column">
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: "bold",
                    display: "inline-flex",
                    color: "orange",
                  }}
                >
                  <CountUp
                    start={0}
                    end={po}
                    duration={2}
                    separator=" "
                    decimals={5}
                    decimal="."
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </Typography>
                <Typography
                  sx={{ fontSize: 25, fontWeight: "bold", color: "orange" }}
                >
                  po{" "}
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Probability of all servers being idle
                  </Typography>
                </Typography>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}
