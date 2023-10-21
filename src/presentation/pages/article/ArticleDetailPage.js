import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// core import
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

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
import UnstyledTextareaIntroduction from "../../components/form/UnstyledTextareaIntroduction";

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
    let data = { id, accessToken };
    dispatch(selectArticleDetailAsyncThunk(data));
  }, []); // Include history as a dependency

  function upVoteClick(articleId){
    console.log("upVoteClick " + articleId);
  }
  function downVoteClick(articleId){
    console.log("downVoteClick " + articleId);
  }

  return (
    <Container sx={{ py: { xs: 8, lg: 16 } }}>

      {status != 'succeeded' ? "Loading" :
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 2
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

          <Typography variant="body2" color="text.secondary" mb={5}>
            {article.content}
          </Typography>

          { /* list of vote and comment count */}
          <Box
            sx={{
              display: "flex", flexDirection: "row"
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button onClick={()=> upVoteClick(article.id)} variant={article.user_vote == 1 ? "contained" : "outlined"} startIcon={<ArrowCircleUpIcon />}>
                Up Vote ({article.up_vote})
              </Button>
              <Button onClick={()=> downVoteClick(article.id)}  variant={article.user_vote == 0 ? "contained" : "outlined"} startIcon={<ArrowCircleDownIcon />}>
                Down Vote ({article.down_vote})
              </Button>
            </Stack>
          </Box>


          <Typography variant="subtitle1">Comments</Typography>

          {article.comments.map((comment, i) =>
            <Box
              sx={{
                display: "flex", flexDirection: "row"
              }}
            >
              <Avatar
                src={comment.user.photo_url}
                sx={{ width: 28, height: 28, mr: 1 }}
              />
              <Box
                sx={{
                  display: "flex", flexDirection: "column"
                }}
              >
                <Typography variant="subtitle1">{comment.user.name}</Typography>
                <Typography variant="subtitle1">{comment.content}</Typography>
                <hr />
              </Box>



            </Box>
          )}
          <UnstyledTextareaIntroduction />
          
        </Box>
      }
    </Container>
  );
}
export default ArticleDetailPage;