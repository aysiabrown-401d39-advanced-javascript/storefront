import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {change} from '../store/categories'
// import {changeActive} from '../store/active-category'
import {connect} from 'react-redux';

const mapDispatchToProps = {change};

const mapStateToProps = state => ({
    inventory: state.products,
    current: state.current,
    categories: state.categories,
})

function Categories(props) {

    const handleClick = (e, val) => {
        e.preventDefault();
        props.change(val);
        console.log('onClick', props.current);
    }

    return (
        <>
        <Typography variant='caption'>BROWSE CATEGORIES</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" href="/" onClick={(e) => handleClick(e,'VIDEOGAMES')}>
                    Videogames 
                </Link>
                <Link color="inherit" href="/" onClick={(e) => handleClick(e,'BOARDGAMES')}>
                    Boardgames
                </Link>
                <Link
                    color="textPrimary"
                    href="/"
                    onClick={(e) => handleClick(e,'ALL')}
                    aria-current="page"
                >
                    All
                </Link>
            </Breadcrumbs>
            <Typography variant='h1'>{props.current.active}</Typography>
            </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);