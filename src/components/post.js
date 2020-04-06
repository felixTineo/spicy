import React from 'react';
import { color } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import { timeDifferenceForDate as timeDiff } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: color.prim,
    margin: "1rem 0",
  },
  header: {
    textTransform: "capitalize",
  },
  media: {
    height: 0,
    paddingTop: '80%', // 16:9
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
  cardContent: {
    padding: '.5rem',
  }
}));

export default ({ author, info, file, createdAt, likes, shared })=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar src={author.perfilImg} aria-label="recipe" className={classes.avatar} />
        }
        title={`${author.name} ${author.lastName}`}
        subheader={timeDiff(createdAt)}
      />
      <CardMedia
        className={classes.media}
        image={file}
      />
      <CardContent className={classes.cardContent}>
        <Typography style={{ fontSize: "11px" }} variant="body2" color="textSecondary" component="p">
          {info}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Badge badgeContent={likes.length} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="share">
          <Badge badgeContent={shared.length} color="secondary">
            <ShareIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          //COMENTARIOS  O LO QUE SEA
        </CardContent>
      </Collapse>
    </Card>
  );
}
