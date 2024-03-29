// ** MUI Components
import Grid from '@mui/material/Grid'

// ** Demo Components
import AboutOverivew from 'Pages/UserProfile/profile/AboutOverivew'
import ProjectsTable from 'Pages/UserProfile/profile/ProjectsTable'
import ActivityTimeline from 'Pages/UserProfile/profile/ActivityTimeline'
import ConnectionsTeams from 'Pages/UserProfile/profile/ConnectionsTeams'

const ProfileTab = ({ data }) => {
  return data && Object.values(data).length ? (
    <Grid container spacing={6}>
      <Grid item xl={4} md={5} xs={12}>
        <AboutOverivew 
          about={data.profile.about} 
          teams={data.profile.teams} 
          contacts={data.profile.contacts} 
          overview={data.profile.overview} 
        />
      </Grid>
      <Grid item xl={8} md={7} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ActivityTimeline />
          </Grid>
          <ConnectionsTeams connections={data.profile.connections} teams={data.profile.teamsTech} />
          <Grid item xs={12}>
            <ProjectsTable />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null
}

export default ProfileTab
