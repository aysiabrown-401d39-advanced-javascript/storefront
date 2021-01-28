import Typography from '@material-ui/core/Typography'

const Footer = (props) => {
    return (

        <Typography component="div" style={{ backgroundColor: '#f5e9ec', height: '150px', width: '100%' }}>
            <p><img src="https://img.icons8.com/nolan/64/like.png"/>Aysia Brown (c) 2021</p>
            <a href="https://icons8.com/icon/44018/heart">Heart icon by Icons8</a> ||
            <a href="https://icons8.com/icon/7SFIa9M06ZCg/year-of-dragon">Year of Dragon icon by Icons8</a>
        </Typography>
    )
}

export default Footer;