import {
    Container,
    Grid,
    Box,
    Avatar,
    Typography,
    Button,
  } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {  Link } from "react-router-dom";
  
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import {
  // selectors
  loggedInUser,
  loginStatus
} from './../../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

import React, { useEffect } from 'react';

import {
  // thunks
  selectArticlesAsyncThunk,
  // selectors
  selectArticles
} from './../../../features/articles/articleSlice';


const blogData = [
    {
      id: 1,
      title: "React with MUI 5 Blog 1 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jimmy",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
    {
      title: "React with MUI 5 Blog 2 Section",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      author: "Jhon",
      authorImg: "https://via.placeholder.com/150",
    },
];

const ArticleListPage = () => {
  // core
  const dispatch = useDispatch();

  // selector hooks
  // for user section
  const status = useSelector(loginStatus);
  const user = useSelector(loggedInUser);
  // article section
  const articles = useSelector(selectArticles);



  useEffect(() => {
    console.log("ArticleListPage useEffect");
    let data = {
      page : 1,
      filter : {},
      accessToken : user.accessToken
    }
    dispatch(selectArticlesAsyncThunk(data));
  }, []); // Include history as a dependency


    return (
      <Container sx={{ py: { xs: 8, lg: 16 } }}>
        <Box
          sx={{
            mx: "auto",
            mb: { lg: 16, sm: 8 },
            maxWidth: "sm",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            mb={4}
            sx={{ fontWeight: "extrabold" }}
          >
            Pandora Box
          </Typography>
          <Typography variant="body1" color="text.secondary">
           Read, Write and Connect Anonymously
          </Typography>
          { status == "idle" ? <Link to="/login">Login</Link> : "" }
          <br />
          { status == "idle" ? <Link to="/register">Register</Link> : "" }
          <br />
          { status == "succeeded" ? <Link to="/logout">Logout</Link> : "" }
         
          
        </Box>

        { articles.length == 0 ? "Loading" : 
        <Grid container spacing={8}>
          {articles.map((data, i) => (
            <Grid item lg={6} key={i}>
              <Box
                sx={{
                  p: 6,
                  border: 1,
                  borderColor: "grey.200",
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={5}>
                  {data.content}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={data.user.photo_url}
                      sx={{ width: 28, height: 28, mr: 1 }}
                    />
                    <Typography variant="subtitle1">{data.user.name}</Typography>
                  </Box>
                  <Link to={"/articles/" + data.id}>
                    <Button endIcon={<ArrowForward />} color="primary" size="small">
                      Read more
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

                }
      </Container>
    );
  }
  export default ArticleListPage;