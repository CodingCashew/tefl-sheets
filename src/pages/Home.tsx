import { Box, Container, Grid, Typography } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import { BsCupHotFill } from "react-icons/bs";

const Home: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary;
  const secondary = theme.palette.secondary;
  return (
    <Container disableGutters maxWidth={false} style={{marginTop: "5rem"}}>
      {/* row 1 */}
      <Box
        style={{
          minHeight: "90vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          // marginTop: "5rem"
        }}
      >
        <img
          alt="classroom"
          src="/assets/classroom-kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
          className="classroomImage"
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.7,
            objectFit: "cover",
            position: "absolute",
            zIndex: -1000,
          }}
        />
        <Typography
          variant="h4"
          align="left"
          style={{ color: "white" }}
          gutterBottom
        >
          Ready to spark your students' curiosity?
        </Typography>
        <Typography
          variant="h2"
          align="left"
          style={{ color: secondary.light, fontWeight: "bold" }}
          gutterBottom
        >
          Ignite Your Classroom
        </Typography>
        <Typography
          variant="h4"
          align="left"
          style={{ color: "white" }}
          gutterBottom
        >
          Kindle your students' interest using our TEFL Sheets
        </Typography>
      </Box>
      {/* row 2 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: primary.main,
          padding: "1rem",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          <Grid
            item
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              marginLeft: 0,
            }}
          >
            <Typography variant="h6" align="left">
              <BsCupHotFill style={{ marginRight: "1rem" }} />
              STEP ONE: Select Your Sheets
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
            }}
          >
            <Typography variant="h6" align="left">
              <BsCupHotFill style={{ marginRight: "1rem" }} />
              STEP TWO: Utilize them in your classroom
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
            }}
          >
            <Typography variant="h6" align="left">
              <BsCupHotFill style={{ marginRight: "1rem" }} />
              STEP THREE: Watch the engagement grow
            </Typography>
          </Grid>
        </Grid>
        {/* Main part of row 1 */}
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "40vh",
            }}
          >
            <Typography variant="h3" align="center">
              When you use TEFL Sheets, engagement goes up.
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h5" align="center" gutterBottom>
              Plan your lessons more efficiently so you can focus on what you do
              best: teaching. It's time to stop spending hours creating lesson
              plans and start spending more time engaging with your students.
              TEFL Sheets are designed to help you do just that.
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          > */}
        {/* </Grid> */}
      </Box>
      {/* row 3 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", width: "100vw", backgroundColor: "white" }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          This is thing 3
        </Typography>
      </Box>
      {/* row 4 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: secondary.main,
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          This is thing 4
        </Typography>
      </Box>
      {/* row 5 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", width: "100vw", backgroundColor: "white" }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          This is thing 5
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
