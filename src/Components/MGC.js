import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CountUp from "react-countup";

const theme = createTheme();

export default function MGC() {
  const [l, setL] = useState(0);
  const [lq, setLq] = useState(0);
  const [w, setW] = useState(0);
  const [wq, setWq] = useState(0);
  const [p, setP] = useState(0);
  const [numberOfServers, setNumberOfServers] = useState(0);
  const [lemda, setLemda] = useState(0);
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);

  const [mue, setMue] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (event) => {
    setP(0);
    setL(0);
    setLq(0);
    setW(0);
    setWq(0);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const mue = 1 / ((minimum + maximum) / 2);
    const ro = lemda / (numberOfServers * mue);

    const varianceOfServiceTime = (maximum - minimum) ** 2 / 12;

    setLq((lemda ** 2 * varianceOfServiceTime + ro ** 2) / (2 * (1 - ro)));
    setWq(lemda / (mue * (mue - lemda)));
    setW(1 / (mue - lemda));
    setL(lemda / (mue - lemda));
    setP(ro);

    setShowResult(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container flexDirection="row" justifyContent="space-evenly">
            <Grid md={10}>
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
                  Mean of Arrival (having exponential distribution)
                </Typography>
                <Box mb={2}>
                  <TextField
                    margin="normal"
                    color="secondary"
                    fullWidth
                    name="lemda"
                    label="λ"
                    type="number"
                    id="lemda"
                    value={lemda}
                    onChange={(e) => setLemda(Number(e.target.value))}
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
                  Mean of service time having uniform distibution ( Minimum )
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="minimum"
                  label="Enter minimum value"
                  color="secondary"
                  name="minimum"
                  type="number"
                  onChange={(e) => setMinimum(Number(e.target.value))}
                />
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
                  Mean of service time having uniform distibution ( Maximum )
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="maximum"
                  label="Enter maximum value"
                  color="secondary"
                  name="maximum"
                  type="number"
                  onChange={(e) => setMaximum(Number(e.target.value))}
                />
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
                  Number Of Servers
                </Typography>
                <TextField
                  label="Number of Servers"
                  type="number"
                  color="secondary"
                  margin="normal"
                  value={numberOfServers}
                  onChange={(e) => setNumberOfServers(Number(e.target.value))}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid md={1}></Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Calculate
          </Button>
        </Box>

        {showResult ? (
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
              <Grid conatiner flexDirection="column">
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
                        <span ref={countUpRef} /> customers
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
                    Average number of Customers in System
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
              <Grid conatiner flexDirection="column">
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
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    Customers
                  </Typography>
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
                    Average Customers in Queue
                  </Typography>
                </Typography>

                <Typography sx={{ color: "gray" }}>
                  Average number of customers (entities) in the queue. In other
                  words the expected amount of customers waiting to be served.
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
              <Grid conatiner flexDirection="column">
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
                  <Typography
                    sx={{
                      ml: 2,
                      color: "gray",
                      fontSize: 25,
                      fontWeight: "normal",
                      display: "inline-flex",
                    }}
                  >
                    {lemda}
                  </Typography>
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

                <Typography sx={{ color: "gray" }}>
                  Average time spent by a customer from arrival until fully
                  served.
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
              <Grid conatiner flexDirection="column">
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
                    Average Time Waiting in Line
                  </Typography>
                </Typography>

                <Typography sx={{ color: "gray" }}>
                  Average time it takes a customer to start being served.
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
              <Grid conatiner flexDirection="column">
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
                  ρ{" "}
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

                <Typography sx={{ color: "gray" }}>
                  Percentage of time a server is being utilized by a customer.{" "}
                </Typography>
              </Grid>
            </Box>
          </>
        ) : null}
      </Container>
    </ThemeProvider>
  );
}
