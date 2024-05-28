import { Link, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: grey[200],
        minHeight: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/contact">
        <Typography variant="h6" style={{ color: "black" }}>
          Contact
        </Typography>
      </Link>
    </div>
  );
}
