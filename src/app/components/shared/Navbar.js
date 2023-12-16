"use client"

//logo
import logo from "@/app/assets/logo.png"
// icon
import FacebookIcon from "@mui/icons-material/Facebook";
//
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";


const navItems = [
   {
    route:"Home",
    pathname:"/",
},
   {
    route:"Pages",
    pathname:"pages",
},
   {
    route:"Category",
    pathname:"/category",
},
   {
    route:"News",
    pathname:"/news",
},
   {
    route:"About",
    pathname:"/about",
},
   {
    route:"Contact",
    pathname:"/contact",
},

];


function Navbar() {



  return (
    <AppBar position="static"  className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* image */}
          <Image src={logo} width={100} height={100} alt="logo"></Image>

          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>

          {/* div box r moto kaj korey */}

          <Box>
            <Stack direction="row"
            
            sx={{
              "& svg":{
                color:"white",
              },
            }}
            
            >
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;