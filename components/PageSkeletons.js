import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';

function SkeletonBookCard() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <Skeleton variant="rectangular" height={220} animation="wave" />
      <CardContent>
        <Skeleton variant="text" height={34} width="88%" animation="wave" />
        <Skeleton variant="text" height={28} width="64%" animation="wave" />
        <Skeleton variant="text" height={24} width="78%" animation="wave" />
      </CardContent>
    </Card>
  );
}

export function HomeLoadingSkeleton() {
  return (
    <Box sx={{ p: { xs: 1, md: 2 } }}>
      <Box
        sx={{
          borderRadius: 4,
          p: { xs: 2, md: 3 },
          mb: 3,
          background: '#eef3f8',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Skeleton variant="rounded" width={180} height={30} animation="wave" />
            <Skeleton variant="text" height={66} width="96%" animation="wave" />
            <Skeleton variant="text" height={66} width="86%" animation="wave" />
            <Skeleton variant="text" height={28} width="92%" animation="wave" />
            <Skeleton variant="text" height={28} width="84%" animation="wave" />
            <Skeleton
              variant="rounded"
              width={160}
              height={48}
              animation="wave"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Skeleton variant="rounded" height={320} animation="wave" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, px: 1 }}>
        <Skeleton variant="text" width={160} height={36} animation="wave" />
        <Skeleton variant="text" width={110} height={34} animation="wave" />
      </Box>

      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Grid item xs={6} sm={4} md={3} key={idx}>
            <SkeletonBookCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export function SearchLoadingSkeleton() {
  return (
    <Grid container spacing={2} sx={{ p: { xs: 1, md: 2 } }}>
      <Grid item xs={12} md={3}>
        <Skeleton variant="text" width={110} height={28} animation="wave" />
        <Skeleton variant="rounded" width="100%" height={52} animation="wave" />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Skeleton variant="text" width={200} height={30} animation="wave" />
          <Skeleton variant="text" width={70} height={30} animation="wave" />
        </Box>
        <Grid container spacing={2}>
          {Array.from({ length: 9 }).map((_, idx) => (
            <Grid item xs={6} sm={4} md={4} key={idx}>
              <SkeletonBookCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export function SingleBookLoadingSkeleton() {
  return (
    <Box sx={{ p: { xs: 1, md: 2 } }}>
      <Skeleton variant="text" width={120} height={32} animation="wave" />
      <Box
        sx={{
          mt: 1,
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          border: '1px solid rgba(33,53,73,0.08)',
          backgroundColor: '#f9fbff',
        }}
      >
        <Skeleton variant="text" height={62} width="70%" animation="wave" />
        <Grid container spacing={1} sx={{ mt: 0.5 }}>
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rounded" height={72} animation="wave" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rounded" height={72} animation="wave" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skeleton variant="rounded" height={72} animation="wave" />
          </Grid>
        </Grid>
        <Skeleton variant="rounded" height={160} sx={{ mt: 2 }} animation="wave" />
        <Skeleton variant="rounded" width={180} height={48} sx={{ mt: 2 }} animation="wave" />
      </Box>
    </Box>
  );
}
