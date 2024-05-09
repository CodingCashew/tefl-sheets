import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import { BsCupHotFill } from "react-icons/bs";

const Home: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary;
  const secondary = theme.palette.secondary;
  return (
    <Container disableGutters maxWidth={false} style={{ marginTop: "5rem" }}>
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
        <Button
          variant="contained"
          size="large"
          href="/sheets"
          style={{
            backgroundColor: secondary.main,
            color: "white",
            marginTop: "1rem",
          }}
        >
          Select Your Sheets
        </Button>
      </Box>
          {/* row 2a */}
          <Box
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "white",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "20vh",
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
            }}
          >
            <img
              src="/assets/classroom-kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
              style={{
                marginTop: "2rem",
                marginBottom: ".5rem",
                boxShadow: "0 0 10px 5px #ccc",
              }}
              height="350"
              alt="classroom instruction"
            />
            </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" align="center">
              something about their plight
            </Typography>
            <Typography
              variant="h3"
              align="center"
              style={{ color: primary.light, marginBottom: "1rem", marginTop: "1rem" }}
            >
              at TEFL Sheets, we understand
            </Typography>
            <Typography variant="h3" align="center">
              that's why we....
            </Typography>
          </Grid>
        </Grid>
        </Box>
      {/* row 2b */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "120vh",
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
              minHeight: "20vh",
            }}
          >
            <Typography variant="h3" align="center">
              When you use TEFL Sheets,{" "}
              <span style={{ color: "white" }}>engagement goes up.</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} style={{ marginTop: "2rem" }}>
            <Typography variant="h6" align="center">
              Plan your lessons more efficiently so you can focus on what you do
              best: teaching. It's time to stop spending hours creating lesson
              plans and start spending more time engaging with your students.
              TEFL Sheets are designed to help you do just that.
            </Typography>
          </Grid>
        </Grid>
        {/* bottom part of row 2 */}
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
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              marginLeft: 0,
              maxWidth: "20rem",
            }}
          >
            <BsCupHotFill
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              size="60"
            />
            <Typography variant="h5" align="center">
              1. Select Your Sheets
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Select Your SheetsSelect Your SheetsSelect Your SheetsSelect Your
              SheetsSelect Your SheetsSelect Your SheetsSelect Your SheetsSelect
              Your SheetsSelect Your SheetsSelect Your SheetsSelect Your
              SheetsSelect Your SheetsSelect Your Sheets
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              maxWidth: "20rem",
            }}
          >
            <BsCupHotFill
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              size="60"
            />
            <Typography variant="h5" align="center">
              2. Utilize them in your classroom
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Utilize them in your classroom Utilize them in your classroom
              Utilize them in your classroom Utilize them in your classroom
              Utilize them in your classroom Utilize them in your classroom
              Utilize them in your classroom Utilize them in your classroom
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              maxWidth: "20rem",
            }}
          >
            <BsCupHotFill
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              size="60"
            />
            <Typography variant="h5" align="center">
              3. Watch the engagement grow
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Watch the engagement grow Watch the engagement grow Watch the
              engagement grow Watch the engagement grow Watch the engagement
              grow Watch the engagement grow Watch the engagement grow
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* row 3 */}
      <Box
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "white",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "20vh",
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
            }}
          >
            <Typography variant="h3" align="center">
              What does using
            </Typography>
            <Typography
              variant="h3"
              align="center"
              style={{ color: primary.light }}
            >
              TEFL Sheets
            </Typography>
            <Typography variant="h3" align="center">
              feel like?
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          md={9}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              marginLeft: 0,
              maxWidth: "16rem",
            }}
          >
            <img
              src="/assets/classroom-kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
              style={{
                marginTop: "2rem",
                marginBottom: ".5rem",
                boxShadow: "0 0 10px 5px #ccc",
              }}
              height="150"
              alt="classroom instruction"
            />
            <Typography
              variant="h4"
              align="center"
              style={{ color: secondary.main }}
            >
              Simple
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Simply select the sheets you need for your lesson and you're ready
              to go.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              maxWidth: "16rem",
            }}
          >
            <img
              src="/assets/classroom-kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
              style={{
                marginTop: "2rem",
                marginBottom: ".5rem",
                boxShadow: "0 0 10px 5px #ccc",
              }}
              height="150"
              alt="classroom instruction"
            />
            <Typography
              variant="h4"
              align="center"
              style={{ color: secondary.main }}
            >
              Fast
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              No more spending hours designing lesson materials.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              margin: ".5rem",
              maxWidth: "16rem",
            }}
          >
            <img
              src="/assets/classroom-kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
              style={{
                marginTop: "2rem",
                marginBottom: ".5rem",
                boxShadow: "0 0 10px 5px #ccc",
              }}
              height="150"
              alt="classroom instruction"
            />
            <Typography
              variant="h4"
              align="center"
              style={{ color: secondary.main }}
            >
              Effective
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Watch your students' engagement grow as you use TEFL Sheets in
              your classroom.
            </Typography>
          </Grid>
        </Grid>
          <Button
          variant="contained"
          size="large"
          href="/sheets"
          style={{
            backgroundColor: primary.main,
            color: "white",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Find Sheets Now
        </Button>
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
