import { Card, CardBody, Tabs, Tab } from '@nextui-org/react';
import DonutChart from './Chart';
import { Grid } from '@mui/material';

export const DashboardCard = ({ ratio, text }) => {
  const [numerator, denominator] = ratio.split('/').map(Number);
  const percentage = Math.round((numerator / denominator) * 100);

  return (
    <Card>
      <CardBody>
        <Grid container spacing={1} columns={2} rows={1} style={{ padding: '1.5%' }}>
          <Grid item style={{ width: '40%' }}>
            <div style={{ textAlign: 'center', marginRight: '15px', direction: 'rtl' }}>
              <h3>{text}</h3>
              <p style={{ fontSize: '1.5em' }}>
                <b>{numerator}</b>
              </p>
            </div>
          </Grid>
          <Grid item style={{ width: '60%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DonutChart percentage={percentage} size={100} />
            </div>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};
