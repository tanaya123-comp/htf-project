import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function LevelTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Newbie
                    </Typography>
                    <Typography>Just Joined the Mission</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Intermediate
                    </Typography>
                    <Typography>1 Green Defender</Typography>
                    <Typography>1 Waste Warrior</Typography>
                    <Typography>1 World Cleaner</Typography>
                    <Typography>1 Serial Runner</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} style={{ opacity: "0.6" }}>
                    <Typography variant="h6" component="span">
                        Expert
                    </Typography>
                    <Typography>3 Green Defender</Typography>
                    <Typography>3 Waste Warrior</Typography>
                    <Typography>3 World Cleaner</Typography>
                    <Typography>3 Serial Runner</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} style={{ opacity: "0.6" }}>
                    <Typography variant="h6" component="span">
                        Elite
                    </Typography>
                    <Typography>5 Green Defender</Typography>
                    <Typography>5 Waste Warrior</Typography>
                    <Typography>5 World Cleaner</Typography>
                    <Typography>5 Serial Runner</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} style={{ opacity: "0.6" }}>
                    <Typography variant="h6" component="span">
                        Champion
                    </Typography>
                    <Typography>10 Green Defender</Typography>
                    <Typography>10 Waste Warrior</Typography>
                    <Typography>10 World Cleaner</Typography>
                    <Typography>10 Serial Runner</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <StarOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }} style={{ opacity: "0.6" }}>
                    <Typography variant="h6" component="span">
                        Keep Contributing!
                    </Typography>
                    <Typography>You do not need to stop even if you are a Champion</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
