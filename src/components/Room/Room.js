import React from 'react';
import './Room.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router';
import { AttachMoney, LocalHotel, Wc } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
export default function Room({ room }) {
    const classes = useStyles();
    const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
    console.log("this is room components",Room, room);
    const style = {
        margin: "3px",
    }
    return (
        <Card className={classes.root} style={style}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {room.avater}
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={room.imgUrl}
                title="Paella dish"
            />
            <img src={`/images/${room.bedType}.png`} alt="" />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {room.discription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <LocalHotel />: {room.bed}
                </IconButton>
                <IconButton >
                    <Wc />: {room.capacity}
                </IconButton>
                <IconButton aria-label="price">
                    <AttachMoney />: {room.price}
                </IconButton>
                <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
                    Book
                </Button>
            </CardActions>
        </Card>
    );
}