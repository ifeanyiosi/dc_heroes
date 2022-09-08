import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

const Main = () => {
  return (
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <Box className="h-full" height="full" width="full">
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.digitaltrends.com/wp-content/uploads/2022/06/Darth-Vader-Obi-Wan-Kenobi.jpg?p=1"
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5 component='div'">
                    React
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is the description of the component
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        </div>
        {/* <!-- /End replace --> */}
      </div>
    </main>
  );
};

export default Main;
