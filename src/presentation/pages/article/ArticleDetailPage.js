import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// core import
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// redux

import {
  // thunks
  selectArticleDetailAsyncThunk,
  // actions
  reset,
  // selectors
  selectArticleDetail,
  selectArticleDetailStatus,
  selectArticleDetailError
} from './../../../features/articles/articleSlice';


import {
  // selectors
  loggedInUser
} from './../../../features/user/userSlice';

const data = {
  title: "React with MUI 5 Blog 1 Section",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
  author: "Jimmy",
  authorImg: "https://via.placeholder.com/150",
};

const ArticleDetailPage = () => {
  // main input
  let { id } = useParams();

  // core
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // internal state
  const [loading, setLoading] = useState(false);

  // selector hooks
  // article detail
  const status = useSelector(selectArticleDetailStatus);
  const error = useSelector(selectArticleDetailError);
  const article = useSelector(selectArticleDetail);
  // user
  const user = useSelector(loggedInUser);


  // dispatch select article detail api
  useEffect(() => {
    let accessToken = user.accessToken;
    let data = {id,accessToken };
    dispatch(selectArticleDetailAsyncThunk(data));
  }, []); // Include history as a dependency

  return (
    <Container sx={{ py: { xs: 8, lg: 16 } }}>

      { status != 'succeeded' ? "Loading" : 
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
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={5}>
          {article.content}
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
              src={article.user.photo_url}
              sx={{ width: 28, height: 28, mr: 1 }}
            />
            <Typography variant="subtitle1">{article.user.name}</Typography>
          </Box>

        </Box>
      </Box>
      }
    </Container>
  );
}
export default ArticleDetailPage;