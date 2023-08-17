import React, { useEffect } from "react";
import { useLayoutEffect, useState } from "react";
// import '../Styles.modules/mainmovie.css'
import styles from "../Styles.modules/mainmovie.module.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useLocation } from "react-router-dom";
import Popper from "@mui/material/Popper";
import Popover from "@mui/material/Popover";
// import { makeStyles } from "@material-ui/core/styles";
import MovieCard from "./MovieCards";
import { MenuList } from "@mui/material";
import { TryOutlined } from "@mui/icons-material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MovieAllList = {
  movies: [
    { name: "Popular", path: "/popular" },
    { name: "Now Playing", path: "/now-playing" },
    { name: "Up Coming", path: "/upcoming" },
  ],
  tvShows: ["Popular", "Airing Today", "On Tv", "Top Rated"],
  people: ["Popular People"],
};

const pages = [
  { name: "Movies", path: "movie" },
  { name: "TV Shows", path: "tv" },
  { name: "People", path: "person" },
];

export default function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openSmallCard, setOpenSmallCard] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenuserMenu = (e) => {
    setOpenSmallCard(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setOpenSmallCard(null);
  };
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                {/* Navbar content at burger icon */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, ind) => (
                    <MenuItem key={ind} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              {/* Main nav bar content at medium size */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: "50px",
                }}
              >
                {/* {pages.map((page, ind) => (
                     <NavLink
                       key={ind}
                       aria-haspopup="true"
                       className={styles.hover_all_movies}
                       aria-owns={open ? "mouse-over-popover" : undefined}
                       // onClick={handleOpenuserMenu}
                       // style={{ position: "absolute" }}
                       // onMouseEnter={(e) => {
                       //   setOpenSmallCard(e.currentTarget);
                       // }}
                       // onMouseLeave={(e) => {
                       //   setOpenSmallCard(null);
                       // }}
                       to={page.path}
                     >
                       <Button
                         key={ind}
                         // onClick={handleCloseNavMenu}
                         sx={{ my: 2, color: "white", display: "block" }}
                       >
                         {page.name}
                       </Button>
                     </NavLink>
                   ))} */}
                <div>
                  {/* <Menu
                   className={styles.hover_all_movies_hide}
                   id="mouse-over-popover"
                   sx={{
                     pointerEvents: "none",
                   }}
                   open={open}
                   anchorEl={openSmallCard}
                   anchorOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                   }}
                   transformOrigin={{
                     vertical: "top",
                     horizontal: "left",
                   }}
                   // onClose={handleCloseUserMenu}
                   disableRestoreFocus
                   >
                     {pages.map((page, ind) => (
                       <MenuItem key={ind} onClick={handleCloseNavMenu}>
                         <Typography textAlign="center">{page.name}</Typography>
                       </MenuItem>
                     ))}
                   </Menu> */}
                </div>
                <div className={styles.dropdown}>
                  <Button color="secondary" variant="primary">
                    Movies
                  </Button>
                  <div className={styles.dropdown_content}>
                    {MovieAllList &&
                      MovieAllList.movies.length > 0 &&
                      MovieAllList?.movies.map((item, ind) => (
                        <NavLink key={ind} to={`/movie${item?.path}`}>
                          {item?.name}
                        </NavLink>
                      ))}
                  </div>
                </div>
                <div className={styles.dropdown}>
                  <Button color="secondary" variant="primary">
                    TV Shows
                  </Button>
                  <div className={styles.dropdown_content}>
                    {MovieAllList &&
                      MovieAllList.tvShows.length > 0 &&
                      MovieAllList?.tvShows.map((item, ind) => (
                        <NavLink key={ind} to={item}>
                          {item}
                        </NavLink>
                      ))}
                  </div>
                </div>

                <div className={styles.dropdown}>
                  <Button color="secondary" variant="primary">
                    People
                  </Button>
                  <div className={styles.dropdown_content}>
                    {MovieAllList &&
                      MovieAllList.people.length > 0 &&
                      MovieAllList?.people.map((item, ind) => (
                        <NavLink key={ind} to={item}>
                          {item}
                        </NavLink>
                      ))}
                  </div>
                </div>
              </Box>

              {/* <Box sx={{ flexGrow: 0 }}>
             <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
               </IconButton>
             </Tooltip>
             <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
               {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>
               ))}
             </Menu>
           </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
