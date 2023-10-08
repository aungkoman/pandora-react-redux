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
  const data = {
    title: "React with MUI 5 Blog 1 Section",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    author: "Jimmy",
    authorImg: "https://via.placeholder.com/150",
  };
  
const ArticleDetailPage = () => {
    return (
      <Container sx={{ py: { xs: 8, lg: 16 } }}>
        
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
                  {data.description}
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
                      src={data.authorImg}
                      sx={{ width: 28, height: 28, mr: 1 }}
                    />
                    <Typography variant="subtitle1">{data.author}</Typography>
                  </Box>
                  
                </Box>
              </Box>
      </Container>
    );
  }
  export default ArticleDetailPage;