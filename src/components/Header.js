import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "background: radial-gradient(circle, rgba(0,194,255,1) 0%, rgba(215,8,49,1) 100%);",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Space News</Typography>
        <Box display="flex" marginLeft="auto" marginRight="auto">
          <Tabs textColor="inherit" value={value} onChange={handleChange}>
            <Tab label="News" component={Link} to="/news" />
            <Tab label="Blogs" component={Link} to="/blogs" />
            <Tab label="Reports" component={Link} to="/reports" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;