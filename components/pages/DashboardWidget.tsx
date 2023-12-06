import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface DashboardWidgetProps {
  title: string;
  content: string | number;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, content }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardWidget;
